# React Konva Drawing App

This project is a drawing application built using React and React-Konva that allows users to create, select, move, and delete shapes such as rectangles, circles, and lines. Additionally, it supports JSON export/import functionality for shape data persistence.

## Features

- Add Rectangles, Circles, and Lines with random colors.
- Select shapes individually or through a selection box.
- Move and resize shapes.
- Delete selected shapes using the Delete key.
- Export shapes to a JSON file.
- Import shapes from a JSON file.
- Keyboard shortcuts for efficient interaction.

## Technologies Used

- React: Front-end library for building user interfaces.
- React-Konva: Library for 2D canvas rendering with React.
- UUID: For generating unique identifiers for shapes.
- HTML5 File API: Used for importing and exporting JSON data.

### Installation

1. Clone the repository:

```bash git clone <repository-url> ```

2. Navigate to the project directory:

```bash cd react-konva-drawing-app```

3.Install dependencies: Ensure you have Node.js installed, then run:

```bash npm install ```

4.Start the development server:

```bash  npm start ```

5.Open your browser: The application will be available at http://localhost:3000.
 

### Usage

- Add Shapes: Use the buttons to add rectangles, circles, or lines.
- Select Shapes: Click on a shape or draw a selection box around multiple shapes.
- Move Shapes: Drag and drop any shape to move it around the canvas.
- Delete Shapes: Press the Delete key to remove selected shapes.
- Export: Click the "Export to JSON" button to download the shapes as a JSON file.
- Import: Use the file input to load a previously exported JSON file of shapes.

### Project Structure

-  App.js: Main file containing the React component that renders the canvas and handles shape creation, selection, movement, and deletion.
-  Uses useState for managing the shapes array and the selection state.
-  Handles mouse events for selecting and manipulating shapes.

### Keyboard Shortcuts

- Delete: Deletes the selected shapes.

### Future Improvements

- Add shape resizing functionality.
- Enhance the selection box to support additional shapes (e.g., polygons).
- Implement a more complex undo/redo functionality for shape manipulations.
