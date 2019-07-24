import React from "react";
import TripContainer from "../components/TripContainer";

// Can change to stateful component if need be
// Can access state with props.state
// Can handle input change with props.handleInputChange
function Rider(props) {
    return (
        <React.Fragment>
            <p>Inside Rider Component</p>
            {/* TODO: Send TripContainer the data from Drivers table */}
            <TripContainer page={"Rider"}/>
        </React.Fragment>
    );
}

export default Rider;