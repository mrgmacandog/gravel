import React from "react";
import Login from "../components/Login"

// Can change to stateful component if need be
function Signin(props) {
    console.log("=====SIGN UP=====")
    console.log(props)
    return (
        <Login login={props.login}/>
    );
}

export default Signin;