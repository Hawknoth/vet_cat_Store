const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de EJS y carpeta estática
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal: lee todos los productos y los muestra
app.get('/', (req, res) => {
  db.all("SELECT * FROM products", (err, rows) => {
    if (err) return res.status(500).send("Error en base de datos");
    res.render('index', { products: rows });
  });
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
