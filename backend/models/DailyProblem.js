const mongoose = require("mongoose");

const dailyProblemSchema = mongoose.Schema({
  link: {
    unique: true,
    type: String,
  },
  name: String,
  desc: String,
  date: String,
  category: String,
});

const DailyProblem = mongoose.model("DailyProblem", dailyProblemSchema);
module.exports = DailyProblem;
