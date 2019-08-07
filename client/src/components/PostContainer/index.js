import React from "react";
import PostItem from "../PostItem";

// Can change to stateful component if need be
function PostContainer(props) {
    console.log(props);

    return (
        <div className="container">
            <div className="row">
                {props.page === "Dashboard"}
                {/* Display each trip from results */}
                {props.results.length > 0
                    ? props.results.map(trip => <PostItem {...props} key={trip._id} trip={trip} db={props.db} />)
                    : <div className="col-md-12">{props.results.length === 0 ? <strong>"You haven't posted anything yet"</strong> : "Manage your posts"}</div>}
            </div>
        </div>
    );
}

export default PostContainer;