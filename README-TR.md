# React Konva Çizim Uygulaması

Bu proje, kullanıcıların dikdörtgenler, daireler ve çizgiler gibi şekiller oluşturmasına, seçmesine, taşımasına ve silmesine olanak tanıyan React ve React-Konva ile yapılmış bir çizim uygulamasıdır. Ayrıca, şekil verilerinin JSON formatında dışa aktarılması ve içe alınması da desteklenmektedir.

## Özellikler

- Dikdörtgen, Daire ve Çizgi ekleme (rastgele renklerle).
- Şekilleri tek tek veya seçim kutusu ile toplu olarak seçebilme.
- Şekilleri taşıma ve boyutlarını değiştirme.
- Silme tuşu ile seçilen şekilleri silebilme.
- Şekil verilerini JSON dosyasına dışa aktarma.
- JSON dosyasından şekil verilerini içe aktarma.
- Klavye kısayolları ile daha verimli etkileşim.

## Kullanılan Teknolojiler

- React: Kullanıcı arayüzleri geliştirmek için kullanılan ön uç kütüphanesi.
- React-Konva: React ile 2D canvas çizimi yapmak için kullanılan kütüphane.
- UUID: Şekiller için benzersiz kimlikler oluşturmak amacıyla kullanılır.
- HTML5 File API: JSON verilerini içe aktarma ve dışa aktarma işlemlerinde kullanılır.

### Kurulum

1. Clone the repository:

```bash git clone <repository-url> ```

2. Navigate to the project directory:

```bash cd react-konva-drawing-app```

3.Install dependencies: Ensure you have Node.js installed, then run:

```bash npm install ```

4.Start the development server:

```bash  npm start ```

5.Open your browser: The application will be available at http://localhost:3000.
 

### Kullanım

- Şekil Ekleme: Dikdörtgen, daire veya çizgi eklemek için ilgili düğmelere tıklayın.
- Şekil Seçimi: Bir şekle tıklayarak veya bir seçim kutusu çizerek birden fazla şekli seçin.
- Şekil Taşıma: Şekilleri sürükleyip bırakarak hareket ettirin.
- Şekil Silme: Seçili şekilleri silmek için Delete tuşuna basın.
- Dışa Aktarma: "JSON’a Dışa Aktar" düğmesine tıklayarak şekilleri bir JSON dosyası olarak indirin.
- İçe Aktarma: JSON dosyasını yüklemek için dosya seçimini kullanın.

### Proje Yapısı

-  App.js: Şekil oluşturma, seçme, taşıma ve silme işlemlerini yöneten React bileşenini içerir.
-  Şekil dizisini ve seçim durumunu yönetmek için useState kullanır.
-  Şekillerin seçimi ve manipülasyonu için fare olaylarını ele alır.

### Klavye Kısayolları

- Delete: : Seçilen şekilleri siler.

### Gelecek İyileştirmeler

- Şekil boyutlandırma işlevselliği eklenmesi.
- Seçim kutusunun diğer şekilleri (örneğin, çokgenler) desteklemesi.
- Şekil manipülasyonları için daha karmaşık bir geri alma/yineleme işlevselliği eklenmesi.
