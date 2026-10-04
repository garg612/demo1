const db = require("./db");

function listUsers(limit) {
    if (!Number.isInteger(limit)) {
        return [];
    }
    return db.query("SELECT id, name FROM users LIMIT ?", [limit]);
}

function getUser(id) {
    if (!id) {
        return null;
    }
    return db.query("SELECT * FROM users WHERE id = " + id + " LIMIT 1");
}

module.exports = { listUsers, getUser };
