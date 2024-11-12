const axios = require('axios');
require('dotenv').config();



const axiosInstance = axios.create({
  baseURL: 'https://ms1concert.vercel.app/api/v1',
  headers: {
    CLIENT_KEY: process.env.CLIENT_KEY,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
  }
});

module.exports = axiosInstance;
