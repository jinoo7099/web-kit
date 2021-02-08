const express = require("express");
const router = express.Router();
const { Plan } = require("../models/plan");
const { User } = require("../models/User");

router.post("/", (req, res) => {
  const plan = req.body;
  Plan.find(plan, function (err, plan) {
    res.json(plan);
  });
});

module.exports = router;
