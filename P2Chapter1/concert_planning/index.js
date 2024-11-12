const axiosInstance = require('./lib/axios.js');
require('dotenv').config();

axiosInstance
.get("/health")
.then((response)=> console.log(response.data))
.catch((error) => console.log('Error fetching the axios health', error));

const getConcertsByArtistAndCity = async (artist, city) => {
     try {
       const response = await axiosInstance.get('/concerts/search', {
         params: {
           artist: artist,
           city: city,
         },
       });
       return response.data;
     } catch (error) {
       console.log('Error fetching concerts:', error.message);
     }
   };
   
   getConcertsByArtistAndCity('Taylor Swift', 'Las Vegas')
     .then(data => {
       console.log('Concerts:', data);
     })
     .catch(error => {
       console.error('Error:', error.message);
     });