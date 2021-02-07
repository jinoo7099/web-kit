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
  column: [String],
});

const Plan = mongoose.model("Plan", planSchema);

module.exports = { Plan };
