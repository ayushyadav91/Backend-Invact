const express = require("express");
const app = express();

let { Op } = require("@sequelize/core");
const { Sequelize } = require("./lib/index");
const port = process.env.PORT || 3000;
const { User } = require("./models/user.model");
const { Track } = require("./models/track.model");
const { Like } = require("./models/like.model");
require("./models/associations");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let movieData = [
     {
       name: 'Raabta',
       genre: 'Romantic',
       release_year: 2012,
       artist: 'Arijit Singh',
       album: 'Agent Vinod',
       duration: 4,
     },
     {
       name: 'Naina Da Kya Kasoor',
       genre: 'Pop',
       release_year: 2018,
       artist: 'Amit Trivedi',
       album: 'Andhadhun',
       duration: 3,
     },
     {
       name: 'Ghoomar',
       genre: 'Traditional',
       release_year: 2018,
       artist: 'Shreya Ghoshal',
       album: 'Padmaavat',
       duration: 3,
     },
     {
       name: 'Bekhayali',
       genre: 'Rock',
       release_year: 2019,
       artist: 'Sachet Tandon',
       album: 'Kabir Singh',
       duration: 6,
     },
     {
       name: 'Hawa Banke',
       genre: 'Romantic',
       release_year: 2019,
       artist: 'Darshan Raval',
       album: 'Hawa Banke (Single)',
       duration: 3,
     },
     {
       name: 'Ghungroo',
       genre: 'Dance',
       release_year: 2019,
       artist: 'Arijit Singh',
       album: 'War',
       duration: 5,
     },
     {
       name: 'Makhna',
       genre: 'Hip-Hop',
       release_year: 2019,
       artist: 'Tanishk Bagchi',
       album: 'Drive',
       duration: 3,
     },
     {
       name: 'Tera Ban Jaunga',
       genre: 'Romantic',
       release_year: 2019,
       artist: 'Tulsi Kumar',
       album: 'Kabir Singh',
       duration: 3,
     },
     {
       name: 'First Class',
       genre: 'Dance',
       release_year: 2019,
       artist: 'Arijit Singh',
       album: 'Kalank',
       duration: 4,
     },
     {
       name: 'Kalank Title Track',
       genre: 'Romantic',
       release_year: 2019,
       artist: 'Arijit Singh',
       album: 'Kalank',
       duration: 5,
     },
   ];
 //SERVER RUNNING 
 app.get("/seed_db", async (req, res) => {
   try {
     await Sequelize.sync({ force: true });
     await User.create({
       username: "testuser",
       email: "test@gmail.com",
       password: "testuser",
     });
     await Track.bulkCreate(movieData);
 
     return res.status(200).json({ message: "Database seeded successfully" });
   } catch (error) {
     return res.status(500).json({ message: "Error seeding the data", error: error.message });
   }
 });


 //Exercise 1: Like a Track
 async function likeTrack(userId, trackId) {
     let likeData = await Like.create({
       userId: userId,
       trackId: trackId,
     });
     return { message: "Track Liked Successfully", likeData };
   }

 app.get("/users/:id/like", async (req, res) => {
     try {
       let userId = req.params.id;  
       let trackId = req.query.trackId;
       let response = await likeTrack(userId, trackId);
       return res.status(200).json(response);
     } catch (error) {
       res.status(500).json({ error: error.message , message: "Error liked the track" });
     }
});
//Exercise 2: Dislike a Track
async function dislikeTrack(userId, trackId) {
     let likeData = await Like.findOne({
       where: {
         userId: userId,
         trackId: trackId,
       },
     });
     if(likeData === 0) return {};


     return {message: "Track disliked"};
     
}
app.get("/users/:id/dislike", async (req, res) => {
     try {
       let userId = req.params.id;  
       let trackId = req.query.trackId;
       let response = await dislikeTrack(userId, trackId);
       if(!response.message){
           return res.status(404).json({ message: "This Track is not in your liked list." });
       }
       return res.status(200).json(response);
     } catch (error) {
       res.status(500).json({ error: error.message , message: "Error disliked the track" });
     }
});

// Exercise 3: Get All Liked Tracks
async function getAllLikedTracks(userId) {
     const trackIds = await Like.findAll({
         where: { userId },
         attributes: ['trackId'],
     });
 
     let trackRecords = [];
     for (let i = 0; i < trackIds.length; i++) {
         trackRecords.push(trackIds[i].trackId);
     }
 
     let likedTracks = await Track.findAll({
         where: { id: { [Op.in]: trackRecords } },
     });
 
     return { likedTracks };
 }
 
 app.get("/users/:id/liked", async (req, res) => {
     try {
         let userId = req.params.id;
         let { likedTracks } = await getAllLikedTracks(userId);  // Destructure likedTracks from the returned object
         
         if (likedTracks.length === 0) {
             return res.status(404).json({ message: "No liked tracks found." });
         }
 
         return res.status(200).json({ likedTracks });
     } catch (error) {
         res.status(500).json({ error: error.message, message: "Error fetching liked tracks" });
     }
 });
 //Exercise 4: Get All Liked Tracks by Artist
// async function getAllLikedTracksByArtist(userId, artist) {
//      const trackIds = await Like.findAll({
//           where: { userId },
//           attributes: ['trackId'],
//      });
 
//      let trackRecords = [];
//      for (let i = 0; i < trackIds.length; i++) {
//          trackRecords.push(trackIds[i].trackId);
//      }
 
//      let likedTracks = await Track.findAll({
//          where: { id: { [Op.in]: trackRecords },  artist },

//      });

//      return { likedTracks };
//  }
async function getAllLikedTracksByArtist(userId, artist) {
     // Fetch all track IDs liked by the user
     const trackIds = await Like.findAll({
         where: { userId },
         attributes: ['trackId'],
     });
 
     if (trackIds.length === 0) {
         // No liked tracks found for the user
         return { likedTracks: [] };
     }
 
     // Extract track IDs into an array
     const trackRecords = trackIds.map((like) => like.trackId);
 
     // Find all tracks liked by the user filtered by artist
     const likedTracks = await Track.findAll({
         where: {
             id: { [Op.in]: trackRecords },
             artist,
         },
     });
 
     return { likedTracks };
 }
 
 app.get("/users/:id/liked-artist", async (req, res) => {
     try {
         const userId = req.params.id;
         const artist = req.query.artist;
 
         const { likedTracks } = await getAllLikedTracksByArtist(userId, artist);
 
         if (likedTracks.length === 0) {
             return res.status(404).json({ message: "No liked tracks found for the specified artist." });
         }
 
         return res.status(200).json({ likedTracks });
     } catch (error) {
         res.status(500).json({
             error: error.message,
             message: "Error fetching liked tracks by artist",
         });
     }
 });
 



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
