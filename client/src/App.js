import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Nav from "./components/Nav";
import axios from "axios"
// import API from "./utils/API";


// Pages
import Driver from "./pages/Driver";
import DriverPost from "./pages/DriverPost";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Rider from "./pages/Rider";
import RiderPost from "./pages/RiderPost";
import Signup from "./pages/Signup";

class App extends Component {

    constructor(props) {
      super(props)
      this.state = {
        loggedIn: false,
        user: null
      }
      this._logout = this._logout.bind(this)
      this._login = this._login.bind(this)
    }
    componentDidMount() {
      axios.get('/auth/user').then(response => {
        console.log(response.data)
        if (!!response.data.user) {
          console.log('THERE IS A USER')
          this.setState({
            loggedIn: true,
            user: response.data.user
          })
        } else {
          this.setState({
            loggedIn: false,
            user: null
          })
        }
      })
    }
  
    _logout(event) {
      event.preventDefault()
      console.log('logging out')
      axios.post('/auth/logout').then(response => {
        console.log(response.data)
        if (response.status === 200) {
          this.setState({
            loggedIn: false,
            user: null
          })
        }
      })
    }
  
    _login(username, password) {
      axios
        .post('/auth/login', {
          username,
          password
        })
        .then(response => {
          console.log(response)
          if (response.status === 200) {
            // update the state
            this.setState({
              loggedIn: true,
              user: response.data.user
            })
          }
        })
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

        
        
        {/* React router. TODO: May need to place everything above into the respective page. */}
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/driver" component={Driver} />
          <Route exact path="/driver-post" component={DriverPost} />
          <Route exact path="/rider" component={Rider} />
          <Route exact path="/rider-post" component={RiderPost} />
            <Route exact path="/signin" component={() => <Signin login={this._login} />} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>

    );
  }
}

export default App;
