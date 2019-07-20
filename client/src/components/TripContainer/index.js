import React from "react";
import TripItem from "../TripItem";

// Can change to stateful component if need be
function TripContainer() {
    return (
        <React.Fragment>
            <p>Inside TripContainer Component</p>
            <TripItem />
        </React.Fragment>
    );
}

export default TripContainer;