function formatLine(level, message) {
    return "[" + level.toUpperCase() + "] " + message;
}

function info(message) {
    console.log(formatLine("info", message));
}

function debug(message, context) {
    if (!context) {
        return;
    }
    console.log(formatLine("debug", message), context);
}

module.exports = { info, debug };
