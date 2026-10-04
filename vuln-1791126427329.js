const express = require('express');
const app = express();
const db = require('./db');

app.get('/user', (req, res) => {
    const id = req.query.id;
    db.query("SELECT * FROM users WHERE id = " + id, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});
app.listen(3000);