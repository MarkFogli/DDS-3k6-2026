//funcioens para manejar productos

export function nextID(products) {
    if (products.length === 0) return 1;   
    return Math.max(...products.map(p => p.id)) + 1;
}

export function normalizeProdctInput(input) {
    const name = input.name.trim();
    const price = Number(input.price);
    const stock = Number(input.stock);

    if (!name) throw new Error('El nombre del producto es requerido');
    if (isNaN(price) || price < 0) throw new Error('El precio debe ser un número positivo');
    if (isNaN(stock) || stock < 0) throw new Error('El stock debe ser un número positivo');

    return { name, price, stock };
}

export function createProduct(input, currentProducts) {
    const product = normalizeProdctInput(input);
    return { id: nextID(currentProducts), ...product }; 
}

export function findLowStockProducts(products, threshold) {
    return products.filter(p => p.stock <= threshold);
}

export function calculateTotalValue(products) {
    return products.reduce((total, p) => total + p.price * p.stock, 0);
}