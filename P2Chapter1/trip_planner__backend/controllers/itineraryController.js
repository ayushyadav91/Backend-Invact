 const  {validateFlightQueryParams , validateHotelQueryParams , validateSiteQueryParams} = require("../validations");

const axiosInstance = require("../lib/axios.lib");



const getflightsByOriginAndDestination = async (req, res) => {
  const error = validateFlightQueryParams(req.query);
  if(error.length > 0){
    return res.status(400).json({ error });
  }
  try {
    const {origin, destination} = req.query;
    const response = await axiosInstance.get(`/flights/search?origin=${origin}&destination=${destination}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch flights" });
  }
};

const getFlights = async (req, res) => {
  try {
    const test_error = req.query.test_error;
    const rate_limit = req.query.rate_limit;
    const response = await axiosInstance.get(`/flights?test_error=${test_error}&rate_limit=${rate_limit}`,{
      headers:{
        CLIENT_KEY : process.env.CLIENT_KEY,
        CLIENT_SECRET : process.env.CLIENT_SECRET,
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);

  if(error.response.status === 429){
    res.status(429).json({ error: "Rate limit exceeded. Please Try again later" });
  } else if(error.response.status === 500 && error.response.data.error === "Simulate error for testing purposes."){
    return res.status(500).json({ error: "simulate error for testing purposes." });
  } 
   res.status(500).json({ message: "Failed to fetch flights" });
  
  }
};

const getHotelsByLocation = async (req, res) => {
  const error = validateHotelQueryParams(req.query);
  if (error.length > 0) {
    return res.status(400).json({ error });
  }
  try {
    const { location } = req.query;
    const response = await axiosInstance.get(`/hotels/search?location=${location}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch hotels" });
  }
};

const getHotels = async (req, res) => {
  try {
    const response = await axiosInstance.get("/hotels");
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch hotels" });
  }
};

const getSitesBylocation = async (req, res) => {
  const error = validateSiteQueryParams(req.query);
  if (error.length > 0) {
    return res.status(400).json({ error });
  }
  try {
    const { location } = req.query;
    const response = await axiosInstance.get(`/sites/search?location=${location}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch sites" });
  }
};

const getSites = async (req, res) => {
  try {
    const response = await axiosInstance.get("/sites");
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch sites" });
  }
};

module.exports = { getFlights, getHotels, getSites, getflightsByOriginAndDestination, getHotelsByLocation, getSitesBylocation,};
