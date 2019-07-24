import React, { Component } from "react";
// import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import PostForm from "../components/PostForm.js";
// import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    posts: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base posts and update this.state.posts
  componentDidMount() {
     }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
   
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Post!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <PostForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            posts={this.state.posts}
          />
          {/* <SearchResults results={this.state.results} /> */}
        </Container>
      </div>
    );
  }
}

export default Search;
