const { Tour, Concert, MerchandiseStall, AfterParty, TourItem } = require('../models');

// Create a new tour
const createTour = async (req, res) => {
     try {
       // Assuming `name` is part of the request body
       const { name, concerts, merchandiseStalls, afterParties } = req.body;
   
       if (!name) {
         return res.status(400).json({ error: 'Tour name is required' });
       }
   
       const newTour = await Tour.create({ name });
   
       // Handle associations for concerts, merchandiseStalls, and afterParties here
       // Add any additional logic to save concerts, merchandiseStalls, and afterParties to this tour
   
       res.status(201).json({
         message: 'Tour created',
         tour: newTour
       });
     } catch (error) {
       console.error(error);
       res.status(500).json({ error: 'Internal server error' });
     }
   };

// Get a tour by ID (with associated items)
const getTour = async (req, res) => {
  try {
    const tour = await Tour.findByPk(req.params.id, {
      include: [
        { model: Concert, as: 'concerts' },
        { model: MerchandiseStall, as: 'merchandiseStalls' },
        { model: AfterParty, as: 'afterParties' }
      ]
    });

    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }

    return res.status(200).json(tour);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving tour', error: error.message });
  }
};

module.exports = {
  createTour,
  getTour
};
