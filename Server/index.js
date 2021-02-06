const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const mongoose = require("mongoose");

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
app.post("/test", (req, res) => {
  console.log(req.body);
});

// app.get("/api/userse/auth", auth, (req, res) => {});
app.use("/api/users", apiUserRouter);
app.listen(port, () => console.log("connect server"));
