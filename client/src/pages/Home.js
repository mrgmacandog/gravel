// import React from "react";
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import LocationInput from "../components/LocationInput";
import Button from "../components/Button";
import ChoiceButton from "../components/choiceButton";
// import { PostList, PostListItem } from "../components/PostList";
import { Container, Row, Col } from "../components/Grid";
import API from "../utils/API";


// Can change to stateful component if need be
// function Home() {
//     return (
//         <p>Inside Home Component</p>
//     );
// }

// export default Home;

export default function Home(props) {
  // state = {
  //   // posts: [],
  //   // postSearch: ""
  //   startLocation: ""
  // };

  // handleInputChange = event => {
  //   // Destructure the name and value properties off of event.target
  //   // Update the appropriate state
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get posts update the posts state
  //   event.preventDefault();

  //   // API.getPosts(this.state.postSearch)
  //   //   .then(res => this.setState({ posts: res.data }))
  //   //   .catch(err => console.log(err));
  // };

  // onClick() {
  //   window.location.href = "/driver";
  // }
  // render() {
    return (
      <React.Fragment>
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form onSubmit={(event) => event.preventDefault()}>
                <LocationInput
                  name="startLocation"
                  value={props.state.startLocation}
                  onChange={props.handleInputChange}
                  placeholder="Enter the departure city or use current location"
                />
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="sm-6">
              <ChoiceButton
                // onClick={() => window.location.href = "/driver"}
                type="success"
                className="driver-input-lg"
                text="Driver"
                route="/driver"
              >
              </ChoiceButton>
            </Col>
            <Col size="sm-6">
              <ChoiceButton
                // onClick={() => window.location.href = "/rider"}
                type="success"
                className="rider-input-lg"
                text="Rider"
                route={"/rider"}
              >
              </ChoiceButton>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  // }
}