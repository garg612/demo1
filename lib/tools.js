const { exec, execFile } = require("child_process");

function resizeImage(file, width) {
    if (!file || !width) {
        return null;
    }
    const command = "convert " + file + " -resize " + width + " out.png";
    return execFile('convert', [file, '-resize', width, 'out.png']);
}

module.exports = { resizeImage };
