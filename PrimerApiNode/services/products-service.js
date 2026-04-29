/*const products = [
    { id: 1, name: 'Product 1', price: 10.99, stock: 100 },
    { id: 2, name: 'Product 2', price: 19.99, stock: 50 },
    { id: 3, name: 'Product 3', price: 5.99, stock: 200 },
];*/

import { Product } from "../models/productos.js";


// Función para obtener todos los productos
export async function getAllProducts() {
    return await Product.findAll();
}

export async function addProduct(product) {
    return await Product.create(product);
} 
   