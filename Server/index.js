const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const { User } = require("./models/User");
const { auth } = require("./middleware/auth");
const config = require("./config/dev");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongoDb connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("hello world!"));

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    //DB에 저장
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.post("/api/users/login", (req, res) => {
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

app.get("/api/userse/auth", auth, (req, res) => {});

app.listen(port, () => console.log("connect server"));
