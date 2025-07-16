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
      category TEXT
    )
  `);

  db.get("SELECT COUNT(*) AS cnt FROM products", (err, row) => {
    if (err) return console.error(err);
    if (row.cnt === 0) {
      const stmt = db.prepare(`
        INSERT INTO products (name, description, price, image_url, category)
        VALUES (?, ?, ?, ?, ?)
      `);

    // db.js
const sample = [
  ["Arena Premium Lavanda",       "10 L, aglomerante con aroma a lavanda.", 220.5,  "https://picsum.photos/seed/1/300/200",   "Arena"],
  ["Arena Aglomerante Clásica",   "8 L, sin perfume, alta absorción.",       180.0,  "https://picsum.photos/seed/2/300/200",   "Arena"],
  ["Arenero Cubierto",            "Con tapa abatible y filtro de carbón.",  450.0,  "https://picsum.photos/seed/3/300/200",   "Areneros"],
  ["Arenero Abierto Grande",      "Superficie extra ancha.",                300.0,  "https://picsum.photos/seed/4/300/200",   "Areneros"],
  ["Collar Reflectante",          "Ajustable, LED incorporado.",            120.0,  "https://picsum.photos/seed/5/300/200",   "Collares"],
  ["Collar con Campana",          "Campana suave para no asustar al gato.", 95.0,   "https://picsum.photos/seed/6/300/200",   "Collares"],
  ["Jaula de Transporte",         "Estructura resistente y plegable.",      650.0,  "https://picsum.photos/seed/7/300/200",   "Jaulas"],
  ["Jaula de Dos Niveles",        "Con plataforma y escalera interior.",    1200.0, "https://picsum.photos/seed/8/300/200",   "Jaulas"],
  ["Rascador XXL",                "70 cm de altura, poste forrado en sisal.",850.0, "https://picsum.photos/seed/9/300/200",   "Juguetes"],
  ["Juguete Ratón Relleno",       "Catnip natural y cuerda vibratoria.",     75.0,  "https://picsum.photos/seed/10/300/200",  "Juguetes"],
  ["Juguete Láser Interactivo",   "Patrón automático de luces.",             150.0, "https://picsum.photos/seed/11/300/200",  "Juguetes"],
  ["Rueda de Ejercicio",          "Perfecta para gatos en interiores.",      400.0, "https://picsum.photos/seed/12/300/200",  "Juguetes"],
  ["Comida Húmeda Gato Pescado",  "Pack 12x85 g sabor atún y salmón.",       180.75,"https://picsum.photos/seed/13/300/200", "Alimentos"],
  ["Comida Seca Gato Adulto",     "5 kg, receta premium con pollo.",         520.0, "https://picsum.photos/seed/14/300/200", "Alimentos"],
  ["Fuente de Agua Automática",   "Capacidad 2 L, filtro de carbón.",       650.0, "https://picsum.photos/seed/15/300/200", "Accesorios"],
  ["Bolso de Transporte",         "Ventilación 360°, cierre de seguridad.",  550.0, "https://picsum.photos/seed/16/300/200", "Accesorios"],
  ["Cama Sofá para Gato",         "Felpa extra suave, desmontable.",         430.0, "https://picsum.photos/seed/17/300/200", "Muebles"],
  ["Cepillo Desenredante",        "Cerdas suaves para pelo largo.",          120.0, "https://picsum.photos/seed/18/300/200", "Higiene"],
  ["Shampoo Seco Gato",           "Sin enjuague, aroma a lavanda.",         200.0, "https://picsum.photos/seed/19/300/200", "Higiene"],
  ["Transportadora Plegable",     "Fácil apertura y cerradura de seguridad.",780.0, "https://picsum.photos/seed/20/300/200", "Jaulas"]
];


      sample.forEach(p => stmt.run(...p));
      stmt.finalize();
    }
  });
});

module.exports = db;


module.exports = db;

