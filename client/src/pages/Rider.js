import React from "react";
import TripContainer from "../components/TripContainer";

// Can change to stateful component if need be
function Rider() {
    return (
        <React.Fragment>
            <p>Inside Rider Component</p>
            {/* TODO: Send TripContainer the data from Drivers table */}
            <TripContainer page={"Rider"}/>
        </React.Fragment>
    );
}

export default Rider;