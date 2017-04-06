// Ivonne.Komis
// burgerSequelized app 

console.log("server.js");

var express = require("express");
var db = require("./models");

var PORT = process.env.NODE_ENV || 8080;

var app = express();


db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("listening to port %s", PORT);
	});
});
