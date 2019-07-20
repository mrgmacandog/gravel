import React from "react";
import { Link } from "react-router-dom";
import TripItem from "../TripItem";

// Can change to stateful component if need be
function TripContainer() {
    return (
        <div className="container">
            <p>Inside TripContainer Component</p>

            {/* TODO: Depending on state, make this "Request a ride!" for  */}
            <Link to="/driver-post" className="btn btn-primary">Offer a ride!</Link>

            {/* TODO: Refactor with Array.map() */}
            <TripItem />
            <TripItem />
            <TripItem />
            <TripItem />
        </div>
    );
}

export default TripContainer;