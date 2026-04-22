import http from 'http'; // importamos el módulo http para crear un servidor
//creamos un servidor http que escuche en el puerto 3000

const server = http.createServer((req, res) => {
    // callback que se ejecuta cada vez que se recibe una solicitud al servidor

    // manejamos la solicitud entrante y enviamos una respuesta
    res.statusCode = 200; // establecemos el código de estado de la respuesta a 200 (OK)
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola, mundo! Este es un servidor HTTP básico.'); // enviamos la respuesta al cliente
});

// el servidor escucha en el puerto 3000
server.listen(3000, () => {
    // callback en funcion arrow que se ejecuta cuando el servidor comienza a escuchar
    console.log('Servidor corriendo en http://localhost:3000/');
});
