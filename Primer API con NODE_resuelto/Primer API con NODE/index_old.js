import http from 'http'; // Importamos el módulo http para crear un servidor
// Creamos un servidor HTTP 
const server = http.createServer((req, res) => {
  // Configuramos la respuesta con un código de estado 200 (OK) y un encabezado de tipo de contenido
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Enviamos una respuesta al cliente
  res.end('Hola, mundo! Este es mi primer API con Node.js');
});



// El servidor escucha en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});