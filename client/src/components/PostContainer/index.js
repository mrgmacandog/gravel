import React from "react";
import PostItem from "../PostItem";

// Can change to stateful component if need be
function PostContainer(props) {
    console.log(props);
    
    return (
        <div className="container">
            {/* Show RequestRideButton if the user is on the driver page,
                    otherwise show the OfferRideButton  */}
            {props.page === "Dashboard"}
            {/* Display each trip from results */}
            {props.results.length > 0
                ? props.results.map(trip => <PostItem {...props} key={trip._id} trip={trip} />)
                : <p>No results found</p>}
        </div>
    );
}

export default PostContainer;