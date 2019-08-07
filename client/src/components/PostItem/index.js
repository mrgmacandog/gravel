import React from "react";
import moment from "moment";
import "./style.css";

// Can change to stateful component if need be
function PostItem(props) {

    // console.log(props.trip);

    return (
        <div className="col-md-6">
            <div className="card post-item">
                {props.trip._id !== props.modifiedPost._id ? (
                    <React.Fragment>
                        <h5 className="card-header">
                            <strong>{props.trip.start_location} <i class="fas fa-arrow-right"></i> {props.trip.end_location}</strong>
                                {/* {props.db === "drivers" ? " Driver" : " Rider"} */}
                            <i class="fas fa-edit" onClick={() => props.toggleModify(props.trip)}></i>
                            <i class="fas fa-trash" onClick={() => props.deleteTrip(props.db, props.trip._id)}></i>
                        </h5>
                        <div className="card-body">
                            <p className="card-title">
                                <strong>{moment(props.trip.leaving_date).format("MMMM Do YYYY")}</strong>
                            </p>
                            <p className="card-text">
                                {props.trip.flexible_date
                                    ? <span className="badge badge-pill badge-success">Date Flexible</span>
                                    : <span className="badge badge-pill badge-danger">Date Not Flexible</span>}
                            </p>
                            <p className="card-text"><strong>{props.db === "riders" ? "Price Offered: " : "Price Requested: "}</strong>${props.trip.cost}</p>
                            <p className="card-text"><strong>{props.db === "riders" ? "Seats Requested: " : "Seats Available: "}</strong>{props.trip.seats_available}</p>
                            <p className="card-text">
                                {props.trip.smoking
                                    ? <span className="badge badge-pill badge-success">Smoking</span>
                                    : <span className="badge badge-pill badge-danger">No Smoking</span>}
                                {props.trip.luggage
                                    ? <span className="badge badge-pill badge-success">{props.db === "riders" ? "Luggage" : "Luggage Space"}</span>
                                    : <span className="badge badge-pill badge-danger">{props.db === "riders" ? "No Luggage" : "No Luggage Space"}</span>}
                            </p>
                            <p className="card-text">{props.trip.comment ? props.trip.comment : "No comment"}</p>
                            <p className="card-text"><strong></strong>
                                {props.trip.driver === true ? props.trip.rider_id : props.trip.driver_id}
                            </p>

                        </div>
                    </React.Fragment>
                ) : (
                    // Everything below is rendered when a user clicks the edit button
                    <form>
                        <h5 className="card-header">
                            <input
                                // className="form-control"
                                id="start_location"
                                name="start_location"
                                type="text"
                                value={props.modifiedPost.start_location}
                                onChange={props.handleInputChange}
                            />
                            &nbsp;<i class="fas fa-arrow-right"></i>&nbsp;
                            <input
                                // className="form-control"
                                id="end_location"
                                name="end_location"
                                type="text"
                                value={props.modifiedPost.end_location}
                                onChange={props.handleInputChange}
                            />
                            
                            {/* {props.db === "drivers" ? " Driver" : " Rider"} */}
                            <i class="fas fa-check" onClick={() => props.updateTrip(props.db, props.trip._id)}></i>
                        </h5>
                        <div className="card-body">
                            <p className="card-title">
                                <input
                                    // className="form-control"
                                    id="leaving_date"
                                    name="leaving_date"
                                    type="date"
                                    value={props.modifiedPost.leaving_date}
                                    onChange={props.handleInputChange}
                                />
                            </p>
                            <p className="card-text">
                                {props.modifiedPost.flexible_date ? (
                                    <select name="flexible_date" onChange={props.handleInputChange}>
                                        <option value="true" label="Date Flexible"></option>
                                        <option value="false" label="Date Not Flexible"></option>
                                    </select>
                                ) : (
                                    <select name="flexible_date" onChange={props.handleInputChange}>
                                        <option value="false" label="Date Not Flexible"></option>
                                        <option value="true" label="Date Flexible"></option>
                                    </select>
                                )}
                            </p>
                            <p className="card-text"><strong>{props.db === "riders" ? "Price Offered: " : "Price Requested: "}</strong>
                                <input
                                    // className="form-control"
                                    id="cost"
                                    name="cost"
                                    type="number"
                                    value={props.modifiedPost.cost}
                                    onChange={props.handleInputChange}
                                />
                            </p>
                            <p className="card-text"><strong>{props.db === "riders" ? "Seats Requested: " : "Seats Available: "}</strong>
                                <input
                                    // className="form-control"
                                    id="seats_available"
                                    name="seats_available"
                                    type="number"
                                    value={props.modifiedPost.seats_available}
                                    onChange={props.handleInputChange}
                                />
                            </p>
                            <p className="card-text">
                                {props.modifiedPost.smoking ? (
                                    <select name="smoking" onChange={props.handleInputChange}>
                                        <option value="true" label="Smoking"></option>
                                        <option value="false" label="No Smoking"></option>
                                    </select>
                                ) : (
                                    <select name="smoking" onChange={props.handleInputChange}>
                                        <option value="false" label="No Smoking"></option>
                                        <option value="true" label="Smoking"></option>
                                    </select>
                                )}

                                {props.db === "riders" ? (
                                    props.modifiedPost.luggage ? (
                                        <select name="luggage" onChange={props.handleInputChange}>
                                            <option value="true" label="Luggage"></option>
                                            <option value="false" label="No Luggage"></option>
                                        </select>
                                    ) : (
                                        <select name="luggage" onChange={props.handleInputChange}>
                                            <option value="false" label="No Luggage"></option>
                                            <option value="true" label="Luggage"></option>
                                        </select>
                                    )
                                ) : (
                                    props.modifiedPost.luggage ? (
                                        <select name="luggage" onChange={props.handleInputChange}>
                                            <option value="true" label="Luggage Space"></option>
                                            <option value="false" label="No Luggage Space"></option>
                                        </select>
                                    ) : (
                                        <select name="luggage" onChange={props.handleInputChange}>
                                            <option value="false" label="No Luggage Space"></option>
                                            <option value="true" label="Luggage Space"></option>
                                        </select>
                                    )
                                )}
                            </p>
                            <p className="card-text">
                                <input
                                    // className="form-control"
                                    id="comment"
                                    name="comment"
                                    type="text"
                                    value={props.modifiedPost.comment}
                                    onChange={props.handleInputChange}
                                    placeholder="Optional comment"
                                />
                            </p>
                            <p className="card-text"><strong></strong>
                                {props.modifiedPost.driver === true ? props.trip.rider_id : props.trip.driver_id}
                            </p>

                        </div>
                    </form>
                )}
                

                
            </div>
        </div>
    );
}

export default PostItem;