import React from "react";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return(
        <>
            <h1>Hello World!</h1>
            <Link to="/">
                Labs
            </Link> |
            <Link to="/tuiter/home-screen">
                Tuiter
            </Link> |
            <Link to="/tuiter/explore-screen">
                Tuiter Explore
            </Link> |
            <Link to="/tuiter/home-screen">
                Tuiter Home
            </Link>
        </>
    )
};

export default HelloWorld;
