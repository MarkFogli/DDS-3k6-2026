import * as sqlite3 from 'sqlite3';

const db = new sqlite3.default.Database("./data/products.sqlite",sqlite3.OPEN_READWRITE, (err)=>{ 
    if (err) 
         console.error(err.message)
})

export default db;