
const {tour:tourModel,concert:concertModel,merchandiseStall:merchandiseStallModel,afterParties:afterPartiesModel,tourItem:tourItemModel} = require('../models');

const createTour = async (req,res) => {
  try{
    const {name, concerts, merchandiseStalls, afterParties} = req.body;
    const newTour = await tourModel.create({name});
    if(concerts && concerts.length > 0){
      for(const concert of concerts){
        const savedConcert = await concertModel.create(concert);
        await tourItemModel.create({
          tourId:newTour.id,
          itemId:savedConcert.id,
          type:'concert'
        });
  }
    }

    if(merchandiseStalls && merchandiseStalls.length > 0){
      for(const merchandiseStall of merchandiseStalls){
        const savedMerchandiseStall = await merchandiseStallModel.create(merchandiseStall);
        await tourItemModel.create({
          tourId:newTour.id,
          itemId:savedMerchandiseStall.id,
          type:'merchandiseStall'
        });
      }
    }
  
    // if(afterParties && afterParties.length > 0){
    //   for(const afterParties of afterParties){
    //     const savedAfterParties = await afterPartiesModel.create(afterParties);
    //     await tourItemModel.create({
    //       tourId:newTour.id,
    //       itemId:savedAfterParties.id,
    //       type:'afterParties'
    //     });
    //   }
    // }
    if(afterParties && afterParties.length > 0){
      for(const party of afterParties){  // Rename loop variable
        const savedAfterParty = await afterPartiesModel.create(party);
        await tourItemModel.create({
          tourId: newTour.id,
          itemId: savedAfterParty.id,
          type: 'afterParties'
        });
      }
    }
    
   
    res.status(201).json({
      message: 'Tour created',
      tour: newTour
    });
  }catch(error){
    console.error(error);
    res.status(500).json({error:'Internal server error'});
  }
};


// Get a tour by ID (with associated items)
const getTour = async (req, res) => {
  try {
    const tour = await tourModel.findOne({ where: { id: req.params.id } });
    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }

    const items = await tourItemModel.findAll({ where: { tourId: tour.id } });
    const concerts = [];
    const merchandiseStalls = [];
    const afterParties = [];

    for (const item of items) {
      if (item.type === 'concert') {
        const concert = await concertModel.findByPk(item.itemId);
        if (concert) {
          concerts.push(concert);
        }
      } else if (item.type === 'merchandiseStall') {
        const merchandiseStall = await merchandiseStallModel.findByPk(item.itemId);
        if (merchandiseStall) {
          merchandiseStalls.push(merchandiseStall);
        }
      } else if (item.type === 'afterParties') {
        const party = await afterPartiesModel.findByPk(item.itemId); // Rename variable to avoid conflict
        if (party) {
          afterParties.push(party);
        }
      }
    }

    res.status(200).json({
      message: 'Tour found',
      tour,
      concerts,
      merchandiseStalls,
      afterParties,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



// const createTour = async (req, res) => {
//      try {
//        // Assuming `name` is part of the request body
//        const { name, concerts, merchandiseStalls, afterParties } = req.body;
   
//        if (!name) {
//          return res.status(400).json({ error: 'Tour name is required' });
//        }
   
//        const newTour = await Tour.create({ name });
   
//        // Handle associations for concerts, merchandiseStalls, and afterParties here
//        // Add any additional logic to save concerts, merchandiseStalls, and afterParties to this tour
   
//        res.status(201).json({
//          message: 'Tour created',
//          tour: newTour
//        });
//      } catch (error) {
//        console.error(error);
//        res.status(500).json({ error: 'Internal server error' });
//      }
//    };

// // Get a tour by ID (with associated items)
// const getTour = async (req, res) => {
//   try {
//     const tour = await Tour.findByPk(req.params.id, {
//       include: [
//         { model: Concert, as: 'concerts' },
//         { model: MerchandiseStall, as: 'merchandiseStalls' },
//         { model: AfterParty, as: 'afterParties' }
//       ]
//     });

//     if (!tour) {
//       return res.status(404).json({ message: 'Tour not found' });
//     }

//     return res.status(200).json(tour);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error retrieving tour', error: error.message });
//   }
// };

module.exports = {
  createTour,
  getTour
};
