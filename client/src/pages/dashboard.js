import React from "react";
import PostContainer from "../components/PostContainer";
import API from "../utils/API";

// Can change to stateful component if need be
class Dashboard extends React.Component {
  // Removes a trip from database
  deleteTrip = (db, id) => {
    // If the trip is from the drivers db
    if (db === "drivers") {
      API.deleteDriver(id)
        .then(results => {
          this.props.getDriverPost(id);
          this.props.getRiderPost(id);
          console.log(results);
        })
        .catch(err => console.log(err));
    } else {  // If the trip is from the riders db
      API.deleteRider(id)
        .then(results => {
          this.props.getDriverPost(id);
          this.props.getRiderPost(id);
          console.log(results);
        })
        .catch(err => console.log(err));
    }
  }

  componentDidMount(){
    const {getDriverPost, id, getRiderPost} = this.props
    getDriverPost(id);
    getRiderPost(id);
  }

  render(){
    // console.log(props);
  return (

    <React.Fragment>
      {/* TODO: Send TripContainer the data from Riders table */}
      <PostContainer
        page={"Dashboard"}
        loggedIn={this.props.state.loggedIn}
        results={this.props.state.results}
        db="drivers"
        deleteTrip={this.deleteTrip}
      />
      <PostContainer
        page={"Dashboard"}
        loggedIn={this.props.state.loggedIn}
        results={this.props.state.riderPost}
        db="riders"
        deleteTrip={this.deleteTrip}
      />
    </React.Fragment>
  );
  }
}

export default Dashboard;