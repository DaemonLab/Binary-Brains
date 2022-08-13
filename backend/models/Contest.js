const mongoose = require("mongoose");

const contestSchema = mongoose.Schema({
  contest: {
    unique: true,
    type: String,
  },
  name: String,
  desc: String,
  date: String,
  category: String,
});

const Contest = mongoose.model("Contest", contestSchema);
module.exports = Contest;
