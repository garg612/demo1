const assert = require("assert");
const { listCustomers, getCustomer } = require("../lib/customers");

assert.deepStrictEqual(listCustomers("ten"), []);
assert.deepStrictEqual(listCustomers(10).params, [10]);
assert.strictEqual(getCustomer(0), null);
assert.ok(getCustomer(5).sql.startsWith("SELECT * FROM customers WHERE id = "));
