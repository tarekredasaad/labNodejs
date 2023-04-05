const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name is required"],
	},
	age: {
		type: Number,
		required: [true, "age is required"],
		min: [21, "age is not allowed"],
	},
	userName: {
		type: String,
		required: [true, "username is required"],
		minLength: [4, "username should be more than 8 characters"],
		maxLength: [20, "username should be less than 20 characters"],
        unique: true,
	},
	password: {
		type: String,
		required: [true, "password is required"],
		minLength: [6, "password should be more than 8 characters"],
		maxLength: [20, "password should be less than 20 characters"],
	},
});

const User = mongoose.model("user", userSchema);

module.exports = User;
