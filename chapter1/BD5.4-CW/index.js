const express = require("express");
const {Post} = require("./models/post.model");
const {sequelize , sequelizer} = require("./lib/connectDB");

const app = express();

app.use(express.json());

