const express = require("express");
const router = express.Router();
const { Plan } = require("../models/plan");
const { User } = require("../models/User");

//
//  /api/plan
//

router.post("/create", (req, res) => {
  const token = req.cookies.x_auth;
  // const plan = new Plan();

  const planName = req.body.name;
  User.findOne({ token: token }, function (err, user) {
    const plan = new Plan({
      master: user.email,
      name: planName,
      users: [user.email],
    });
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

router.post("/delete", (req, res) => {
  Plan.remove(req.body, function (err, plan) {
    if (err) {
      throw err;
    }
    console.log("remove");
  });
});
module.exports = router;
