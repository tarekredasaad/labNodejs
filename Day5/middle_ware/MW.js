const express = require("express");
const userRouter = require("../routes/user_routes");

module.exports = {
	pipeLine(app) {
		app.use(express.urlencoded({ urlencoded: false }));

		app.use(express.json());

		app.use("/user", userRouter);

		app.use((err,req,res,next)=>res.status(404).send(err));
	},
};
