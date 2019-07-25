import React, { Component } from "react";

/* Import Components */

import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Button from "../components/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPost: {
        title: "",
        start_location: "",
        end_location: "",
        leaving_date: "",
        flexible_date: "",
        cost: "",
        seats_available: "",
        smoking: "",
        luggage: "",

        comments: ""
      },
      flexibleDateOpt: ["Yes", "No"],
      smokingOpt: ["Yes", "No"],

    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleStart_location = this.handleStart_location.bind(this);
    this.handletTitle = this.handleTitle.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleTitle(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newPost: {
          ...prevState.newPost,
          title: value
        }
      }),
      () => console.log(this.state.newPost)
    );
  }

  handleStart_location(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newPost: {
          ...prevState.newPost,
          start_location: value
        }
      }),
      () => console.log(this.state.newPost)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newPost: {
          ...prevState.newPost,
          [name]: value
        }
      }),
      () => console.log(this.state.newPost)
    );
  }





  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newPost: {
          ...prevState.newPost,
          comments: value
        }
      }),
      () => console.log(this.state.newPost)
    );
  }


  handleFormSubmit(e) {
    // e.preventDefault();
    // let userData = this.state.newPost;

    // fetch("http://example.com", {
    //   method: "POST",
    //   body: JSON.stringify(userData),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // }).then(response => {
    //   response.json().then(data => {
    //     console.log("Successful" + data);
    //   });
    // });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newPost: {
        title: "",
        start_location: "",
        end_location: "",
        gender: "",
        skills: [],
        comments: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Title"}
          name={"title"}
          value={this.state.newPost.title}
          placeholder={"Title of your Post"}
          handleChange={this.handleInput}
        />{" "}
        {/* Title of the post*/}
        <Input
          inputType={"text"}
          name={"start_location"}
          title={"Start_location"}
          value={this.state.newPost.start_location}
          placeholder={"Enter your start location"}
          handleChange={this.handleStart_location}
        />{" "}
        {/* start_location */}
        <Input
          inputType={"text"}
          name={"end_location"}
          title={"End_location"}
          value={this.state.newPost.end_location}
          placeholder={"Enter your final destination"}
          handleChange={this.handleInput}
        />{" "}
        <Input
          type={"date"}
          name={"leaving_date"}
          title={"Leaving date"}
          value={this.state.newPost.leaving_date}
          placeholder={"Enter your the leaving date"}
          handleChange={this.handleInput}
        />{" "}
        <Select
          title={"Flexible Date"}
          name={"flexible_date"}
          options={this.state.flexibleDateOpt}
          value={this.state.newPost.flexible_date}
          placeholder={"Select Option"}
          handleChange={this.handleInput}
        />{" "}
        {/* Flexible date Selection */}
        <Input
          inputType={"number"}
          name={"cost"}
          title={"Cost"}
          value={this.state.newPost.cost}
          placeholder={"Enter the cost"}
          handleChange={this.handleInput}
        />{" "}
        <Select
          title={"Smoking"}
          name={"smoking"}
          options={this.state.smokingOpt}
          value={this.state.newPost.smoking}
          placeholder={"Select Option"}
          handleChange={this.handleInput}
        />{" "}
        <Input
          inputType={"text"}
          name={"luggage"}
          title={"Luggage"}
          value={this.state.newPost.cost}
          placeholder={"Enter how many bags"}
          handleChange={this.handleInput}
        />{" "}

        <TextArea
          title={"Comments"}
          rows={10}
          value={this.state.newPost.comments}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
          placeholder={"Describe your past experience and skills"}
        />
        {/* comments you */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
          text={"Post"}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
          text={"Clear Form"}
        
        />
        {""}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;