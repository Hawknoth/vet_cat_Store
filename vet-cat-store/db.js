// Inicializa SQLite y crea/semilla la tabla de productos
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
      video_url TEXT
    )
  `);

  db.get("SELECT COUNT(*) AS cnt FROM products", (err, row) => {
    if (row.cnt === 0) {
      const stmt = db.prepare(`
        INSERT INTO products 
          (name, description, price, image_url, manual_url, video_url) 
        VALUES (?, ?, ?, ?, ?, ?)
      `);

      const sample = [
        {
          name: "Arena para Gato Premium",
          description: "Arena aglomerante, aroma lavanda, 10 L.",
          price: 220.50,
          image_url: "https://placekitten.com/300/200",
          manual_url: "https://drive.google.com/file/d/EXAMPLE_ARENA/view?usp=sharing",
          video_url: "https://www.youtube.com/watch?v=EXAMPLE1"
        },
        {
          name: "Rascador de Cartón",
          description: "Rascador ecológico con diseño cilíndrico.",
          price: 150.00,
          image_url: "https://placekitten.com/301/200",
          manual_url: "https://drive.google.com/file/d/EXAMPLE_RASCADOR/view?usp=sharing",
          video_url: "https://www.youtube.com/watch?v=EXAMPLE2"
        },
        {
          name: "Comida Húmeda Gato Adulto",
          description: "Paquete de 12 latas de 85 g, sabor atún.",
          price: 180.75,
          image_url: "https://placekitten.com/302/200",
          manual_url: "https://drive.google.com/file/d/EXAMPLE_COMIDA/view?usp=sharing",
          video_url: "https://www.youtube.com/watch?v=EXAMPLE3"
        }
      ];

      sample.forEach(p =>
        stmt.run(p.name, p.description, p.price, p.image_url, p.manual_url, p.video_url)
      );
      stmt.finalize();
    }
  });
});

module.exports = db;
