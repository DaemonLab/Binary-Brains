const mongoose = require("mongoose");

const itemsSchema = mongoose.Schema({
  itemName: String,
  itemPrice: Number,
});

const Items = mongoose.model("Items", itemsSchema);
module.exports = Items;
