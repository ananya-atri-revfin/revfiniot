import React from "react";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";

const AuthGuard = (token) => {
    const auth = (token != null) ? true : false;
    console.log(token)
    console.log(auth)
    return auth ? <Home/> : <LogIn/>;
}

export default AuthGuard;