//rutas para exportar las funciones de productos
import { Router } from 'express';
import { createProduct, findLowStockProducts, calculateTotalValue } from '../services/service.products.js';
import { getAllProducts, saveProduct } from '../data/productRepository.js';

export const productRouter = Router();

productRouter.get('/', (req, res) => {
    const products = getAllProducts();
    res.json(products);
});

productRouter.post('/', (req, res) => {
    try {
        const newProduct = saveProduct(req.body);
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});

productRouter.get('/low-stock', (req, res) => {
    const threshold = Number(req.query.threshold) || 10; 
    const products = getAllProducts();
    const lowStockProducts = findLowStockProducts(products, threshold);
    res.json(lowStockProducts);
});