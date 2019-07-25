import React from "react";

// Can change to stateful component if need be
function TripItem(props) {
    return (
        // TODO: Implement for /rider. Only works for /driver currently
        <div className="card" onClick={props.showModal}>
            <h5 className="card-header">{props.trip.end_location}</h5>
            <div className="card-body">
                <h5 
                    className="card-title">{props.trip.leaving_date}
                    {props.trip.flexible_date
                        ? <span className="badge badge-pill badge-success">Flexible</span>
                        : <span className="badge badge-pill badge-danger">Not Flexible</span>}
                </h5>
                <p className="card-text">${props.trip.cost}</p>
                <p className="card-text">{props.trip.seats_available}</p>

                {props.trip.smoking
                    ? <span className="badge badge-pill badge-success">Smoking</span>
                    : <span className="badge badge-pill badge-danger">No Smoking</span>}
                {props.trip.luggage
                    ? <span className="badge badge-pill badge-success">Luggage Space</span>
                    : <span className="badge badge-pill badge-danger">No Luggage Space</span>}

                <p className="card-text">{props.trip.comment}</p>

                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    );
}

export default TripItem;