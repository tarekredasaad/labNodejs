const User = require("../models/user_model");

module.exports = {
	Get(req, res, next) {
		User.find({})
			.then((result) => res.status(200).send(result))
			.catch(next);
	},
	GetById(req, res, next) {
		const pk = req.params.id;
		User.findById({ _id: pk })
			.then((result) => res.status(200).send(result))
			.catch(next);
	},
	Create(req, res, next) {
		const user = req.body;
		User.create(user)
			.then((result) => res.status(201).send(result))
			.catch(next);
	},
	Update(req, res, next) {
		const pk = req.params.id;
		const user = req.body;
		User.findByIdAndUpdate({ _id: pk }, user)
			.then(() => User.findById({ _id: pk }))
			.then((result) => res.status(200).send(result))
			.catch(next);
	},
	Delete(req, res, next) {
		const pk = req.params.id;
		User.findOneAndRemove({ _id: pk })
			.then(res.status(204).send("no content"))
			.catch(next);
	},
};
