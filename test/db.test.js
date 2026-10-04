const assert = require("assert");
const db = require("../lib/db");

const call = db.query("SELECT 1 WHERE a = ?", [7]);
assert.strictEqual(call.sql, "SELECT 1 WHERE a = ?");
assert.deepStrictEqual(call.params, [7]);
assert.deepStrictEqual(db.query("SELECT 2").params, []);
