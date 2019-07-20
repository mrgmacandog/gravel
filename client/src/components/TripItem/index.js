import React from "react";

// Can change to stateful component if need be
function TripItem() {
    return (
        <div className="card">
            <h5 className="card-header">[Destination]</h5>
            <div className="card-body">
                <h5 className="card-title">[Leaving Date] <span className="badge badge-pill badge-danger">Not Flexible</span></h5>
                <p className="card-text">[Cost]</p>
                <p className="card-text">[Number of seats]</p>

                <span className="badge badge-pill badge-danger">No Smoking</span>
                <span className="badge badge-pill badge-success">Luggage Space</span>

                <p className="card-text">[Comments]</p>

                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    );
}

export default TripItem;