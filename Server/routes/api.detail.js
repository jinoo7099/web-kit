const express = require("express");
const router = express.Router();
const { Plan } = require("../models/plan");
const { User } = require("../models/User");

router.post("/", (req, res) => {
  const plan = req.body;
  Plan.findOne(plan, function (err, result) {
    if (err) {
      req.json({ message: "render failed" });
    }

    res.json(result);
  });
});

router.post("/column", (req, res) => {
  const column = req.body;

  Plan.findOne(
    { name: req.body.name, master: req.body.master },
    function (err, result) {
      if (err) {
        req.json({ message: "to create column failed" });
      }
      result.column.push({ name: req.body.title });

      result.save();
    }
  );
});

module.exports = router;
