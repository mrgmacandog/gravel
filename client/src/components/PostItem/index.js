import React from "react";
import moment from "moment";

// Can change to stateful component if need be
function PostItem(props) {

    console.log(props);
    
    return (
        
        // TODO: Implement for /rider. Only works for /driver currently
        <div className="card">
            <h5 className="card-header"><strong>Destination: </strong>{props.trip.end_location}</h5>
            <div className="card-body">
                <h5 className="card-title">
                    <strong>{moment(props.trip.leaving_date).format("MMMM Do YYYY h:mm")}</strong>
                    {props.trip.flexible_date
                        ? <span className="badge badge-pill badge-success">Flexible</span>
                        : <span className="badge badge-pill badge-danger">Not Flexible</span>}
                </h5>
                <p className="card-text"><strong>Trip Cost: </strong>${props.trip.cost}</p>
                <p className="card-text"><strong>Seats Available: </strong>{props.trip.seats_available}</p>

                {props.trip.smoking
                    ? <span className="badge badge-pill badge-success">Smoking</span>
                    : <span className="badge badge-pill badge-danger">No Smoking</span>}
                {props.trip.luggage
                    ? <span className="badge badge-pill badge-success">Luggage Space</span>
                    : <span className="badge badge-pill badge-danger">No Luggage Space</span>}

                <p className="card-text">{props.trip.comment}</p>
            </div>
        </div>
    );
}

export default PostItem;