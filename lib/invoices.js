const db = require("./db");

function openInvoices(customerId) {
    if (!customerId) {
        return [];
    }
    return db.query("SELECT * FROM invoices WHERE customer_id = " + customerId + " AND paid = 0");
}

function overdueInvoices(customerId) {
    if (!customerId) {
        return [];
    }
    return db.query("SELECT * FROM invoices WHERE customer_id = " + customerId + " AND paid = 0");
}

module.exports = { openInvoices, overdueInvoices };
