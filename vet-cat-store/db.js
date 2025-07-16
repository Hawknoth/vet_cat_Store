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
// Ejemplo de líneas de db.js usando Unsplash Source
const sample = [
  ["Arena Premium Lavanda",       "10 L, aglomerante con aroma a lavanda.", 220.5,  "https://source.unsplash.com/300x200/?cat+litter",    "Arena"],
  ["Arena Aglomerante Clásica",   "8 L, sin perfume, alta absorción.",       180.0,  "https://source.unsplash.com/300x200/?litter+box",     "Arena"],
  ["Arenero Cubierto",            "Con tapa abatible y filtro de carbón.",  450.0,  "https://source.unsplash.com/300x200/?covered+litter",  "Areneros"],
  ["Arenero Abierto Grande",      "Superficie extra ancha.",                300.0,  "https://source.unsplash.com/300x200/?open+litter",     "Areneros"],
  ["Collar Reflectante",          "Ajustable, LED incorporado.",            120.0,  "https://source.unsplash.com/300x200/?cat+collar",      "Collares"],
  ["Collar con Campana",          "Campana suave para no asustar al gato.", 95.0,   "https://source.unsplash.com/300x200/?cat+bell+collar","Collares"],
  ["Jaula de Transporte",         "Estructura resistente y plegable.",      650.0,  "https://source.unsplash.com/300x200/?pet+carrier",     "Jaulas"],
  ["Jaula de Dos Niveles",        "Con plataforma y escalera interior.",    1200.0, "https://source.unsplash.com/300x200/?cat+cage",       "Jaulas"],
  ["Rascador XXL",                "70 cm de altura, poste forrado en sisal.",850.0, "https://source.unsplash.com/300x200/?cat+scratcher",   "Juguetes"],
  ["Juguete Ratón Relleno",       "Catnip natural y cuerda vibratoria.",     75.0,  "https://source.unsplash.com/300x200/?catnip+toy",     "Juguetes"],
  ["Juguete Láser Interactivo",   "Patrón automático de luces.",             150.0, "https://source.unsplash.com/300x200/?laser+pointer",  "Juguetes"],
  ["Rueda de Ejercicio",          "Perfecta para gatos en interiores.",      400.0, "https://source.unsplash.com/300x200/?exercise+wheel", "Juguetes"],
  ["Comida Húmeda Gato Pescado",  "Pack 12x85 g sabor atún y salmón.",       180.75,"https://source.unsplash.com/300x200/?wet+cat+food", "Alimentos"],
  ["Comida Seca Gato Adulto",     "5 kg, receta premium con pollo.",         520.0, "https://source.unsplash.com/300x200/?dry+cat+food", "Alimentos"],
  ["Fuente de Agua Automática",   "Capacidad 2 L, filtro de carbón.",       650.0, "https://source.unsplash.com/300x200/?cat+water+fountain","Accesorios"],
  ["Bolso de Transporte",         "Ventilación 360°, cierre de seguridad.",  550.0, "https://source.unsplash.com/300x200/?pet+bag",       "Accesorios"],
  ["Cama Sofá para Gato",         "Felpa extra suave, desmontable.",         430.0, "https://source.unsplash.com/300x200/?cat+bed",        "Muebles"],
  ["Cepillo Desenredante",        "Cerdas suaves para pelo largo.",          120.0, "https://source.unsplash.com/300x200/?cat+brush",     "Higiene"],
  ["Shampoo Seco Gato",           "Sin enjuague, aroma a lavanda.",         200.0, "https://source.unsplash.com/300x200/?dry+shampoo+cat","Higiene"],
  ["Transportadora Plegable",     "Fácil apertura y cerradura de seguridad.",780.0, "https://source.unsplash.com/300x200/?collapsible+carrier","Jaulas"]
];

      sample.forEach(p => stmt.run(...p));
      stmt.finalize();
    }
  });
});

module.exports = db;


module.exports = db;

