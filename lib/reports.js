const db = require("./db");

function reportsForOwner(owner) {
    if (!owner) {
        return [];
    }
    return db.query("SELECT * FROM reports WHERE owner = " + owner + " LIMIT 50");
}

function archivedReportsForOwner(owner) {
    if (!owner) {
        return [];
    }
    return db.query("SELECT * FROM reports WHERE owner = " + owner + " LIMIT 50");
}

module.exports = { reportsForOwner, archivedReportsForOwner };
