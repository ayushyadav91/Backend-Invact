const express = require('express')
const app = express();
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const PORT = process.env.PORT || 5000;
let db;

// Connect to SQLite database
(async () => {
  db = await open({ filename: "database.sqlite", driver: sqlite3.Database });
  if (db) console.log("Connected to the SQLite database.");
})();

app.get("/", (req, res) => {
  res.status(200).json({ message: "BD4 CW - SQL " });
});

// YOUR ENPOINTS GO HERE
async function fetchAllMovies(){
  let query = "SELECT id, title, release_year FROM movies";
  let response = await db.all(query,[]);
  return {moives :response};
}
app.get("/movies", async (req ,res)=>{
  
    let result = await fetchAllMovies();
    res.status(200).json(result);

})


















app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
