import React from "react";
import RequestRideButton from "../RequestRideButton";
import OfferRideButton from "../OfferRideButton";
import TripItem from "../TripItem";

// Can change to stateful component if need be
function TripContainer(props) {
    return (
        <div className="container">
            <p>Inside TripContainer Component</p>

            {/* Show RequestRideButton if the user is on the driver page,
                    otherwise show the OfferRideButton  */}
            {props.page === "Driver" ? <RequestRideButton /> : <OfferRideButton />}

            {/* TODO: Refactor with Array.map() */}
            <TripItem />
            <TripItem />
            <TripItem />
            <TripItem />
        </div>
    );
}

export default TripContainer;