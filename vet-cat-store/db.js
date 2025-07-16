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
  ["Arena Premium Lavanda",       "10 L, aglomerante con aroma a lavanda.", 220.5,  "https://media.istockphoto.com/id/1315441226/es/foto/regalo-de-coraz%C3%B3n-de-san-valent%C3%ADn-de-gato-bengal%C3%AD-el-gato-expresa-su-amor.webp?a=1&b=1&s=612x612&w=0&k=20&c=_A4Z54EsHVAcPRyFtUdsmHRmFxcZxL-AbkBee5i4Aos=",    "Arena"],
  ["Arena Aglomerante Clásica",   "8 L, sin perfume, alta absorción.",       180.0,  "https://media.istockphoto.com/id/1140121125/photo/the-excretion-of-cats-is-routine-daily.jpg?s=2048x2048&w=is&k=20&c=hlY0d6Twyy6OAA4tVUrRV2dgYRmofxS0O1tHOvmJ3As=",     "Arena"],
  ["Arenero Cubierto",            "Con tapa abatible y filtro de carbón.",  450.0,  "https://media.istockphoto.com/id/1478163487/photo/domestic-cat-looks-at-the-litter-box.jpg?s=2048x2048&w=is&k=20&c=CEkjbTpHQu59LzozWYcdLMX66Bg9f4V9iytE68JolWU=",  "Areneros"],
  ["Arenero Abierto Grande",      "Superficie extra ancha.",                300.0,  "https://media.istockphoto.com/id/2078612029/photo/red-cat-sits-near-the-cat-litter.jpg?s=2048x2048&w=is&k=20&c=YeneLgJinjxZCgkmPBX0v78FFhvTaZ7t3ngynJI_cYY=",     "Areneros"],
  ["Collar Reflectante",          "Ajustable, LED incorporado.",            120.0,  "https://media.istockphoto.com/id/611089472/photo/european-shorthair-sitting-and-licking-lips-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=a7HODcifyEAOD8Hu8HWGRp_Gc_U0nZEyk0hyt_0Ekfg=",      "Collares"],
  ["Collar con Campana",          "Campana suave para no asustar al gato.", 95.0,   "https://media.istockphoto.com/id/1217841004/photo/isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=uKtozthj0Nm2qTjodDMvx5NufH-upCrpvis1mfCkwy4=","Collares"],
  ["Jaula de Transporte",         "Estructura resistente y plegable.",      650.0,  "https://media.istockphoto.com/id/187555575/photo/caged-kitten.jpg?s=2048x2048&w=is&k=20&c=yH6uu3sxzDOYTV7bdniC-W2LMDdq948mu8mSY6FCIV4=",     "Jaulas"],
  ["Jaula de Dos Niveles",        "Con plataforma y escalera interior.",    1200.0, "https://media.istockphoto.com/id/1850328117/photo/veterinarian-visits-ill-cat-that-is-in-cage.jpg?s=2048x2048&w=is&k=20&c=6uWwUgOJDi-jmK7kJqYbHA8MrGgFddPBQ8OoNYtrPPc=",       "Jaulas"],
  ["Rascador XXL",                "70 cm de altura, poste forrado en sisal.",850.0, "https://media.istockphoto.com/id/1440280890/photo/bengal-cat-on-a-scratching-post-in-the-background-of-the-living-room.jpg?s=2048x2048&w=is&k=20&c=CupHnXoXmMayw9IKDmIjGLaxBw6s4og5emiKfvi3W1s=",   "Juguetes"],
  ["Juguete Ratón Relleno",       "Catnip natural y cuerda vibratoria.",     75.0,  "https://media.istockphoto.com/id/974828572/photo/playful-lazy-maine-coon-calico-cat-closeup-playing-with-catnip-mouse-rat-toy-with-paws-indoors.jpg?s=2048x2048&w=is&k=20&c=j2Tk9HnQTVg8ntoAL9u-XOgYTOO7Rsc17zW7cdIygC4=",     "Juguetes"],
  ["Juguete Láser Interactivo",   "Patrón automático de luces.",             150.0, "https://media.istockphoto.com/id/1222762448/photo/laser-ray.jpg?s=2048x2048&w=is&k=20&c=SxexQ-wgRh5OB5F8DewD_JSsdwsnplcr0NGWooBqSqg=",  "Juguetes"],
  ["Rueda de Ejercicio",          "Perfecta para gatos en interiores.",      400.0, "https://media.istockphoto.com/id/1302830957/photo/cat-and-exercising-wheel.jpg?s=2048x2048&w=is&k=20&c=5mkn4JAD87JghWTjkga4RzthAtAM6JQUVewZCtoCwJ4=", "Juguetes"],
  ["Comida Húmeda Gato Pescado",  "Pack 12x85 g sabor atún y salmón.",       180.75,"https://media.istockphoto.com/id/1409841711/photo/wet-cat-food-isolated-on-white-background.jpg?s=2048x2048&w=is&k=20&c=da3W8I3FfoFHFt33NZUukw-Mwcli0H_vsaVxEnKjGa4=", "Alimentos"],
  ["Comida Seca Gato Adulto",     "5 kg, receta premium con pollo.",         520.0, "https://media.istockphoto.com/id/466640438/photo/pile-of-dry-pet-food.jpg?s=2048x2048&w=is&k=20&c=Pg218R85-WGTKsyFREXtbVp2pNIW2h4d0qlwCMYwODQ=", "Alimentos"],
  ["Fuente de Agua Automática",   "Capacidad 2 L, filtro de carbón.",       650.0, "https://media.istockphoto.com/id/1061642872/photo/thirsty-tabby-cat-drinking-water-from-a-pet-drinking-fountain-side-view-with-copy-space.jpg?s=2048x2048&w=is&k=20&c=-gLudQE9_5LaW26kt6bNgeWOV78uiSgbjG6JTToB5ks=","Accesorios"],
  ["Bolso de Transporte",         "Ventilación 360°, cierre de seguridad.",  550.0, "https://media.istockphoto.com/id/881229144/photo/dog-in-transport-box-or-bag-ready-to-travel.jpg?s=2048x2048&w=is&k=20&c=DCgM4WD5bdtZ7yAv5t8GNO9HJtcQFKQga7WzEn1xKbQ=",       "Accesorios"],
  ["Cama Sofá para Gato",         "Felpa extra suave, desmontable.",         430.0, "https://media.istockphoto.com/id/1298824982/photo/a-happy-long-haired-brown-tabby-cat-is-relaxing-on-a-felt-cat-bed-at-home-holding-his-paws.jpg?s=2048x2048&w=is&k=20&c=Rr5C8rMreOVTPbXgwKRXJ0P5lEvg9Q0dXJb6BbiLdQY=",        "Muebles"],
  ["Cepillo Desenredante",        "Cerdas suaves para pelo largo.",          120.0, "https://media.istockphoto.com/id/599974692/photo/woman-using-a-comb-brush-the-persian-cat.jpg?s=2048x2048&w=is&k=20&c=zh7mWVnyZzVWAvf1UH9A1fzmsuOYhsatkkimJOVAl-U=",     "Higiene"],
  ["Shampoo Seco Gato",           "Sin enjuague, aroma a lavanda.",         200.0, "https://media.istockphoto.com/id/1418970130/photo/a-woman-bathes-a-cat-in-the-sink.jpg?s=2048x2048&w=is&k=20&c=BPiQ9HFOMzbyOAqP8xdtpn-ENSWIFeC6bthvX6PRCJY=","Higiene"],
  ["Transportadora Plegable",     "Fácil apertura y cerradura de seguridad.",780.0, "https://media.istockphoto.com/id/1024558448/photo/cute-maine-coon-cat-sitting-in-a-open-pet-carrier-and-looking-sideways.jpg?s=2048x2048&w=is&k=20&c=39opa7XSKw7sFlD325J6do_qq825Z2700BuEuM8Jq7w=","Jaulas"]
];

      sample.forEach(p => stmt.run(...p));
      stmt.finalize();
    }
  });
});

module.exports = db;


module.exports = db;

