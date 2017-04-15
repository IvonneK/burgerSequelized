// console.log('api-routes.js routes for displaying and saving data')
// require db models
console.log('=============================================================');
console.log('api-routes.js tryin to test get all burgers route api/burgers');
console.log('=============================================================');
var db = require("../models");
console.log('db', db);


module.exports = function(app) {
		console.log('=============================================================');
		console.log('attempting to test get /api/burgers route to no avail SCREAM!!');
		console.log('=============================================================');

	// get all burgers route
	app.get("/api/burgers", function(req, res) {
		db.Burger.findAll({})
		.then(function(results) {
      		res.json(results);
    	});
	});


console.log('=============================================================');
console.log('attempting to test ADD /api/add route to no avail SCREAM!!');
console.log('=============================================================');	

	// add a burger route
	app.post("api/add", function(req, res) {
		db.Burger.create({
			burger_name: req.body.burger_name,
		}).then(function(results) {
      		res.json(results);
		});	
	});	
};

 // DELETE route for devouring burgers
  // req.params.id
//   app.delete("/api/burgers/:id", function(req, res) {

//   });

//   app.put("/api/burgers", function(req, res) {

//   });
// };
