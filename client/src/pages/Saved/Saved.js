import React from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedBooks: []
        }
    }

    componentWillMount() {
        API.getBooks().then(
            (response) => {
                this.setState({savedBooks: response.data});
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }
    render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-12">
                <h1>Saved Books</h1>

                    {this.state.savedBooks.length ? (
                    <List>
                        {this.state.savedBooks.map(book => {
                        return (
                            <ListItem key={book._id}>
                                <Row>
                                <Col size="md-9">
                                    <a href={"/saved/" + book._id}>
                                    <strong>
                                    {book.title} by {book.author}
                                    </strong>
                                    </a>
                                </Col>
                                {/* <Col size="md-3"> */}
                                    {/* <ViewBtn onClick={() => this.viewBook(book._id)} /> */}
                                    {/* <SaveBtn onClick={() => this.saveBook(book._id)} /> */}
                                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                                {/* </Col> */}
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

export default Saved;