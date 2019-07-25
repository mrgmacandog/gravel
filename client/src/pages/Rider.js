import React from "react";
import TripContainer from "../components/TripContainer";
import Input from "../components/Input";

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
                            <Input
                                name="startLocation"
                                value={props.state.startLocation}
                                onChange={props.handleInputChange}
                                placeholder="Enter the departure city or use current location"
                            />
                        </div>
                        <div className="col-md-6">
                            <Input
                                name="endLocation"
                                value={props.state.endLocation}
                                onChange={props.handleInputChange}
                                placeholder="Enter the destination (optional)"
                            />
                        </div>
                    </div>

                    <button className="btn btn-primary" type="submit" name="action" onClick={props.getRiders}>Search</button>
                </form>
            </div>
            {/* TODO: Send TripContainer the data from Drivers table */}
            <TripContainer page={"Rider"}/>
        </React.Fragment>
    );
}

export default Rider;