import React from "react";
import FormContainer from "../containers/FormContainer";

// Can change to stateful component if need be
function RiderPost(props) {
  return (
    <div className="row mt-5">
      <div className="col-md-6 m-auto">
        <h3> Make a post </h3>
        <div className="card card-body">
          <FormContainer loggedIn={props.state.loggedIn} userId={props.state.id} />
        </div>
      </div>
    </div>
  );
}

export default RiderPost;
