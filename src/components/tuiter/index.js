import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./explore-screen";

import HomeScreen from "./home-screen";

const Tuiter = () => {
    return(
        <>
            <h1>Tuiter</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/">
                Labs
            </Link>
            <Link to="/tuiter/home-screen">
                Tuiter
            </Link> |
            <Link to="/tuiter/explore-screen">
                Tuiter Home
            </Link> |
            <Link to="/tuiter/home-screen">
                Tuiter Home
            </Link>
        </>

    )
};

export default Tuiter;
