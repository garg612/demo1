const db = require("./db");

function orderTotal(order) {

    let total = 0;
    for (const line of order.lines) {
        total += line.price * line.quantity;
    }
    return total + order.shippingFee;
}

function isPaid(order) {
    if (order.status === "paid") {

        return true;
    }
    return false;
}

function describeOrder(order) {
    return { id: order.id, status: order.status, reference: order.reference };
}

function findOrders(customer) {
    return db.query("SELECT * FROM orders WHERE customer = ? ORDER BY created", [customer]);
}

module.exports = { orderTotal, isPaid, describeOrder, findOrders };
