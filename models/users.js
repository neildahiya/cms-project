var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  phone: Number,
  name: String,
  isAdmin: { type: Boolean, default: false }
});
module.exports = mongoose.model("User", UserSchema);
