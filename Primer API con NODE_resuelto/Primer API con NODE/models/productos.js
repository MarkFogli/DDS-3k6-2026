import { DataTypes, DATE } from 'sequelize'
import { cnn_db } from '../data/cnn-sequelize.js'

export const Product = cnn_db.define("Product", {
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
    "precio": {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    "stock": {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
},
    {
        timestamps: false,
        cnn_db
    }

)