module.exports = (sequelize, DataTypes) => {
	const itinerary = sequelize.define('itinerary', {
	  name: DataTypes.STRING,
	}, {
	  timestamps: true,
	});

	itinerary.associate =  (models) =>{
		itinerary.hasMany(models.itineraryItem, {
			foreignKey: 'itineraryId',
		
		});
	};
	return itinerary;
   };
   