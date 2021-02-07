const express = require("express");
const router = express.Router();
const { Plan } = require("../models/plan");
const { User } = require("../models/User");

router.post("/create", (req, res) => {
  const plan = new Plan(req.body);

  console.log("hi");
  plan.save((err, plan) => {
    //DB에 저장
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/", (req, res) => {
  const token = req.cookies.x_auth;
  const data = [];
  User.findOne({ token: token }, function (err, user) {
    Plan.find({ email: user.email }, function (err, plan) {
      res.json(plan);
    });
  });
});

module.exports = router;
