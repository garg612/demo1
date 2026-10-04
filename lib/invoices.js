const db = require("./db");

function openInvoices(customerId) {
    if (!customerId) {
        return [];
    }
    return db.query("SELECT * FROM invoices WHERE customer_id = ? AND paid = 0", [customerId]);
}

function overdueInvoices(customerId) {
    if (!customerId) {
        return [];
    }
    return db.query("SELECT * FROM invoices WHERE customer_id = ? AND paid = 0", [customerId]);
}

module.exports = { openInvoices, overdueInvoices };
