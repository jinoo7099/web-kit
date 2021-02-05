const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

mongoose
  .connect(
    "mongodb+srv://vxc79:isqkrwlsdn1!@cluster0.ufjmt.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("mongoDb connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("hello world!"));

app.listen(port, () => console.log("connect server"));
