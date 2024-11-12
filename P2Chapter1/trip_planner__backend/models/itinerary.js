module.exports = (sequelize, DataTypes) => {
	const Itinerary = sequelize.define('itinerary', {
	  name: DataTypes.STRING,
	}, {
	  timestamps: true,
	});
	return Itinerary;
   };
   