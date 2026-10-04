function started(job) {
    console.log("job started", job.id);
}

function finished(job, ms) {
    if (ms < 0) {
        return;
    }
    console.log("job finished", job.id, ms);
}

module.exports = { started, finished };
