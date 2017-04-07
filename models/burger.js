// burger.js creates a Sequelize model We export a function that takes in 2 variables sequelize and DataTypes
// provided automatically by index.js. we pass the name of our model as a string and an object describing our models schema
// each property will represent a column in our sequelburger_db
// console.log('burger.js: creates functions for db' )
// reference connection

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger",  {
	 burger_name: { type: DataTypes.STRING,
	 				allowNull: false
	 			},
	    devoured: { type: DataTypes.BOOLEAN,
	    			allowNull: false,
	    			defaultValue: false
	 			}
  });
  return Burger;
};


