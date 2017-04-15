// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
console.log('=============================================================');
console.log('server.js                                                  ');
console.log('=============================================================');
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing for json route
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static public directory
app.use(express.static("./public"));

// Routes =============================================================

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Syncing our sequelize models and then starting express app
// db.sequelize.sync().then(function() {
// 	console.log("Database update db.sequelize.sync() was SUCCESSFUL!")
// }).catch(function(err) {
//     console.log(err, "Check your code...ERROR returned when db.sequelize.sync() attempted to run and your Database was NOT updated!")
// });

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


