const { getMovies, getMovieById, addMovie } = require("../index.js");
describe("Movies Function", () => {
  it("should get all movies", () => {
    let movies = getMovies();
    expect(movies.length).toBe(4); 
    expect(movies).toEqual([
      { id: 1, title: "The Shawshank Redemption", director: "Frank Darabont" },
      { id: 2, title: "The Godfather", director: "Francis Ford Coppola" },
      { id: 3, title: "The Dark Knight", director: "Christopher Nolan" },
      { id: 4, title: "Pulp Fiction", director: "Quentin Tarantino" },
    ]);
  });
  it("should get a movie by id", () => {
    let movie = getMovieById(2);
    expect(movie).toEqual({ 
      id: 2, 
      title: "The Godfather", 
      director: "Francis Ford Coppola" 
    });
  });
   it("should return undefind for a non-existant movie" , ()=>{
     let movie = getMovieById(55);
     expect(movie).toBeUndefined();
     });

  it("should add a new movie", () => {
    let newMovie = { title: "Inception", director: "Christopher Nolan" };
    let addedMovie = addMovie(newMovie);
    
    expect(addedMovie).toEqual({
      id: 5,
      title: "Inception",
      director: "Christopher Nolan"
    });
    const movies = getMovies();
    expect(movies.length).toBe(5); 
  });
});