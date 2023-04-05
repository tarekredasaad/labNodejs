const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test").then(
	() => console.log("Connected!"),
	(error) => console.log(error)
);

const middleWare = require("./middle_ware/MW");

const app = express();

middleWare.pipeLine(app);

app.listen(3000);
