const express = require('express');
const cors = require('cors');


const { createTour, getTour } = require('./controllers/dataController');
const { getConcerts, getMerchandiseStalls, getAfterParties } = require('./controllers/tourController');
const { sequelize } = require('./models');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes for tours
app.post('/tour', createTour);
app.get('/tour/:id', getTour);

// Routes for tour items
app.get('/concerts', getConcerts);
app.get('/merchandise-stalls', getMerchandiseStalls);
app.get('/after-parties', getAfterParties);

app.get('/', (req, res) => {
  res.send('Hello World!');
});


sequelize.authenticate().then(()=>{
     console.log("Connection to database established successfully");
}).catch((error)=>{
     console.error("Unable to connect to database",error);
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
