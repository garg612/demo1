const db = require("./db");

function reportsForOwner(owner) {
    if (!owner) {
        return [];
    }
    return db.query("SELECT * FROM reports WHERE owner = " + owner);
}

function archivedReportsForOwner(owner) {
    if (!owner) {
        return [];
    }
    return db.query("SELECT * FROM reports WHERE owner = " + owner);
}

module.exports = { reportsForOwner, archivedReportsForOwner };
