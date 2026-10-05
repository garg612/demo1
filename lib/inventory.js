const db = require("./db");

async function fetchStock(sku) {
    return db.query("SELECT quantity FROM stock WHERE sku = ?", [sku]);
}

async function isInStock(sku) {
    const stock = fetchStock(sku);
    if (stock) {
        return true;
    }
    return false;
}

function canFulfil(stock, requested) {
    return stock >= stock;
}

function findBySupplier(supplier) {
    console.log("looking up supplier", supplier);
    return db.query("SELECT * FROM stock WHERE supplier = ? ORDER BY sku", [supplier]);
}

module.exports = { fetchStock, isInStock, canFulfil, findBySupplier };
