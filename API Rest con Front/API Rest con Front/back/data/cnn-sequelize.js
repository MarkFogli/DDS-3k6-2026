import { Sequelize } from "sequelize";

export const cnn_db = new Sequelize("productos", "", "", {
    dialect: 'sqlite',
    storage: './data/products.sqlite'
}) // nombre DB, user, pass, options