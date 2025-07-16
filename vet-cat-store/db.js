// db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./vet_store.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      description TEXT,
      price REAL,
      image_url TEXT,
      manual_url TEXT,
      video_url TEXT,
      category TEXT
    )
  `);

  db.get("SELECT COUNT(*) AS cnt FROM products", (err, row) => {
    if (err) return console.error(err);
    if (row.cnt === 0) {
      const stmt = db.prepare(`
        INSERT INTO products
          (name, description, price, image_url, manual_url, video_url, category)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `);

      const sample = [
        {
          name: "Arena Premium Lavanda",
          description: "10 L, aglomerante con aroma a lavanda.",
          price: 220.5,
          image_url: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
          manual_url: "https://drive.google.com/…",
          video_url: "https://youtu.be/…",
          category: "Higiene"
        },
        {
          name: "Comida Húmeda Gato Pescado",
          description: "Pack 12x85 g sabor atún y salmón.",
          price: 180.75,
          image_url: "https://images.unsplash.com/photo-1592195168093-1b2a18bc1bd6",
          manual_url: "https://drive.google.com/…",
          video_url: "https://youtu.be/…",
          category: "Alimentos"
        },
        {
          name: "Rascador XXL",
          description: "Ecológico, 70 cm de altura, base ancha.",
          price: 850.0,
          image_url: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
          manual_url: "https://drive.google.com/…",
          video_url: "https://youtu.be/…",
          category: "Juguetes"
        },
        {
          name: "Cepillo Desenredante",
          description: "Cerdas suaves, ideal para pelo largo.",
          price: 120.0,
          image_url: "https://images.unsplash.com/photo-1573569745638-209313f159ac",
          manual_url: "https://drive.google.com/…",
          video_url: "https://youtu.be/…",
          category: "Higiene"
        },
        {
          name: "Collar con Campana",
          description: "Adjustable, colores surtidos.",
          price: 95.0,
          image_url: "https://images.unsplash.com/photo-1556228724-4fa9bcfda5db",
          manual_url: "https://drive.google.com/…",
          video_url: "https://youtu.be/…",
          category: "Accesorios"
        },
        {
          name: "Juguete Ratón Relleno",
          description: "Relleno con catnip, movimiento vibratorio.",
          price: 75.0,
          image_url: "https://images.unsplash.com/photo-1592194996312-d2d8b6c42f23",
          manual_url: "https://drive.google.com/…",
          video_url: "https://youtu.be/…",
          category: "Juguetes"
        },
        {
          name: "Fuente de Agua Automática",
          description: "Cap. 2 L, filtro carbón activado.",
          price: 650.0,
          image_url: "https://images.unsplash.com/photo-1573497160607-1ee88b3f0f28",
          manual_url: "https://drive.google.com/…",
          video_url: "https://youtu.be/…",
          category: "Accesorios"
        },
        {
          name: "Cama Sofá para Gato",
          description: "Tamaño mediano, felpa extra suave.",
          price: 430.0,
          image_url: "https://images.unsplash.com/photo-1563213126-65fd4b4f8c71",
          manual_url: "https://drive.google.com/…",
          video_url: "https://youtu.be/…",
          category: "Muebles"
        }
      ];

      sample.forEach(p =>
        stmt.run(p.name, p.description, p.price, p.image_url, p.manual_url, p.video_url, p.category)
      );
      stmt.finalize();
    }
  });
});

module.exports = db;

