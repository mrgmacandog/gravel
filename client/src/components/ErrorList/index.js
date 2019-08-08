import React from 'react'
import './style.css'

function ErrorList(props) {
    const errors = props.errors;
    console.log("ERRORS TYPE BELOW")
    console.log(typeof(errors))
    const listItems = errors.map((error) =>
      <h3>
        {error}
      </h3>
    );
    return (
      <div>{listItems}</div>
    );
  }

export default ErrorList; 