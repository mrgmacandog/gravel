import React from "react";
import { Link } from "react-router-dom";

// Can change to stateful component if need be
function OfferRideButton() {
    return (
        <Link to="/rider-post" className="btn btn-primary">Request a ride!</Link>
    );
}

export default OfferRideButton;