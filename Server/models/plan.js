const mongoose = require("mongoose");

const planSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  state: {
    type: String,
    default: "private",
  },
});

const Plan = mongoose.model("Plan", planSchema);

module.exports = { Plan };
