import sqlite3 from 'sqlite3';

// Configuración de la base de datos SQLite
const db = new sqlite3.Database('./data/products.sqlite', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    // Callback que se ejecuta al intentar conectar a la base de datos
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conectado a la base de datos SQLite');
    }
});

// Crear la tabla de productos si no existe
export default db;