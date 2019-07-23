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
    modalShow: false
  }

  showModal = () => this.setState({ modalShow: true });

  hideModal = () => this.setState({ modalShow: false });

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
        <button className="btn btn-light" onClick={this.showModal} >Modal</button>
        <TripModal
          show={this.state.modalShow}
          onHide={this.hideModal}
        />

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
