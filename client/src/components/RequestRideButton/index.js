import React from "react";
import { Link } from "react-router-dom";

// Can change to stateful component if need be
function RequestRideButton() {
    return (
        <Link to="/driver-post" className="btn btn-primary">Offer a ride!</Link>
    );
}

export default RequestRideButton;