import React from "react";
import PostItem from "../PostItem";

// Can change to stateful component if need be
function PostContainer(props) {
    // console.log(props);

    return (
        <div className="container">
            <p>{props.db === "drivers" ? "Trips you posted as a driver" : "Trips you posted as a rider"}</p>
            <div className="row">
                {props.page === "Dashboard"}
                {/* Display each trip from results */}
                {props.results.length > 0
                    ? props.results.map(trip => <PostItem {...props} key={trip._id} trip={trip} db={props.db} />)
                    : <p className="col-md-12">No trips yet!</p>}
            </div>
        </div>
    );
}

export default PostContainer;