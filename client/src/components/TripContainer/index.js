import React from "react";
import RequestRideButton from "../RequestRideButton";
import OfferRideButton from "../OfferRideButton";
import TripItem from "../TripItem";

// Can change to stateful component if need be
function TripContainer(props) {
    return (
        <div className="container">
            {/* Show RequestRideButton if the user is on the driver page,
                    otherwise show the OfferRideButton  */}
            {props.page === "Driver" ? <OfferRideButton loggedIn={props.loggedIn} /> : <RequestRideButton loggedIn={props.loggedIn} />}

            {/* Display each trip from results */}
            {props.results.map(trip => <TripItem {...props} key={trip._id} trip={trip} />)}
        </div>
    );
}

export default TripContainer;