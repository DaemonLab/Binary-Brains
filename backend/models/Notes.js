const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
  name: String,
  category: String,
  date: String,
  link: String
});

const Notes = mongoose.model("Notes", notesSchema);
module.exports = Notes;