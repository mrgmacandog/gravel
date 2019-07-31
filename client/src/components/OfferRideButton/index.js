import React from "react";
import { Link } from "react-router-dom";

// Can change to stateful component if need be
function OfferRideButton(props) {
    return (
        <Link to={props.loggedIn ? "/driver-post" : "/signin"} className="btn btn-primary">Offer a ride!</Link>
    );
}

export default OfferRideButton;