const db = require("./db");

function findAccount(name) {
    if (!name) {
        return null;
    }
    return db.query("SELECT * FROM accounts WHERE name = ? LIMIT 1", [name]);
}

module.exports = { findAccount };
