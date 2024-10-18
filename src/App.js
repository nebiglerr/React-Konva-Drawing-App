import React, { useState, useRef } from 'react';
import { Stage, Layer, Rect, Circle, Line } from 'react-konva';
import { v4 as uuidv4 } from 'uuid';


const App = () => {
  const [shapes, setShapes] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [isSelecting, setIsSelecting] = useState(false);  // Seçim yapılıyor mu kontrolü
  const [selectionBox, setSelectionBox] = useState({ x: 0, y: 0, width: 0, height: 0 });  // Seçim dikdörtgeni
  const selectionBoxRef = useRef(null);  // Seçim dikdörtgeni için referans

  const startPos = useRef({ x: 0, y: 0 });

  const addRectangle = () => {
    const newShape = {
      id: uuidv4(),
      type: 'rect',
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      width: 100,
      height: 50,
      fill: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    };
    setShapes([...shapes, newShape]);
  };
  const selectAllShapes = () => {
    // Tüm şekillerin id'lerini seçili olarak ayarla
    const allIds = shapes.map(shape => shape.id);
    setSelectedIds(allIds);
  };

  const addCircle = () => {
    const newShape = {
      id:  uuidv4(),
      type: 'circle',
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: 50,
      fill: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    };
    setShapes([...shapes, newShape]);
  };

  const addLine = () => {
    const newShape = {
      id:  uuidv4(),
      type: 'line',
      points: [Math.random() * window.innerWidth, Math.random() * window.innerWidth, Math.random() * window.innerWidth, Math.random() * window.innerWidth],
      stroke: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      strokeWidth: 2,
    };
    setShapes([...shapes, newShape]);
  };

  const handleMouseDown = (e) => {
    const { x, y } = e.target.getStage().getPointerPosition();
    startPos.current = { x, y };
    setIsSelecting(true);
    setSelectionBox({ x, y, width: 0, height: 0 });
  };

  const handleMouseMove = (e) => {
    if (!isSelecting) return;

    const { x, y } = e.target.getStage().getPointerPosition();
    const width = x - startPos.current.x;
    const height = y - startPos.current.y;
    setSelectionBox({
      x: Math.min(x, startPos.current.x),
      y: Math.min(y, startPos.current.y),
      width: Math.abs(width),
      height: Math.abs(height),
    });
  };

  const handleMouseUp = () => {
    setIsSelecting(false);

    // Dikdörtgen içine giren şekilleri seç
    const selected = shapes.filter((shape) => {
      if (shape.type === 'rect') {
        return (
          shape.x < selectionBox.x + selectionBox.width &&
          shape.x + shape.width > selectionBox.x &&
          shape.y < selectionBox.y + selectionBox.height &&
          shape.y + shape.height > selectionBox.y
        );
      } else if (shape.type === 'circle') {
        return (
          shape.x - shape.radius < selectionBox.x + selectionBox.width &&
          shape.x + shape.radius > selectionBox.x &&
          shape.y - shape.radius < selectionBox.y + selectionBox.height &&
          shape.y + shape.radius > selectionBox.y
        );
      }
      return false;
    });

    setSelectedIds(selected.map((shape) => shape.id));
    setSelectionBox({ x: 0, y: 0, width: 0, height: 0 });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Delete' && selectedIds.length > 0) {
      setShapes(shapes.filter((shape) => !selectedIds.includes(shape.id)));
      setSelectedIds([]);
    }
  };
  const exportToJson = () => {
    const json = JSON.stringify(shapes);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shapes.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const importFromJson = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const importedShapes = JSON.parse(event.target.result);
      setShapes(importedShapes);
    };
    reader.readAsText(file);
  };


  return (
    <div tabIndex={0} onKeyDown={handleKeyDown} style={{ outline: 'none' }}>
      <button onClick={addRectangle}>Add Rectangle</button>
      <button onClick={addCircle}>Add Circle</button>
      <button onClick={addLine}>Add Line</button>
      <button onClick={selectAllShapes}>Select All</button>
      <button onClick={exportToJson}>Export to JSON</button>
      <input type="file" accept="application/json" onChange={importFromJson} />
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Layer>
          {shapes.map((shape, i) => {
            if (shape.type === 'rect') {
              return (
                <Rect
                  key={shape.id}
                  x={shape.x}
                  y={shape.y}
                  width={shape.width}
                  height={shape.height}
                  fill={shape.fill}
                  draggable
                  onClick={() => setSelectedIds([shape.id])}
                  stroke={selectedIds.includes(shape.id) ? 'black' : null}
                />
              );
            } else if (shape.type === 'circle') {
              return (
                <Circle
                  key={shape.id}
                  x={shape.x}
                  y={shape.y}
                  radius={shape.radius}
                  fill={shape.fill}
                  draggable
                  onClick={() => setSelectedIds([shape.id])}
                  stroke={selectedIds.includes(shape.id) ? 'black' : null}
                />
              );
            } else if (shape.type === 'line') {
              return (
                <Line
                  key={shape.id}
                  points={shape.points}
                  stroke={shape.stroke}
                  strokeWidth={shape.strokeWidth}
                  draggable
                  onClick={() => setSelectedIds([shape.id])}
                  //stroke={selectedIds.includes(shape.id) ? 'black' : shape.stroke}
                />
              );
            }
            return null;
          })}

          {/* Seçim Dikdörtgeni */}
          {isSelecting && (
            <Rect
              x={selectionBox.x}
              y={selectionBox.y}
              width={selectionBox.width}
              height={selectionBox.height}
              stroke="blue"
              dash={[10, 5]}
              ref={selectionBoxRef}
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default App;
