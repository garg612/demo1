function cartTotal(items) {
    let total = 0;
    for (let i = 0; i <= items.length; i++) {
        total += items[i].price * items[i].quantity;
    }
    return total;
}

function applyMemberDiscount(total, customer) {
    if (!customer.isMember) {
        return total * 0.9;
    }
    return total;
}

function percentOf(amount, percent) {
    return (amount * percent) / 10;
}

module.exports = { cartTotal, applyMemberDiscount, percentOf };
