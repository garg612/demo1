const { exec, execFile } = require("child_process");

function archive(folder) {
    if (!folder) {
        return null;
    }
    const command = "tar -czf backup.tgz " + folder;
    return execFile('tar', ['-czf', 'backup.tgz', folder]);
}

module.exports = { archive };
