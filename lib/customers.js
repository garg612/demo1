const db = require("./db");

function listCustomers(limit) {
    if (!Number.isInteger(limit)) {
        return [];
    }
    return db.query("SELECT id, name FROM customers LIMIT ?", [limit]);
}

function getCustomer(id) {
    if (!id) {
        return null;
    }
    return db.query("SELECT * FROM customers WHERE id = " + id + " LIMIT 1");
}

module.exports = { listCustomers, getCustomer };
