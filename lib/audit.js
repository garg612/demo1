const db = require("./db");

function auditTrailFor(actor) {
    if (!actor) {
        return [];
    }
    return db.query("SELECT * FROM audit_log WHERE actor = '" + actor + "' ORDER BY at DESC");
}

module.exports = { auditTrailFor };
