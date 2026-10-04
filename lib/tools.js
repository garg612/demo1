const { exec } = require("child_process");

function resizeImage(file, width) {
    if (!file || !width) {
        return null;
    }
    const command = "convert " + file + " -resize " + width + " out.png";
    return exec(command);
}

module.exports = { resizeImage };
