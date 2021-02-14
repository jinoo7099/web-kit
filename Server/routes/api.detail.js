const express = require("express");
const router = express.Router();
const { Plan } = require("../models/plan");
const { User } = require("../models/User");

router.post("/", (req, res) => {
  const plan = req.body;
  Plan.findOne({ _id: req.body._id }, function (err, result) {
    if (err) {
      req.json({ message: "render failed" });
    }

    res.json(result);
  });
});

router.post("/column/create", (req, res) => {
  const column = req.body;

  Plan.findOne({ _id: req.body._id }, function (err, result) {
    if (err) {
      req.json({ message: "to create column failed" });
    }
    result.column.push({ name: req.body.title });

    result.save();
  });
});

router.post("/column/delete", (req, res) => {
  const columnName = req.body.column;
  Plan.findOne(
    { name: req.body.name, master: req.body.master },
    function (err, result) {
      if (err) {
        req.json({ message: "to delete column failed" });
      }
      for (let el of result.column) {
        if (el.name === columnName) {
          result.column.pull({ _id: el._id });
          break;
        }
      }
      result.save();
    }
  );
});

router.post("/task/create", (req, res) => {
  const columnName = req.body.column;
  Plan.findOne(
    { name: req.body.name, master: req.body.master },
    function (err, result) {
      if (err) {
        req.json({ message: "to delete column failed" });
      }
      for (let el of result.column) {
        if (el.name === columnName) {
          el.task.push({ name: req.body.task, author: req.body.author });
          break;
        }
      }
      result.save();
    }
  );
});

router.post("/task/delete", (req, res) => {
  const columnName = req.body.column;
  const taskName = req.body.task;
  Plan.findOne(
    { name: req.body.name, master: req.body.master },
    function (err, result) {
      if (err) {
        req.json({ message: "to delete column failed" });
      }

      for (let el of result.column) {
        if (el.name === columnName) {
          for (let task of el.task) {
            if (task.name === taskName) {
              el.task.pull({ _id: task._id });
            }
          }
        }
      }
      result.save();
    }
  );
});

router.post("/user/create", (req, res) => {
  const newUser = req.body.user;

  Plan.findOne({ _id: req.body._id }, function (err, result) {
    result.users.push(newUser);
    result.save();
  });
});

router.post("/state/change", (req, res) => {
  const state = req.body.state;
  Plan.findOne({ _id: req.body._id }, function (err, result) {
    if (state === "private") {
      result.users = [];
    }
    result.state = state;
    result.save();
    res.send({
      success: true,
      msg: "state change completed",
      state: result.state,
    });
  });
});
module.exports = router;
