import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
    id: null,
    modalShow: false,
    modalTrip: {},
    modalStartCoords: {},
    modalEndCoords: {},
    startLocation: "",
    endLocation: "",
    currentCity: "",
    results: []
  }
  
  // Shows modal
  showModal = (trip) => {
    // Initialize coord variables
    let tripStartCoords;
    let tripEndCoords;

    // Get start city's coordinates
    API.getCityCoords(trip.start_location)
      .then(results => {
        tripStartCoords = results.data.geometry;

        // Get end city's coordinates
        API.getCityCoords(trip.end_location)
          .then(results => {
            tripEndCoords = results.data.geometry;

            // Show modal with the start and end coords
            this.setState({
              modalShow: true,
              modalTrip: trip,
              modalStartCoords: tripStartCoords,
              modalEndCoords: tripEndCoords
            });
        })
        .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
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

    alert(`Getting riders going from ${this.state.startLocation === "" ? "anywhere" : this.state.startLocation} to ${this.state.endLocation === "" ? "anywhere" : this.state.endLocation}`);

    if (this.state.startLocation === "") {
      API.getDriver()
        .then(results => this.setState({ results: results.data }))
        .catch(err => console.log(err));
    } else {  // this.state.startLocation !== ""
      if (this.state.endLocation === "") {
        API.getDriverStart(this.state.startLocation)
          .then(results => {
            console.log(results);
            this.setState({ results: results.data });
          })
          .catch(err => console.log(err));
      } else {  // this.state.endLocation !== ""
        API.getDriverStartEnd(this.state.startLocation, this.state.endLocation)
          .then(results => this.setState({ results: results.data }))
          .catch(err => console.log(err));
      }
    }


    // this.getResults("riders");
  };

  // Get all drivers for Rider component
  getDrivers = event => {
    event.preventDefault();

    alert(`Getting drivers going from ${this.state.startLocation === "" ? "anywhere" : this.state.startLocation} to ${this.state.endLocation === "" ? "anywhere" : this.state.endLocation}`);

    if (this.state.startLocation === "") {
      API.getDriver()
        .then(results => this.setState({ results: results.data }))
        .catch(err => console.log(err));
    } else {  // this.state.startLocation !== ""
      if (this.state.endLocation === "") {
        API.getRiderStart(this.state.startLocation)
          .then(results => this.setState({ results: results.data }))
          .catch(err => console.log(err));
      } else {  // this.state.endLocation !== ""
        API.getRiderStartEnd(this.state.startLocation, this.state.endLocation)
          .then(results => this.setState({ results: results.data }))
          .catch(err => console.log(err));
      }
    }

    // this.getResults("drivers");
  }


  // getResults = driversOrRiders => {
  //   alert(`Getting ${driversOrRiders} going from ${this.state.startLocation} to ${this.state.endLocation === "" ? "anywhere" : this.state.endLocation}`);

  //   // TODO: Check if query matches API routes

  //   let query = `api/${driversOrRiders}/`;

  //   this.state.endLocation === ""
  //     ? query += `${this.state.startLocation.toLowerCase().replace(" ", "%20")}`
  //     : query += `${this.state.startLocation.toLowerCase().replace(" ", "%20")}/${this.state.endLocation.toLowerCase().replace(" ", "%20")}`

  //   alert(query);
  //   // Maybe in ./utils/API.js 
  //   axios.get(query)
  //     .then(results => this.setState({ results: results }))
  //     .catch(err => console.log(err));
  // }

  // Takes in the location input name and sets that state to the currentCity state
  useCurrentLocation = name => {
    this.setState({ [name]: this.state.currentCity });
  }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     loggedIn: false,
  //     user: null
  //   }
  //   this._logout = this._logout.bind(this)
  //   this._login = this._login.bind(this)

  // // }
  // componentDidMount() {

  // }
  componentDidMount() {
    // Get the current city from coordinates and save it as currentCity in state
    navigator.geolocation.getCurrentPosition(location => {
      API.getCurrentCity(`${location.coords.latitude},${location.coords.longitude}`)
        .then(response => this.setState({ currentCity: response.data.components.city || response.data.components.locality }))
        .catch(err => console.log(err));
    });
    //   axios.get('/auth/user').then(response => {
    //   console.log('RESPONSE DATA FOR COMPONENTDIDMOUNT:')
    //   console.log(response.data.user)
    //   if (response.data.user) {
    //     console.log('THERE IS A USER')
    //     this.setState({
    //       loggedIn: true,
    //       user: response.data.user
    //     })
    //     console.log(this.state.loggedIn)
    //   } else {
    //     console.log('THERE IS NO USER LOGGED IN')
    //     this.setState({
    //       loggedIn: false,
    //       user: null
    //     })
    //     console.log(this.state.loggedIn)

    //   }
    // })
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
          id: null
        })
        console.log(this.state.loggedIn)
        alert('Logged out!')
      }
    })
  }

  loginState = (user, id) => this.setState({
    loggedIn: true,
    user: user,
    id: id,
    redirect: '/'
  })

  // _login = (username, password, obj) => {
  //   axios.post('/auth/login', {
  //     username,
  //     password
  //   })
  //     .then(response => {
  //       console.log('RESPONSE FROM PASSPORT')
  //       console.log(response.data)
  //       if (response.status === 200) {
  //         // update the state
  //         this.setState({
  //           loggedIn: true,
  //           user: response.data.user.local.username,
  //           id: response.data.user._id
  //         })

  //         // obj.success();
  //       }
  //     }).catch(err => {
  //       if (err) {
  //         console.log(err)
  //         alert(err);
  //       } else {
  //         console.log("Successful sign in")
  //         console.log(this.state)
  //       }
  //     })
  // }
  render() {
    return (
      <Router>
        {/* Temporary website navigation               */}
        {/* TODO: Delete after all pages are navigable */}
        {/* ****************************************** */}
        <div style={{ backgroundColor: "black", display: "flex", justifyContent: "space-around" }}>
          <Link to="/home">/home</Link>
          <Link to="/driver">/driver</Link>
          {(this.state.loggedIn ?
            <Link to="/driver-post">/driver-post</Link>
            : null)}
          <Link to="/rider">/rider</Link>
          {(this.state.loggedIn ?
            <Link to="/rider-post">/rider-post</Link>
            : null)}
          {(!this.state.loggedIn ?
            <Link to="/signin">/signin</Link>
            : null)}
          {(!this.state.loggedIn ?
            <Link to="/signup">/signup</Link>

            : null)}

          <Link to="/dashboard">/dashboard</Link>

          <h1>{(this.state.loggedIn ? `Weclome, ${this.state.user}` : "Not logged in")}</h1>
        </div>
        <Nav />
        {/* ***************************************** **/}

        {/* Modal Test */}
        {/* TODO: Delete button when everything is working */}
        {/* <button className="btn btn-light" onClick={this.showModal} >Modal</button> */}
        <TripModal
          id="modal"
          show={this.state.modalShow}
          onHide={this.hideModal}
          trip={this.state.modalTrip}
          modalStartCoords={this.state.modalStartCoords}
          modalEndCoords={this.state.modalEndCoords}
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
          <Route exact path="/driver-post" render={(props) =>
            <DriverPost
              {...props}
              state={this.state}
              handleInputChange={this.handleInputChange}
              onLogin={this.loginState}
            />}
          />
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
          <Route exact path="/rider-post" render={(props) =>
            <RiderPost
              {...props}
              state={this.state}
              handleInputChange={this.handleInputChange}
              onLogin={this.loginState}
            />}
          />
          <Route exact path="/signin" component={() =>
          <Signin onLogin={this.loginState} />}
          />
          <Route exact path="/signup" component={Signup} />

          <h1> {(this.state.loggedIn ?


            <button onClick={this._logout}>Logout</button>
            : null
          )}
          </h1>
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>

    );
  }
}

export default App;
