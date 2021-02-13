const mongoose = require("mongoose");
const planSchema = mongoose.Schema({
  name: {
    type: String,
  },
  master: {
    type: String,
  },
  users: [String],
  date: {
    type: Date,
    default: Date.now,
  },
  state: {
    type: String,
    default: "private",
  },
  column: [
    {
      name: { type: String },
      task: [{ author: { type: String }, name: { type: String } }],
    },
  ],
});

const taskSchema = mongoose.Schema({
  task: {},
});

const Plan = mongoose.model("Plan", planSchema);

module.exports = { Plan };
