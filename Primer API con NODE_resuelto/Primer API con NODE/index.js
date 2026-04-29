import express from "express";
import { getAllProducts, addProduct } from "./services/products-service.js";    
//import db from './data/db-init.js'
import { cnn_db } from "./data/cnn-sequelize.js";


const app = express(); //server
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




app.listen(3000, async() => {
    await cnn_db.sync({})
    console.log('Base de datos sincronizada')
    console.log("Servidor escuchando en http://localhost:3000");
}); 
