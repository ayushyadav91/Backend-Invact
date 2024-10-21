const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const players = [
     {
       id: 1,
       name: 'Virat Kohli',
       country: 'India',
       role: 'Batsman',
       runs: 12000,
       wickets: 4,
     },
     {
       id: 2,
       name: 'James Anderson',
       country: 'England',
       role: 'Bowler',
       runs: 1243,
       wickets: 600,
     },
     {
       id: 3,
       name: 'Kane Williamson',
       country: 'New Zealand',
       role: 'Batsman',
       runs: 7000,
       wickets: 29,
     },
     {
       id: 4,
       name: 'Pat Cummins',
       country: 'Australia',
       role: 'Bowler',
       runs: 750,
       wickets: 250,
     },
     {
       id: 5,
       name: 'Ben Stokes',
       country: 'England',
       role: 'All-rounder',
       runs: 4500,
       wickets: 150,
     },
   ];

app.get("/players", (req,res)=>{
     res.send({players:players});
})
app.get("/players/:id", (req,res)=>{
    let playerId = parseInt(req.params.id)
    const player = players.find(player => player.id ===playerId );
    if (player) {
        res.json({player: player});
    } else {
        res.status(404).json({message: 'Player not found'});
    }
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});