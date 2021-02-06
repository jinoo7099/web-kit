const express = require("express");
const router = express.Router();
const { User } = require("../models/User");

router.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    //DB에 저장
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "Not Find User",
      });
    }

    if (!(req.body.password === user.password)) {
      return res.json({
        loginSuccess: false,
        message: "incorrect password",
      });
    }

    user.generateToken((err, user) => {
      if (err) {
        return res.status(400).send(err);
      }
      // 토큰 저장
      res
        .cookie("x_auth", user.token)
        .status(200)
        .json({ loginsuccess: true, userId: user._id });
    });
  });
});

module.exports = router;
