import React, { Component } from "react";
import TripContainer from "../components/TripContainer";
import LocationInput from "../components/LocationInput";

// Can change to stateful component if need be
// Can access state with this.props.state
// Can handle input change with this.props.handleInputChange
class Driver extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <LocationInput
                                    name="startLocation"
                                    value={this.props.state.startLocation}
                                    onChange={this.props.handleInputChange}
                                    placeholder="Enter the departure city or use current location"
                                    useCurrentLocation={this.props.useCurrentLocation}
                                />
                            </div>
                            <div className="col-md-6">
                                <LocationInput
                                    name="endLocation"
                                    value={this.props.state.endLocation}
                                    onChange={this.props.handleInputChange}
                                    placeholder="Enter the destination (optional)"
                                    useCurrentLocation={this.props.useCurrentLocation}
                                />
                            </div>
                        </div>

                        <button className="btn btn-primary" type="submit" name="action" onClick={this.props.getRiders}>Search</button>
                    </form>
                </div>
                {/* TODO: Send TripContainer the data from Riders table */}
                <TripContainer page={"Driver"} loggedIn={this.props.state.loggedIn} results={this.props.state.results} showModal={this.props.showModal}/>
            </React.Fragment>
        );
    }
}

export default Driver;