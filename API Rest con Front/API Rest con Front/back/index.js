import express from "express"
import { cnn_db } from "./data/cnn-sequelize.js"
import usersRouter from "./router/users.js"
import cors from "cors"

const corsOptions = {
    origin: 'http://localhost:5500', // Cambia esto al origen de tu frontend
    optionsSuccessStatus: 200
};

const app = express()
app.use(express.json())
app.use("/users", usersRouter) // Usa el router para las rutas de usuarios

/*app.post("/login", async (req, res) => {
    try {
        console.log('Login request received')
        const user = req.body
        console.log(user)
        const userFound = await login(user) 
        
        if (userFound){
            res.json(userFound)
        }else{
            res.status(401).json({ error: "Usuario y/o clave incorrectos" })
        }

   } catch (error) {
        console.error("Error during login:", error)
        res.status(500).json({ error: "Error. Ha ocurrido un error interno" })
    }
})
*/

app.listen(3000, async() => {
    await cnn_db.sync() // sincroniza los modelos con la base de datos (crea las tablas si no existen)
    console.log("Servidor iniciado en el puerto 3000")
})  