// const {describe} = require("@jest/globals");


// describe("Books", () => {
//     test("getBooks should return an array of books", () => {
//         let books = getBooks();
//         expect(Array.isArray(books)).toBe(true);
//     });
//     test("getBookById should return a book with the given id", () => {
//         let book = getBookById(1);
//         expect(book).toEqual({id:1,title:"1984", author:"George Orwell"});
//     });
//     test("addBook should add a new book to the array", () => {
//         let book = {id:5,title:"The Hobbit", author:"J.R.R. Tolkien"};
//         let newBook = addBook(book);
//         expect(newBook).toEqual({id:5,title:"The Hobbit", author:"J.R.R. Tolkien"});
//     });
// }); 

// const {describe, it} = require("node:test");
const {getBooks, getBookById, addBook} = require("../book");
describe("Books Function", () => {
  
     // Test for getBooks function
     it("should get all books", () => {
       let books = getBooks();
       expect(books.length).toBe(4);
       expect(books).toEqual([
         { id: 1, title: "1984", author: "George Orwell" },
         { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
         { id: 3, title: "The Catcher in the Rye", author: "J.D. Salinger" },
         { id: 4, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
       ]);
     });

     it("should get a book by id", () => {
          let book = getBookById(2);
          expect(book).toEqual({ id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" });
        });
     it("should return undefind for a non-existant book" , ()=>{
          let book = getBookById(99);
          expect(book).toBeUndefined();
     });
     
     it("should add a new book", () => {
          let newBook = { title: "To Kill a Mockingbird", author: "Harper Lee" };
          let addedBook = addBook(newBook);
          expect(addedBook).toEqual({
               id: 5,
               title: "To Kill a Mockingbird",   
               author: "Harper Lee",            
             });
          const books = getBooks();
          expect(books.length).toBe(5);
     });

});