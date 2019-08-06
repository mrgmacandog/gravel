import React from "react";
import PostContainer from "../components/PostContainer";

// Can change to stateful component if need be
class Dashboard extends React.Component {
  componentDidMount(){
    const {getDriverPost, id} = this.props
    getDriverPost(id)
  }
  render(){
    // console.log(props);
  return (

    <React.Fragment>
      {/* TODO: Send TripContainer the data from Riders table */}
      <PostContainer page={"Dashboard"} loggedIn={this.props.state.loggedIn} results={this.props.state.results}/>
    </React.Fragment>
  );
  }
}

export default Dashboard;