const express = require('express');
const app = express();
const port = 3010;

let movies = [
  { id: 1, title: 'The Shawshank Redemption', director: 'Frank Darabont' },
  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola' },
  { id: 3, title: 'The Dark Knight', director: 'Christopher Nolan' },
  { id: 4, title: 'Pulp Fiction', director: 'Quentin Tarantino' }
];
function getMovies() {
  return movies;
}

function getMovieById(id) {
  return movies.find((movie) => movie.id === parseInt(id));
}


function addMovie(newMovie) {
  let movie = { id: movies.length + 1, ...newMovie };
  movies.push(movie);
  return movie;
}
module.exports = { getMovies, getMovieById, addMovie };


app.get('/', (req, res) => {
 console.log(`Server is running`)
});
app.get("/api/movies", (req, res) => {
  res.json(getMovies());
});
app.get("/api/movies/:id", (req, res) => {
  let id = parseInt(req.params.id);  
  res.json(getMovieById(id));

});
app.post("/api/movies", (req, res) => {
  let newMovie = req.body;
  res.json(addMovie(newMovie));
  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
