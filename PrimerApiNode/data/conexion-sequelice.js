import { Sequelize } from "sequelize";

const conexion = new Sequelize("productos", "", "", {
    dialect: 'sqlite',
    dialectModule: sqlite3,
    storage: './data/products.sqlite'

}) //nombre DB, user, pass, options