import { DataTypes } from "sequelize";
import { cnn_db } from "../data/cnn-sequelize.js";
// cnn_db no se exporta sola porque no es default.


// El modelo de usuarios se llama Usuario, pero la tabla se llama users, por eso el primer argumento es "users" y no "Usuario".
export const Usuario = cnn_db.define("users", {
    "id": {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    "nombre": {
        type: DataTypes.STRING,
        allowNull: false
    },
    "apellido": {
        type: DataTypes.STRING,
        allowNull: false
    },
    "correo": {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        
    },
    "password": {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        timestamps: false,
        // con esta reconoce que cnn_db es la conexión a la base de datos, y no crea una nueva conexión.
        cnn_db
    }

)