import React from "react";
import "./style.css";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function LocationInput(props) {
    return (
        <div className="input-group input-group-lg">
            <input className="form-control" type="text" {...props} />
            <i id="current-location" class="btn fas fa-location-arrow" onClick={() => props.useCurrentLocation(props.name)}></i>
        </div>
    );
}

export default LocationInput;
