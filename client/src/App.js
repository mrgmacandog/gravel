import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import ChoiceButton from "./components/choiceButton";
import API from "./utils/API";
import { PostList, PostListItem } from "./components/PostList";
import { Container, Row, Col } from "./components/Grid";

// Pages
import Driver from "./pages/Driver";
import DriverPost from "./pages/DriverPost";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Rider from "./pages/Rider";
import RiderPost from "./pages/RiderPost";
import Signup from "./pages/Signup";

class App extends Component {
  state = {
    posts: [],
    postSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get posts update the posts state
    event.preventDefault();
    
    API.getPosts(this.state.postSearch)
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Router>
        {/* Temporary website navigation               */}
        {/* TODO: Delete after all pages are navigable */}
        {/* ****************************************** */}
        <div style={{ backgroundColor: "black", display: "flex", justifyContent: "space-around" }}>
          <Link to="/home">/home</Link>
          <Link to="/driver">/driver</Link>
          <Link to="/driver-post">/driver-post</Link>
          <Link to="/rider">/rider</Link>
          <Link to="/rider-post">/rider-post</Link>
          <Link to="/signin">/signin</Link>
          <Link to="/signup">/signup</Link>
        </div>
        {/* ***************************************** **/}

        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="postSearch"
                        value={this.state.postSearch}
                        onChange={this.handleInputChange}
                        placeholder="Enter the departure city or use current location"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.posts.length ? (
                <h3 className="text-center">No posts to Display</h3>
              ) : (
                <PostList>
                  {this.state.posts.map(post => {
                    return (
                      <PostListItem
                        key={post.title}
                        title={post.title}
                        start_location={post.start_location}
                        end_location={post.end_location}
                        leaving_date={post.leaving_date}
                        flexible_date={post.flexible_date}
                        cost={post.cost}
                        seats_available={post.seats_available}
                        smoking={post.smoking}
                        luggage={post.luggage}
                        comments={post.comments}                        
                      />
                    );
                  })}
                </PostList>
              )}
            </Col>
          </Row>
          <Row>
             <Col size="sm-6">
                <ChoiceButton
                  onClick={this}
                  type="success"
                  className="driver-input-lg"
                  text="Driver"
                >
                </ChoiceButton>
            </Col>
            <Col size="sm-6">
                <ChoiceButton
                  onClick={this}
                  type="success"
                  className="rider-input-lg"
                  text="Rider"
                 
                >
                </ChoiceButton>
            </Col>
           </Row>
        </Container>
        
        {/* React router. TODO: May need to place everything above into the respective page. */}
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/driver" component={Driver} />
          <Route exact path="/driver-post" component={DriverPost} />
          <Route exact path="/rider" component={Rider} />
          <Route exact path="/rider-post" component={RiderPost} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
