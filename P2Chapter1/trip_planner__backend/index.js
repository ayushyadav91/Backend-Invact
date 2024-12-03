const express = require("express");
const cors = require("cors");

const {createItinerary,getItinerary} = require("./controllers/dataController");
const {getFlights,getHotels,getSites, getflightsByOriginAndDestination, getHotelsByLocation, getSitesBylocation} = require("./controllers/itineraryController");
const { sequelize } = require("./models");


require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.post("/itinerary",createItinerary);
app.get("/itinerary/:id",getItinerary);

app.get("/data/flights",getFlights);
app.get("/data/hotels",getHotels);
app.get("/data/sites",getSites);
app.get("/flights/search",getflightsByOriginAndDestination);
app.get("/hotels/search",getHotelsByLocation);
app.get("/sites/search",getSitesBylocation);



sequelize.authenticate().then(()=>{
     console.log("Connection to database established successfully");
}).catch((error)=>{
     console.error("Unable to connect to database",error);
});
 


app.listen(process.env.PORT , ()=>{
     console.log(`Server started on port ${process.env.PORT}`);
});  