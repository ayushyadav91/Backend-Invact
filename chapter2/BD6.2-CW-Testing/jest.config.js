let express = require("express");
let app = express();

app.use(express.json());

let authors = [
     { authorId: 1, name: 'George Orwell', book: '1984' },
     { authorId: 2, name: 'Aldous Huxley', book: 'Brave New World' },
     { authorId: 3, name: 'Ray Bradbury', book: 'Fahrenheit 451' }
];

app.get("/authores", (req ,res)=>{
     res.json(getAuthors());
})
app.get("authors/detaild/:id", (req ,res)=>{
     
})