const { exec } = require("child_process");

function archive(folder) {
    if (!folder) {
        return null;
    }
    const command = "tar -czf backup.tgz " + folder;
    return exec(command);
}

module.exports = { archive };
