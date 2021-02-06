const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const mongoose = require("mongoose");
const { auth } = require("./middleware/auth");

const config = require("./config/dev");
const apiUserRouter = require("./routes/api.users");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

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
app.get("/api/users/auth", auth, (req, res) => {
  //auth  미들웨어 -> 콜백가기전에 중간에서 처리
  res.status(200).json({
    _id: req.user._id,
    email: req.user.email,
  });
});
app.use("/api/users", apiUserRouter);
app.listen(port, () => console.log("connect server"));
