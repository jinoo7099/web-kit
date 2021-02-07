const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");

router.post("/register", (req, res) => {
  const user = new User(req.body);

  console.log(req.body);
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

    if (req.body.password !== user.password) {
      return res.json({
        loginSuccess: false,
        message: "incorrect password",
      });
    }
    user.generateToken((err, user) => {
      if (err) {
        return res.status(400).send(err);
      }
      // 토큰을 쿠키에 저장
      res
        .cookie("x_auth", user.token)
        .status(200)
        .json({ loginSuccess: true, userId: user._id });
    });
  });
});

router.post("/auth", auth, (req, res) => {
  //auth  미들웨어 -> 콜백가기전에 중간에서 처리
  res.status(200).json({
    isAuth: true,
    _id: req.user._id,
    email: req.user.email,
  });
});

router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
    });
  });
});

module.exports = router;
