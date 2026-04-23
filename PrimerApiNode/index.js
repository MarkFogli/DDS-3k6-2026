import express from "express"; 
import { getAllProducts } from "./services/products-service.js"; // Importamos la función para obtener los productos
// Importamos la configuración de la base de datos (se ejecuta secuencialmente todo el archivo, por lo que se establece la conexión a la base de datos)
import db from "./data/db-init.js";
import { conexion } from  "./data/conexion-sequelice.js"

const app = express(); // Crea una instancia de la aplicación Express
const PORT = 3000;

app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes como JSON
app.get("/", (req, res) => {
    res.json({ message: "Hola, mundo! Esta es una API básica con Express." });
    // Enviamos una respuesta JSON al cliente con un mensaje de bienvenida
});
app.listen(PORT, async () => {
    //adelante de los metodos de sqlite les agregamos await
    await conexion.sync()
    console.log('Base de datos sincronizada')
    console.log(`API corriendo en el puerto ${PORT}`);
});

app.get("/products", (req, res) => {
    // Endpoint para obtener todos los productos
    try {
        const products = getAllProducts(); // Llamamos a la función para obtener los productos
        res.json(products); // Enviamos la lista de productos como respuesta JSON // codigo 200 por defecto
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los productos" }); // En caso de error, enviamos una respuesta con código 500
    }
});

app.post("/products", (req, res) => {
    // Endpoint para crear un nuevo producto (aún no implementado)
    try {
        // Aquí se implementaría la lógica para crear un nuevo producto
        const data = req.body; // Obtenemos los datos del nuevo producto desde el cuerpo de la solicitud
        if (data) {
            addProduct(data); // Llamamos a una función para agregar el producto (aún no implementada)
            res.json({ message: "Producto creado exitosamente" }); // Enviamos una respuesta de éxito
        } else {
            res.status(400).json({ error: "Datos del producto no proporcionados" }); // Si no se proporcionan datos, enviamos una respuesta con código 400
        }
    }   catch (error) { 
        res.status(500).json({ error: "Error al crear el producto" }); // En caso de error, enviamos una respuesta con código 500    
    }    
});

