const { concerts, merchandiseStalls, afterParties } = require('../models');
const axios = require('axios');
require('dotenv').config();



const axiosInstance = axios.create({
 baseURL:process.env.MICROSERVICE_BASE_URL,
 headers:{
   'Content-Type':'application/json',
   CLIENT_KEY:process.env.CLIENT_KEY,
   CLIENT_SECRET:process.env.CLIENT_SECRET
 }
});

  
// Get all concerts
const getConcerts = async (req, res) => {
  try {
     const response = await axiosInstance.get('/concerts',{
    headers:{
      CLIENT_KEY:process.env.CLIENT_KEY,
   CLIENT_SECRET:process.env.CLIENT_SECRET
    }
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving concerts', error: error.message });
  }
};

// Get all merchandise stalls
const getMerchandiseStalls = async (req, res) => {
  try {
    const response = await axiosInstance.get('/merchandiseStalls');

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving merchandise stalls', error: error.message });
  }
};

// Get all after-parties
const getAfterParties = async (req, res) => {
  try {
    const response = await axiosInstance.get('/afterParties');
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving after-parties', error: error.message });
  }
};

module.exports = {
  getConcerts,
  getMerchandiseStalls,
  getAfterParties
};
