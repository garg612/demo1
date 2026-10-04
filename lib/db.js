const pool = { query(sql, params) { return { sql, params: params || [] }; } };

module.exports = pool;
