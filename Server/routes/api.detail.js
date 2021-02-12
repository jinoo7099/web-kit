const express = require('express');
const router = express.Router();
const { Plan } = require('../models/plan');
const { User } = require('../models/User');

router.post('/', (req, res) => {
  const plan = req.body;
  Plan.findOne(plan, function (err, result) {
    if (err) {
      req.json({ message: 'render failed' });
    }

    res.json(result);
  });
});

router.post('/column', (req, res) => {
  const column = req.body;

  Plan.findOne({ name: req.body.name, master: req.body.master }, function (err, result) {
    if (err) {
      req.json({ message: 'to create column failed' });
    }
    console.log(result.column.indexOf({ name: req.body.title }));
    result.column.push({ name: req.body.title });

    result.save();
  });
});

router.post('/delete', (req, res) => {
  const columnName = req.body.column;
  Plan.findOne({ name: req.body.name, master: req.body.master }, function (err, result) {
    if (err) {
      req.json({ message: 'to delete column failed' });
    }
    for (let i of result.column) {
      if (i.name === columnName) {
        result.column.pull({ _id: i._id });
        break;
      }
    }
    result.save();
  });
});

module.exports = router;
