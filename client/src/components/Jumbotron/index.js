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
                    <div className="intro-lead-in">Group Travel Made Easy</div>
                    <div className="intro-heading">Connecting drivers and riders to reduce trip costs, traffic congestion, and greenhouse gas emmissions </div>
                </div>
            </div>
        </header>
    );
}
export default Jumbotron;