let mongoose = require("mongoose");
let express = require("express");
let router = express.Router();

let userSchema = require("../models/User");

router.post("/create-user", (req, res, next) => {
	userSchema.create(req.body, (error, data) => {
		if (error) {
			return next(error);
		} else {
			console.log(data);
			res.json(data);
		}
	})
})

router.get("/", (req, res) => {
	userSchema.find((error, data) => {
		if (error) {
			return next(error);
		} else {
			res.json(data);
		}
	});
});

router.get("/:id", (req, res, next) => {
	userSchema.find(req.params, (error, data) => {
		if (error) {
			return next(error);
		} else {
			res.status(200).json({
				msg: data,
			});
		}
	});
});

/*router.route("/update-user/:id").get((req, res) => {
	userSchema.findById(req.params.id, (error, data) => {
		if (error) {
			return next(error);
		} else {
			res.json(data);
		}
	});
}).put((req, res, next) => {
	userSchema.findByIdAndUpdate(
		req.params.id,
		{
			$set: req.body,
		},
		(error, data) => {
			if (error) {
				return next(error);
				console.log(error);
			} else {
				res.json(data);
				console.log("User successfully updated");
			}
		}
	);
});*/

router.delete("/delete-user/:id", (req, res, next) => {
	userSchema.findByIdAndRemove(req.params.id, (error, data) => {
		if (error) {
			return next(error);
		} else {
			res.status(200).json({
				msg: data,
			});
		}
	});
});

module.exports = router;