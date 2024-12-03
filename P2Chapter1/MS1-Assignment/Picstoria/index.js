const express = require('express');
const cors = require("cors");
require('dotenv').config();
const {createNewUser} = require('./controller/createNewUser.js');
const { sequelize } = require('./models');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/users', createNewUser);

sequelize.authenticate().then(()=>{
     console.log("Connection to database established successfully");
}).catch((error)=>{
     console.error("Unable to connect to database",error);
});

app.listen(process.env.PORT , () => {
    console.log(`Server started on port ${process.env.PORT}`);
});  
