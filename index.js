/*Create your node.js server file index.js and add the code needed to serve the right page according to the url.
localhost:8080 should take users to index.html
localhost:8080/about should take users to about.html
localhost:8080/contact-me should take users to contact-me.html
404.html should display any time the user tries to go to a page not listed above.*/
// index.js

// 1. Importamos los módulos que necesitamos
const http = require('http'); // Para crear el servidor HTTP
const fs = require('fs');     // Para leer los archivos HTML

// 2. Definimos el puerto donde va a escuchar el servidor
const PORT = 3000;

// 3. Creamos el servidor
const server = http.createServer((req, res) => {
  // req.url → nos da la ruta solicitada ("/", "/about-me", etc.)

  // Función para leer un archivo y enviarlo como respuesta
  const serveFile = (filePath, contentType, statusCode = 200) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error interno del servidor');
      } else {
        res.writeHead(statusCode, { 'Content-Type': contentType });
        res.end(data);
      }
    });
  };

  // 4. Rutas básicas
  if (req.url === '/') {
    serveFile('index.html', 'text/html');
  } else if (req.url === '/about-me') {
    serveFile('about-me.html', 'text/html');
  } else if (req.url === '/contact-me') {
    serveFile('contact-me.html', 'text/html');
  } else {
    // Ruta no encontrada → devolver 404
    serveFile('404.html', 'text/html', 404);
  }
});

// 5. Iniciamos el servidor
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
