import React from "react";
import "./style.css";

// function Jumbotron() {
//     return ( <div className = "jumbotron text-center" >
//         <h1 > Gravel </h1> 
//         <h3>This app connects riders and drivers looking to carpool</h3>
//         </div>
//     );
// }
// export default Jumbotron;

function Jumbotron() {
    return (
        <header className="masthead">
            <div className="container">
                <div className="intro-text">
                    <div className="intro-lead-in">Welcome!</div>
                    <div className="intro-heading">This app connects riders and drivers looking to carpool</div>
                </div>
            </div>
        </header>
    );
}
export default Jumbotron;