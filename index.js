const app = require("express")();
const mongoose = require("mongoose");
const Book = require("./Book");
const userDB = mongoose.createConnection("mongodb://localhost/node-mongo", {
  useNewUrlParser: true
});

userDB.once("open", function() {
  console.log("Connected to MongoDB Atlas.");
});
userDB.on("error", function(err) {
  console.log("Database ERROR: " + err);
});

app.post("/book", (req, res) => {
  let { name, phonenumber, email, books } = req.body;
  let book = new Book({ name, phonenumber, email, books });
  book.save()
  res.send({msg:"book added successfully"})
});

app.listen(3000,()=> {
  console.log("server started")
});