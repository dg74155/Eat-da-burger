var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.all(function(data) {
		var hdbObject = {
			burger: data
		};
		res.render("index", hdbObject);
	});
});

router.post("/", function(req, res){
	burger.create(["burger_name"], [req.body.b_name], function(data){
		res.redirect("/")
	});
});

router.put("/:id", function(req, res){
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.update({devoured: req.body.devoured}, condition, function(data){
		res.redirect("/");
	});
});

module.exports = router;