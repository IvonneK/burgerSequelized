// 
console.log('=============================================================');
console.log('html-routes.js                                                  ');
console.log('=============================================================');

var path= require('path');

// Routes
module.exports = function(app) {

// index route loades everything from db view.html
	app.get("/", function(req, res) {
		console.log('SCREAM does this work????')
		res.sendFile(path.join(__dirname, "/../public/view.html"));
	});


// add loads add.html

// all route loads all.html


};