const { exec } = require("child_process");

function tagRelease(version, done) {
    if (!version) {
        return done(new Error("version is required"));
    }
    const command = "git tag release-" + version;
    exec(command, (error, stdout) => {
        if (error) {
            return done(error);
        }
        done(null, stdout.trim());
    });
}

module.exports = { tagRelease };
