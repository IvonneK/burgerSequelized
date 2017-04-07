// Ivonne.Komis
// burgerSequelized app 

console.log("server.js");

var express = require("express");
var db = require("./models");

var PORT = process.env.NODE_ENV || 8080;

var app = express();


db.sequelize.sync().then(function() {
	console.log("Database update db.sequelize.sync() was SUCCESSFUL!")
 
}).catch(function(err) {
 
    console.log(err, "Check your code...ERROR returned when db.sequelize.sync() attempted to run and your Database was NOT updated!")
});


// app.use("/", routes);
app.listen(PORT, function() {
		console.log("listening to PORT %s", PORT);
	});
