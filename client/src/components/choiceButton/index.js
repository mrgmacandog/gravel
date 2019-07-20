import React from "react";
import "./style.css";

// Destructuring the type, className, children and onClick props, applying them to the button element
function ChoiceButton({ type = "default", className, children, onClick, text,iconClass}) {
  return (
    <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
      {children}
      {text}     
      {iconClass} 
    </button>
  );
}

export default ChoiceButton;