import Test from "supertest/lib/test.js";
import {
    createProduct,
    findLowStockProducts,
    calculateTotalValue,
    normalizeProdctInput
} from "../../services/service.products.js";

describe('Product Services - test unitarios', () => {
    describe('normalizeProdctInput', () => {
        test('debería normalizar correctamente la entrada válida', () => {
            // Arrange
            const input = { name: '  Producto A  ', price: '10.99', stock: '100' };

            // Act
            const result = normalizeProdctInput(input); 
            // Assert
            expect(result).toEqual({ name: 'Producto A', price: 10.99, stock: 100 });
        });

        test('debería lanzar error si el nombre está vacío', () => {
            const input = { name: '   ', price: '10.99', stock: '100' };
            expect(() => normalizeProdctInput(input)).toThrow('El nombre del producto es requerido');
        }); 

        test('debería lanzar error si el precio no es un número positivo', () => {
            const input = { name: 'Producto A', price: '-5', stock: '100' };
            expect(() => normalizeProdctInput(input)).toThrow('El precio debe ser un número positivo');
        });

        test('debería lanzar error si el stock no es un número positivo', () => {
            const input = { name: 'Producto A', price: '10.99', stock: '-10' };
            expect(() => normalizeProdctInput(input)).toThrow('El stock debe ser un número positivo');
        }); 
    });

    describe('createProduct', () => {
        test('debería crear un producto con ID correcto', () => {
            const input = { name: 'Producto A', price: '10.99', stock: '100' };
            const currentProducts = [
                { id: 1, name: 'Producto X', price: 5.99, stock: 50 },
                { id: 2, name: 'Producto Y', price: 15.99, stock: 20 }
            ];
            const result = createProduct(input, currentProducts);
            expect(result).toEqual({ id: 3, name: 'Producto A', price: 10.99, stock: 100 });
        });
    });

    describe('findLowStockProducts', () => {
        test('debería retornar productos con stock menor o igual al umbral', () => {
            const products = [
                { id: 1, name: 'Producto A', price: 10.99, stock: 5 },
                { id: 2, name: 'Producto B', price: 5.49, stock: 15 },
                { id: 3, name: 'Producto C', price: 20.00, stock: 8 }
            ];
            const threshold = 10;
            const result = findLowStockProducts(products, threshold);
            expect(result).toEqual([
                { id: 1, name: 'Producto A', price: 10.99, stock: 5 },
                { id: 3, name: 'Producto C', price: 20.00, stock: 8 }
            ]);
        });
    });

    describe('calculateTotalValue', () => {
        test('debería calcular el valor total del inventario', () => {
            const products = [
                { id: 1, name: 'Producto A', price: 10.00, stock: 5 },
                { id: 2, name: 'Producto B', price: 20.00, stock: 3 }
            ];
            const result = calculateTotalValue(products);
            expect(result).toBe(110.00); // (10*5) + (20*3) = 50 + 60 = 110
        });
    });
});