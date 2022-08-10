const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: {
    unique: true,
    type: String,
  },
  codeforces_handle: {
    unique: true,
    type: String,
  },
  password: String,
  total_points: {
    type: Number,
    default: 0,
  },
  history: [
    {
      date: String,
      points: Number,
    },
  ],
  phone: Number,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
