const express = require("express");
const router = express.Router();
const { Plan } = require("../models/plan");
const { User } = require("../models/User");

router.post("/create", (req, res) => {
  const token = req.cookies.x_auth;
  // const plan = new Plan();

  const planName = req.body.name;
  User.findOne({ token: token }, function (err, user) {
    const plan = new Plan({ master: user.email, name: planName });
    plan.save((err, plan) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({
        success: true,
      });
    });
  });
});

router.post("/", (req, res) => {
  const token = req.cookies.x_auth;
  User.findOne({ token: token }, function (err, user) {
    Plan.find({ users: user.email }, function (err, plan) {
      res.json(plan);
    });
  });
});

module.exports = router;
