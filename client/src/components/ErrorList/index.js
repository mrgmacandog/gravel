import React from 'react'

function ErrorList(props) {
    const errors = props.errors;
    console.log("ERRORS TYPE BELOW")
    console.log(typeof(errors))
    const listItems = errors.map((error) =>
      <li>
        {error}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

export default ErrorList; 