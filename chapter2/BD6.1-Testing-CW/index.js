let express = require("express");
let {getBooks,getBookById,addBook} = require("./book");
let app = express();


app.use(express.json());

app.get("/api/books",(req ,res)=>{
     res.json(getBooks());
})
app.get("/api/books/:id",(req ,res)=>{
     let id = parseInt(req.params.id);
     res.json(getBookById(id));
})
app.post("/api/books",(req ,res)=>{
     let book = req.body;
     res.json(addBook(book));
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});