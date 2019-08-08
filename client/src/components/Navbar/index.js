import React from "react";
import RequestRideButton from "../RequestRideButton";
import OfferRideButton from "../OfferRideButton";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar(props) {
    return (
        <nav className="navbar navbar-fixed">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="navbar-brand">Gravel</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <div className="btn-group">
                    <Link to="/dashboard" className="btn btn-primary">Dashboard</Link>
                    {props.path.pathname === "/driver" ? <OfferRideButton loggedIn={props.loggedIn} /> : null}
                    {props.path.pathname === "/rider" ? <RequestRideButton loggedIn={props.loggedIn} /> : null}
                    {/* {props.loggedIn === true ? `Weclome, ` : <Link to="/signin" className="btn btn-primary">Log In</Link>} */}
                    {props.loggedIn === true ? null : <Link to="/signup" className="btn btn-primary">Sign up</Link>}
                    {props.loggedIn === true ? <button className="btn btn-primary" onClick={props.loggedOut}>{props.user}, log out</button> : <Link to="/signin" className="btn btn-primary">Log In</Link>}
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;