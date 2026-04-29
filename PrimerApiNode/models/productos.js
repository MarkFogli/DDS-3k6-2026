//definimos modelo
import { toDefaultValue } from 'sequelize/lib/utils'
import { sqlite } from 'sequelize/lib/dialects/sqlite/index.js'
import { conexion } from '../data/conexion-sequelice.js'
import { DataTypes } from 'sequelize'


export const Product =  conexion.define("Product", {
    //atributos se corresponde con las columnas
    "id": {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncremental: true,
        allowNull: false

    },
    "nombre": {
        type: DataTypes.STRING,
        allowNull: false

    },
    "precio": {
        type: DataTypes.FLOAT,
        allowNull:false,
        toDefaultValue: 0

    },
    "stock": {
        type: DataTypes.INTEGER,
        allowNull: false,
        toDefaultValue: 0

    },
},
// segundo objeto
{   
    //no me crees mas columnas de auditoria
    timestamps: false,
    conexion
    
}

)