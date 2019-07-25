import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import TripModal from "./components/TripModal";
import axios from "axios"


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
    endLocation: "",
    // results: []

    // Test results, uncomment this and comment the results above
    // results: [
    //   {
    //     "_id": "56mjh2cxfd",
    //     "driver_id": 1,
    //     "start_location": "Seattle",
    //     "end_location": "Los Angeles",
    //     "leaving_date" : "2019-07-25",
    //     "flexible_date": false,
    //     "cost": 50,
    //     "seats_available": 2,
    //     "smoking": true,
    //     "luggage": true,
    //     "comment": "Road trip!!!"
    //   },
    //   {
    //     "_id": "tj4n83ar45",
    //     "driver_id": 2,
    //     "start_location": "Seattle",
    //     "end_location": "Portland",
    //     "leaving_date" : "2019-07-26",
    //     "flexible_date": true,
    //     "cost": 20,
    //     "seats_available": 2,
    //     "smoking": false,
    //     "luggage": false,
    //     "comment": "Dogs welcome!"
    //   }
    // ]
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

  // Get all riders for Driver component
  getRiders = event => {
    event.preventDefault();
    this.getResults("riders");
  };

  // Get all drivers for Rider component
  getDrivers = event => {
    event.preventDefault();
    this.getResults("drivers");
  }

  getResults = driversOrRiders => {
    alert(`Getting ${driversOrRiders} going from ${this.state.startLocation} to ${this.state.endLocation === "" ? "anywhere" : this.state.endLocation}`);

    // TODO: Check if query matches API routes

    let query = `api/${driversOrRiders}/`;

    this.state.endLocation === ""
      ? query += `${this.state.startLocation.toLowerCase().replace(" ", "%20")}`
      : query += `${this.state.startLocation.toLowerCase().replace(" ", "%20")}/${this.state.endLocation.toLowerCase().replace(" ", "%20")}`

    alert(query);
    // Maybe in ./utils/API.js 
    axios.get(query)
      .then(results => this.setState({ results: results}))
      .catch(err => console.log(err));
  }

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
          <Route exact path="/" render={(props) => <Home {...props} state={this.state} handleInputChange={this.handleInputChange} />} />
          <Route exact path="/home" render={(props) => <Home {...props} state={this.state} handleInputChange={this.handleInputChange} />} />
          <Route exact path="/driver" render={(props) => <Driver {...props} state={this.state} handleInputChange={this.handleInputChange} getRiders={this.getRiders} />} />
          <Route exact path="/driver-post" component={DriverPost} />
          <Route exact path="/rider" render={(props) => <Rider {...props} state={this.state} handleInputChange={this.handleInputChange} getDrivers={this.getDrivers} />} />
          <Route exact path="/rider-post" component={RiderPost} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>

    );
  }
}

export default App;
