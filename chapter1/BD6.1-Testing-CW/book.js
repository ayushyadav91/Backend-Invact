let books = [
     {id:1,title:"1984", author:"George Orwell"},
     {id:2,title:"The Great Gatsby", author:"F. Scott Fitzgerald"},
     {id:3,title:"The Catcher in the Rye", author:"J.D. Salinger"},
     {id:4,title:"The Lord of the Rings", author:"J.R.R. Tolkien"},

];
function getBooks(){
     return books;
}
function getBookById(id){
     return books.find((book) => book.id === id);
}
function addBook(book){
     let newBook = {id:books.length+1,...book};
     books.push(newBook);
     return newBook;
}

module.exports = {getBooks,getBookById,addBook};