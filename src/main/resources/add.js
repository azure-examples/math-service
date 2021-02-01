const Express = require('express');
const math = require('../shared/math');

const app = Express();
app.get('/add', (req, res, next) => {
  try {
    if (req.query && req.query.num1 && req.query.num2 && !isNaN(req.query.num1) && !isNaN(req.query.num2)) {
      res.status(200).contentType('json').send(JSON.stringify({
        sum: math.Add(parseFloat(req.query.num1), parseFloat(req.query.num2))
      }));
    } else {
      res.status(400).contentType('json').send(JSON.stringify({
        message: 'The following query parameters must be passed as numbers: num1, num2.'
      }));
    }
  } catch (err) {
    res.status(500).send(JSON.stringify({
      message: err.message
    }));
  }
});

module.exports = app;
