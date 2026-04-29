import { Product } from "../models/productos.js";

/*const products = [
    { id: 1, name: 'Producto 1', price: 10.99, stock: 100 },
    { id: 2, name: 'Producto 2', price: 19.99, stock: 50 },
    { id: 3, name: 'Producto 3', price: 5.99, stock: 200 },
];*/

export async function getAllProducts() {
    return await Product.findAll();
}

export async function addProduct(p){
    await Product.create(p)
}