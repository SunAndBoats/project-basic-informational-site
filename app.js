// app.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// 1. Servir archivos estáticos desde la carpeta actual
//    Esto permite acceder a /about.html, /contact.html, /index.html, etc.
app.use(express.static(__dirname));

// 2. Ruta para "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 3. Rutas "bonitas" sin extensión
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// 4. Middleware de 404 para cualquier ruta no encontrada
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// 5. Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
