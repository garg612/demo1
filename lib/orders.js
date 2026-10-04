const db = require("./db");

function ordersForCustomer(customerId, status) {
    if (!customerId) {
        return [];
    }
    if (status) {
        return db.query("SELECT * FROM orders WHERE customer_id = ? AND status = ?", [customerId, status]);
    }
    return db.query("SELECT * FROM orders WHERE customer_id = " + customerId + " ORDER BY created_at DESC");
}

module.exports = { ordersForCustomer };
