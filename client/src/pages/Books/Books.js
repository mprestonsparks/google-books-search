import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import ViewBtn from "../../components/ViewBtn";
import SaveBtn from "../../components/SaveBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Books extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBooks();
  }

  // Loads all books  and sets them to this.state.books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      console.log("here")
      API.searchBooks({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search the Google Books API</h1>
              <h2>using React</h2>
            </Jumbotron>
            <form>
              <h3>Book Search</h3>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title of book"
              />
              {/* <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              /> */}
              <FormBtn
                // Comment on next line is in case search by author needed
                disabled={!(this.state.title)} // && this.state.author)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>

            <h1>Results</h1>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                        <Row>
                          <Col size="md-9">
                            <a href={"/books/" + book._id}>
                            <strong>
                              {book.title} by {book.author}
                            </strong>
                            </a>
                          </Col>
                          <Col size="md-3">
                            <ViewBtn onClick={() => this.viewBook(book._id)} />
                            <SaveBtn onClick={() => this.saveBook(book._id)} />
                            {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                            {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                          </Col>
                        </Row>
                        <Row>
                          <Col size="md-12">
                            <Row>
                              <Col size="md-3">
                                <img src="https://placehold.it/200">
                                </img>
                              </Col>
                              <Col size="md-9">
                              <p>
                              Description description description Description description description 
                              description description description Description description description 
                              description description description Description description description 
                              </p>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
