const express = require("express");
const router = express.Router();
const { Plan } = require("../models/plan");
const { auth } = require("../middleware/auth");

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

module.exports = router;
