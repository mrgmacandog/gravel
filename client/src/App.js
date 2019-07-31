import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import Nav from "./components/Nav";
import TripModal from "./components/TripModal";
import axios from "axios";
import API from "./utils/API";


// Pages
import Driver from "./pages/Driver";
import DriverPost from "./pages/DriverPost";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Rider from "./pages/Rider";
import RiderPost from "./pages/RiderPost";
import Signup from "./pages/Signup";
import Dashboard from "./pages/dashboard";

class App extends Component {
  state = {
    loggedIn: false,
    user: null,
    modalShow: false,
    modalTrip: {},
    startLocation: "",
    endLocation: "",
    currentCity: "",
    results: [],
    redirect: null

    // TODO: Remove this. Test results, uncomment this and comment the results above
    // results: [
    //   {
    //     "_id": "56mjh2cxfd",
    //     "driver_id": 1,
    //     "start_location": "Seattle",
    //     "end_location": "Los Angeles",
    //     "leaving_date": "2019-07-25",
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
    //     "leaving_date": "2019-07-26",
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
  showModal = (trip) => {
    // console.log(trip, this.state.modalTrip);
    this.setState({ modalShow: true, modalTrip: trip });
  };
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
      .then(results => this.setState({ results: results }))
      .catch(err => console.log(err));
  }

  // Takes in the location input name and sets that state to the currentCity state
  useCurrentLocation = name => {
    this.setState({ [name]: this.state.currentCity });
  }

  componentDidMount() {
    // Get the current city from coordinates and save it as currentCity in state
    navigator.geolocation.getCurrentPosition(location => {
      API.getCurrentCity(`${location.coords.latitude},${location.coords.longitude}`)
        .then(response => this.setState({ currentCity: response.data.components.locality }))
        .catch(err => console.log(err));
    });
  }

  _logout = (event) => {
    event.preventDefault()
    console.log('logging out')
    axios.post('/auth/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null,
          id: null,
          redirect: null
        })
        let redirectPage = <Redirect to={{ pathname: '/' }} /> 
        alert('Logged out!')
        return redirectPage;
        
      }
    })
  }

  loginState = (user, id) =>  this.setState({
    	loggedIn: true,
    	user: user,
      id: id,
      redirect: '/'
      });

  render() {
    let redirect = "";
    if (this.state.redirect) {
      redirect = <Redirect to={{ pathname: this.state.redirect }} /> 
    } 
    return (
        <Router>
          {redirect}

          {/* Temporary website navigation               */}
          {/* TODO: Delete after all pages are navigable */}
          {/* ****************************************** */}
          <div style={{ backgroundColor: "black", display: "flex", justifyContent: "space-around" }}>
            <Link to="/home">/home</Link>
            <Link to="/driver">/driver</Link>
            {( this.state.loggedIn ? 
            <Link to="/driver-post">/driver-post</Link>
            : null )}
            <Link to="/rider">/rider</Link>
            {( this.state.loggedIn ?
            <Link to="/rider-post">/rider-post</Link>
            : null )}
            {( !this.state.loggedIn ?
            <Link to="/signin">/signin</Link>
            : null )}
            {( !this.state.loggedIn ?
            <Link to="/signup">/signup</Link>

            : null )}

            <Link to="/dashboard">/dashboard</Link>

            <h1>{(this.state.loggedIn ? `Weclome, ${this.state.user}` : "Not logged in")}</h1>
          </div>
          <Nav />
          {/* ***************************************** **/}

          {/* Modal Test */}
          {/* TODO: Delete button when everything is working */}
          {/* <button className="btn btn-light" onClick={this.showModal} >Modal</button> */}
          <TripModal
            show={this.state.modalShow}
            onHide={this.hideModal}
            trip={this.state.modalTrip}
          />

          {/* React router. TODO: May need to place everything above into the respective page. */}
          <div>
            <Route exact path="/" render={(props) =>
              <Home
                {...props}
                state={this.state}
                handleInputChange={this.handleInputChange}
                useCurrentLocation={this.useCurrentLocation}
              />}
            />
            <Route exact path="/home" render={(props) =>
              <Home
                {...props}
                state={this.state}
                handleInputChange={this.handleInputChange}
                useCurrentLocation={this.useCurrentLocation}
              />}
            />
            <Route exact path="/driver" render={(props) =>
              <Driver
                {...props}
                state={this.state}
                handleInputChange={this.handleInputChange}
                getRiders={this.getRiders}
                showModal={this.showModal}
                useCurrentLocation={this.useCurrentLocation}
              />}
            />
            <Route exact path="/driver-post" component={DriverPost} />
            <Route exact path="/rider" render={(props) =>
              <Rider
                {...props}
                state={this.state}
                handleInputChange={this.handleInputChange}
                getDrivers={this.getDrivers}
                showModal={this.showModal}
                useCurrentLocation={this.useCurrentLocation}
              />}
            />
            <Route exact path="/rider-post" component={RiderPost} />
            <Route exact path="/signin" component={() =>
              <Signin onLogin={this.loginState} />}
            />
            <Route exact path="/signup" component={() => <Signup onLogin={this.loginState} />} />

            <h1> {(this.state.loggedIn ? 
            <button onClick={this._logout}>Logout</button>
            : null )}
            </h1>

            
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </Router>

    );
  }
}

export default App;
