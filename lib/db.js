// Records every query so tests can check what would be sent to the database.
const calls = [];

function query(sql, params) {
    const call = { sql, params: params || [] };
    calls.push(call);
    return call;
}

module.exports = { query, calls };
