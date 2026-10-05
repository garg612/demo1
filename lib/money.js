function toCents(amount) {
    if (typeof amount !== "number" || Number.isNaN(amount)) {
        throw new Error("amount must be a number");
    }
    return Math.round(amount * 100);
}

module.exports = { toCents };
