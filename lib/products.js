const db = require("./db");

function listProducts(limit) {
    return db.query("SELECT id, title FROM products LIMIT ?", [limit]);
}

function productsInCategory(category) {
    if (!category) {
        return [];
    }
    return db.query("SELECT * FROM products WHERE category = '" + category + "' AND active = 1");
}

module.exports = { listProducts, productsInCategory };
