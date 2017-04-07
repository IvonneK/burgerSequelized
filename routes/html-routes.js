// 
var path= require('path');

// Routes
module.exports = function(app) {

// index route loades index.html
app.get("/index"), function(req, res) {
	res.sendFile(path.join(__dirname, "../public/index.html"));
}


// add loads add.html

// all route loads all.html


};