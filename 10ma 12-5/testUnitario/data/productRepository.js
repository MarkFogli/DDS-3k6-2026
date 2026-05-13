import { createProduct } from '../services/productService.js';

const products = [
    {
        id: 1,
        name: 'Producto A',
        price: 10.99,
        stock: 100
    },
    {
        id: 2,
        name: 'Producto B',
        price: 5.49,
        stock: 50
    }

    
];

export function getAllProducts() {
        return products;
    }

export function saveProduct(input){
    const newProduct = createProduct(input, products);
    products.push(newProduct);
    return newProduct;

}