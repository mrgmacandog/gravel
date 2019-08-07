import React from "react";
import moment from "moment";
import "./style.css";

// Can change to stateful component if need be
function PostItem(props) {

    // console.log(props.trip);

    return (
        <div className="col-md-6">
            <div className="card post-item">
                <h5 className="card-header">
                    <strong>{props.trip.start_location} <i class="fas fa-arrow-right"></i> {props.trip.end_location}</strong>
                        {/* {props.db === "drivers" ? " Driver" : " Rider"} */}
                    <i class="fas fa-trash" onClick={() => props.deleteTrip(props.db, props.trip._id)}></i>
                </h5>
                <div className="card-body">
                    <p className="card-title">
                        <strong>{moment(props.trip.leaving_date).format("MMMM Do YYYY")}</strong>
                    </p>
                    <p calssName="card-text">
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
            </div>
        </div>
    );
}

export default PostItem;