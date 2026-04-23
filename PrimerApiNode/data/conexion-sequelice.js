import { Sequelize } from "sequelize";

const conexion = new Sequelize("productos", "", "", {
    dialect: sqlite,
    storage: './data/products.sqlite'

}) //nombre DB, user, pass, options