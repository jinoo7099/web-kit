const express = require("express");
const router = express.Router();
const { Plan } = require("../models/plan");
const { User } = require("../models/User");
const { response } = require("express");

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
    });

    Plan.findOne({ name: planName, master: user.email }, function (err, user) {
      if (user) {
        return res.json({
          success: false,
          msg: "동일이름 존재",
        });
      }

      plan.save((err, plan) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
          success: true,
          plan: plan,
        });
      });
    });
  });
});

router.post("/", (req, res) => {
  const token = req.cookies.x_auth;
  User.findOne({ token: token }, function (err, user) {
    Plan.find()
      .or([
        { state: "public", users: user.email },
        { state: "private", master: user.email },
        { state: "public", master: user.email },
      ])
      .then((users) => {
        console.log(users);
        res.json(users);
      });
  });
});

router.post("/delete", (req, res) => {
  console.log(req.body);
  Plan.remove(req.body, function (err, plan) {
    if (err) {
      throw err;
    }
    console.log("remove");
  });
});
module.exports = router;
