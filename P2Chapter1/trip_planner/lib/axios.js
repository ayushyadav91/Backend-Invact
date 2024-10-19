const axios = require('axios');
require('dotenv').config();

const axiosInstance = axios.create({
     baseURL : 'https://trip-planner-invact.vercel.app/api/v1',
     headers :{
          CLIENT_KEY : process.env.client_key,
          CLIENT_SECRET : process.env. client_secret,
     }
})
module.exports = axiosInstance;