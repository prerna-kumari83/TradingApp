const mongoose = require("mongoose");
const UserSchema = require("../schema/UserSchema");

// 🔐 SAFE model registration
const User = mongoose.model("User", UserSchema);

module.exports = User;
