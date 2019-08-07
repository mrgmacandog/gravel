import React from "react";
import PostContainer from "../components/PostContainer";
import API from "../utils/API";
import axios from "axios";

// Can change to stateful component if need be
class Dashboard extends React.Component {
  state = {
    modifyTripId: "",
    modifiedPost: {}
  }

  // Handle input change
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      modifiedPost: {
        [name]: value
      }
    });
  };

  // Toggle which trip to enable modification
  toggleModify = trip => {
    this.setState({ modifyTripId: trip._id, modifiedPost: trip });
  }

  updateTrip = (db, id) => {
    alert("Updating trip...");

    // If the trip is from the drivers db
    if (db === "drivers") {
      axios.post(`/api/drivers/update/${id}`, {
        start_location: this.state.modifiedPost.start_location,
        end_location: this.state.modifiedPost.end_location,
        leaving_date: this.state.modifiedPost.leaving_date,
        flexible_date: this.state.modifiedPost.flexible_date,
        cost: this.state.modifiedPost.cost,
        seats_available: this.state.modifiedPost.seats_available,
        smoking: this.state.modifiedPost.smoking,
        luggage: this.state.modifiedPost.luggage,
        comment: this.state.modifiedPost.comment
      })
        .then(results => {
          this.props.getDriverPost();
          this.props.getRiderPost();
          this.setState({ modifiedPost: {} });
          console.log(results);
        })
        .catch(err => console.log(err));
    } else {  // If the trip is from the riders db
      axios.post(`/api/drivers/update/${id}`, {
        start_location: this.state.modifiedPost.start_location,
        end_location: this.state.modifiedPost.end_location,
        leaving_date: this.state.modifiedPost.leaving_date,
        flexible_date: this.state.modifiedPost.flexible_date,
        cost: this.state.modifiedPost.cost,
        seats_available: this.state.modifiedPost.seats_available,
        smoking: this.state.modifiedPost.smoking,
        luggage: this.state.modifiedPost.luggage,
        comment: this.state.modifiedPost.comment
      })
        .catch(err => console.log(err));
    }
  }

  // Removes a trip from database
  deleteTrip = (db, id) => {
    // If the trip is from the drivers db
    if (db === "drivers") {
      API.deleteDriver(id)
        .then(results => {
          this.props.getDriverPost();
          this.props.getRiderPost();
          console.log(results);
        })
        .catch(err => console.log(err));
    } else {  // If the trip is from the riders db
      API.deleteRider(id)
        .then(results => {
          this.props.getDriverPost();
          this.props.getRiderPost();
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
        handleInputChange={this.handleInputChange}
        toggleModify={this.toggleModify}
        modifyTripId={this.state.modifyTripId}
        modifiedPost={this.state.modifiedPost}
        updateTrip={this.updateTrip}
      />
      <PostContainer
        page={"Dashboard"}
        loggedIn={this.props.state.loggedIn}
        results={this.props.state.riderPost}
        db="riders"
        deleteTrip={this.deleteTrip}
        handleInputChange={this.handleInputChange}
        toggleModify={this.toggleModify}
        modifyTripId={this.state.modifyTripId}
        modifiedPost={this.state.modifiedPost}
        updateTrip={this.updateTrip}
      />
    </React.Fragment>
  );
  }
}

export default Dashboard;