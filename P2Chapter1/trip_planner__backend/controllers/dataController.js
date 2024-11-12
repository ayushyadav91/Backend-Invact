const {
     flight: flightModel,
     hotel: hotelModel,
     site: siteModel,
     itinerary: itineraryModel,
     itineraryItem: itineraryItemModel,
   } = require("../models");
   
   const createItinerary = async (req, res) => {
     try {
       const { flights, hotels, sites, name } = req.body;
       const newItinerary = await itineraryModel.create({ name });
   
       if (flights && flights.length > 0) {
         for (const flight of flights) {
           const savedFlight = await flightModel.create(flight);
           await itineraryItemModel.create({
             itineraryId: newItinerary.id,
             itemId: savedFlight.id,
             type: "flight",
           });
         }
       }
   
       if (hotels && hotels.length > 0) {
         for (const hotel of hotels) {
           const savedHotel = await hotelModel.create(hotel);
           await itineraryItemModel.create({
             itineraryId: newItinerary.id,
             itemId: savedHotel.id,
             type: "hotel",
           });
         }
       }
   
       if (sites && sites.length > 0) {
         for (const site of sites) {
           const savedSite = await siteModel.create(site);
           await itineraryItemModel.create({
             itineraryId: newItinerary.id,
             itemId: savedSite.id,
             type: "site",
           });
         }
       }
   
       res.status(201).json({ message: "Itinerary created successfully", itinerary: newItinerary });
     } catch (error) {
       console.error(error);
       res.status(500).json({ message: "Internal Server Error" });
     }
   };
   
   const getItinerary = async (req, res) => {
     try {
       const itinerary = await itineraryModel.findOne({ where: { id: req.params.id } });
       if (!itinerary) {
         return res.status(404).json({ message: "Itinerary not found" });
       }
   
       const items = await itineraryItemModel.findAll({ where: { itineraryId: itinerary.id } });
       const flights = [];
       const hotels = [];
       const sites = [];
   
       for (const item of items) {
         if (item.type === "flight") {
           const flight = await flightModel.findByPk(item.itemId);
           if (flight) flights.push(flight);
         } else if (item.type === "hotel") {
           const hotel = await hotelModel.findByPk(item.itemId);
           if (hotel) hotels.push(hotel);
         } else {
           const site = await siteModel.findByPk(item.itemId);
           if (site) sites.push(site);
         }
       }
   
       res.json({ itinerary, flights, hotels, sites });
     } catch (error) {
       console.error(error);
       res.status(500).json({ message: "Failed to fetch itinerary" });
     }
   };
   
   module.exports = { createItinerary, getItinerary };
   