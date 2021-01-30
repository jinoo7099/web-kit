const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('index', { title: 'hey', message: 'hello world' });
});

module.exports = router;
