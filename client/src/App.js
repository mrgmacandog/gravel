import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import ButtonDriver from "./components/postWays";
import API from "./utils/API";
import { PostList, PostListItem } from "./components/PostList";
import { Container, Row, Col } from "./components/Grid";

// Pages
import Driver from "./pages/Driver";
import DriverPost from "./pages/DriverPost";
import Home from "./pages/Home";
import Login from "./pages/Login";
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
          <Link to="/login">/login</Link>
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
             <Col size="xs-6 sm-6">
                <ButtonDriver
                  onClick={this}
                  type="success"
                  className="input-lg"
                >
                 Driver
                </ButtonDriver>
            </Col>
            <Col size="xs-6 sm-6">
                <ButtonDriver
                  onClick={this}
                  type="success"
                  className="input-lg"
                >
                 Rider
                </ButtonDriver>
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
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
