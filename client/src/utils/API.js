import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  searchBooks: (title) =>  {
    return axios.post("/search", {title: title});
  },
  // Add a book to the database
  addBook: (title) => {
    return axios.post("/api/books/", title);
  },
  // Delete a book from the database
  deleteBook: (id) => {
    return axios.delete(`/api/books/${id}`);
  }
};
