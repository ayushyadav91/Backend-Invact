const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");

const app = express();
const PORT = process.env.PORT || 3000;
let db;

(async () => {
     db = await open({
       filename: "./src/db/database.sqlite",
       driver: sqlite3.Database,
     });
   })();

app.get("/", (req, res) => {
     res.status(200).json({ message: "BD4.1 HW2 Template" });
   });
    
//Exercise 1: Get All Games
async function fetchGames(){
     let query = "SELECT *FROM games";
     let response = await db.all(query,[]);
     return {games:response};
}
app.get("/games",async (req ,res)=>{
     try{
      let fetchAllGames = await fetchGames();
      if(!fetchAllGames){
          return res.status(404).json({message:"Data Not Found"});
      }
      return res.status(200).json(fetchAllGames);
     } catch(error){
          res.status(500).json({error:error.message});
     }
})
//Exercise 2: Get Game by ID
async function fetchGameById(id){
let query = "SELECT game FROM games WHERE id=?";
let response = await db.all(query, [id]);
return {games:response};
}
app.get("/games/details/:id", async (req ,res)=>{
     let id = req.params.id;
     try{
        let gamesById = await fetchGameById(id);
        if(!gamesById){
          return res.status(404).json({message:"Data not Found"});
        }
        return res.status(200).json(gamesById);
        
     } catch(error){
          res.status(500).json({error:error.message})
     }
})

//Exercise 3: Get Games by Genre
>
//Exercise 4: Get Games by Platform
   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });