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

            <div className="row">
                {props.results.length > 0
                    ? props.results.map(trip => <TripItem {...props} key={trip._id} trip={trip} />)
                    : <div className="col-md-12">{props.page === "Driver" ? "No riders found. Offer a ride up top!" : "No drivers found. Request a ride up top!"}</div>}
            </div>
        </div>
    );
}

export default TripContainer;