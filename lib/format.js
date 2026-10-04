function formatPrice(cents) {
    if (!Number.isInteger(cents) || cents < 0) {
        throw new Error("cents must be a non-negative integer");
    }
    const whole = Math.floor(cents / 100);
    const rest = String(cents % 100).padStart(2, "0");
    return whole + "." + rest;
}

module.exports = { formatPrice };
