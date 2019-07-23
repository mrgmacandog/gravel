import React from "react";
import TripContainer from "../components/TripContainer";

// Can change to stateful component if need be
function Driver() {
    return (
        <React.Fragment>
            <p>Inside Driver Component</p>
            {/* TODO: Send TripContainer the data from Riders table */}
            <TripContainer page={"Driver"}/>
        </React.Fragment>
    );
}

export default Driver;