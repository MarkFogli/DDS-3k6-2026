import express from "express";
import { getAllProducts, addProduct } from "./services/products-service.js";    
//import db from './data/db-init.js'
import { cnn_db } from "./data/cnn-sequelize.js";

//import { async function } from "./models/users.js";
import { login } from "./services/users-service.js";
import { createUser } from "./services/users-service.js";
import { modificarUser } from "./services/users-service.js";
import { deleteUser } from "./services/users-service.js";


const app = express(); //server
// para que el servidor pueda recibir y procesar datos en formato JSON, es necesario usar el middleware express.json() que viene incluido en Express. Este middleware se encarga de analizar el cuerpo de las solicitudes entrantes y convertirlo en un objeto JavaScript que se puede acceder a través de req.body en las rutas del servidor.
app.use(express.json())


app.get("/", (req, res) => {
  res.json({ message: "Hola, mundo! Este es mi primer API con Node.js y Express" }); 
});


app.get("/products", async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products); //codigo 200 OK
        } catch (error) {
            res.status(500).json({ error: "Error al obtener los productos" });
        }           
}); 

app.post("/products", async (req, res) => {
    try {
            const data = req.body
            if (data){
                await addProduct(data)
                res.json({message: "Se registro exitosamente!"})
            }else{
                 res.status(400).json({message:  "Se esperaba objeto producto"})   
            }

        } catch (error) {
            res.status(500).json({ error: "Error al crear el producto" });
        }           
}); 

// Ruta para crear un nuevo usuario. Se espera un objeto JSON con los datos del usuario en el cuerpo de la solicitud.
app.post("/createUser", async (req, res) => {
    try {
        const data = req.body

        if (data){
            await createUser(data)
            res.json({message: "Se registro exitosamente!"})
        }else{
             res.status(400).json({message:  "Se esperaba objeto usuario"})   
        }
    } catch (error) {
        res.status(500).json({ error: "Error al crear el usuario" });
    }
});

// funcion , ruta con callback 
app.post("/login", async (req, res) => {
    
    try {
        const data = req.body
        if (!data)
        return res.status(400).json({ message: "Se esperaba un objeto usuario" });

        const user = await login(data)
        if (user)
            //ya llega un status 200 OK por defecto, no es necesario ponerlo, pero se puede poner si se quiere.
            res.json(user);
            
        else
            res.status(401).json({ message: "Correo o contraseña incorrectos" });
    } catch (error) {
        res.status(500).json({ error: "Error. Ha ocurrido un error interno" });
    }
});

app.put("/modificarUser", async (req, res) => {
    try {
        const data = req.body

        if (data){
            // se espera que el objeto usuario tenga un id para poder modificarlo, por eso se le pasa el objeto completo a la función modificarUser, y no solo los datos a modificar.
            await modificarUser(data)
            res.json({message: "Se modificó el usuario exitosamente!"})
        }else{
             res.status(400).json({message:  "Se esperaba objeto usuario"})   
        }
    } catch (error) {
        res.status(500).json({ error: "Error al modificar el usuario" });
    }
});

app.delete("/deleteUser", async (req, res) => {
    try {
        const data = req.body
        if (data){
            await deleteUser(data)
            res.json({message: "Se eliminó el usuario exitosamente!"})
        }else{
             res.status(400).json({message:  "Se esperaba objeto usuario"})   
        }
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el usuario" });
    }
});


app.listen(3000, async() => {
    await cnn_db.sync({})
    console.log('Base de datos sincronizada')
    console.log("Servidor escuchando en http://localhost:3000");
}); 
