import React from "react";
import TripContainer from "../components/TripContainer";
import LocationInput from "../components/LocationInput";

// Can change to stateful component if need be
// Can access state with props.state
// Can handle input change with props.handleInputChange
function Rider(props) {
    return (
        <React.Fragment>
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <LocationInput
                                name="startLocation"
                                value={props.state.startLocation}
                                onChange={props.handleInputChange}
                                placeholder="Enter the departure city or use current location"
                                useCurrentLocation={props.useCurrentLocation}
                            />
                        </div>
                        <div className="col-md-6">
                            <LocationInput
                                name="endLocation"
                                value={props.state.endLocation}
                                onChange={props.handleInputChange}
                                placeholder="Enter the destination (optional)"
                                useCurrentLocation={props.useCurrentLocation}
                            />
                        </div>
                    </div>

                    <button className="btn btn-primary" type="submit" name="action" onClick={props.getDrivers}>Search</button>
                </form>
            </div>
            {/* TODO: Send TripContainer the data from Drivers table */}
            <TripContainer page={"Rider"} loggedIn={props.state.loggedIn} results={props.state.results} showModal={props.showModal}/>
        </React.Fragment>
    );
}

export default Rider;