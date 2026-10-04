// Runs every *.test.js file in this folder. No dependencies.
const fs = require("fs");
const path = require("path");

let failed = 0;
for (const file of fs.readdirSync(__dirname).filter(name => name.endsWith(".test.js")).sort()) {
    try {
        require(path.join(__dirname, file));
        console.log("ok   " + file);
    } catch (error) {
        failed++;
        console.error("FAIL " + file + ": " + error.message);
    }
}
process.exit(failed === 0 ? 0 : 1);
