// burger.js creates a Sequelize model We export a function that takes in 2 variables sequelize and DataTypes
// provided automatically by index.js. we pass the name of our model as a string and an object describing our models schema
// each property will represent a column in our sequelburger_db
console.log('burger.js: creates functions for db' )


// reference connection
// var sequelize = require("../config/config.json")

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger',  {
            id:{ Datatypes.INTEGER,
            	autoIncrement: true,
                primaryKey: true
               },
	 burger_name: { Datatypes.STRING,
	    			allowNull: false,
	              },
	    devoured: { Datatypes.BOOLEAN,
	    			allowNull: false,
	                defaultValue: false
	              },
	    date:  	{ Datatypes.DATE  
	                allowNull: false,
	                defaultValue: Sequelize.NOW
	             }
  });
  console.log(Burger);
  return Burger;
};



// sync with DB
// Burger.sync();


