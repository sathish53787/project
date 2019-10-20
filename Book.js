const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: String,
  phonenumber: Number,
  email: String,
  books: [
    {
      name: String,
      author: String,
      price: Number
    }
  ]
});

module.exports = mongoose.model("Book", BookSchema);
