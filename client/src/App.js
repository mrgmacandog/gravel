import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import TripModal from "./components/TripModal";


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
    modalShow: false,
    startLocation: "",
    endLocation: ""
  }

  // Shows modal
  showModal = () => this.setState({ modalShow: true });
  // Hides modal
  hideModal = () => this.setState({ modalShow: false });

  // Handle input change
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
        <Nav />
        {/* ***************************************** **/}

        {/* Modal Test */}
        {/* TODO: Move this into each TripItem */}
        <button className="btn btn-light" onClick={this.showModal} >Modal</button>
        <TripModal
          show={this.state.modalShow}
          onHide={this.hideModal}
        />

        {/* React router. TODO: May need to place everything above into the respective page. */}
        <div>
          <Route exact path="/" render={(props) => <Home {...props} state={this.state} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />} />
          <Route exact path="/home" render={(props) => <Home {...props} state={this.state} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />} />
          <Route exact path="/driver" render={(props) => <Driver {...props} state={this.state} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />} />
          <Route exact path="/driver-post" component={DriverPost} />
          <Route exact path="/rider" render={(props) => <Rider {...props} state={this.state} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />} />
          <Route exact path="/rider-post" component={RiderPost} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>

    );
  }
}

export default App;
