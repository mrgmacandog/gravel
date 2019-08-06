import React from "react";
import RequestRideButton from "../RequestRideButton";
import OfferRideButton from "../OfferRideButton";
import { Link } from "react-router-dom";
import { PromiseProvider } from "mongoose";
import "./style.css"


function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/home" className="btn btn-primary">Gravel</Link>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/dashboard" className="btn btn-primary">Dashboard</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    {props.path.pathname === "/driver" ? <OfferRideButton loggedIn={props.loggedIn} /> : null}
                </li>
                <li className="nav-item">
                    {props.path.pathname === "/rider" ? <RequestRideButton loggedIn={props.loggedIn} /> : null}
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;