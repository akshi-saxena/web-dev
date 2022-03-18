import React from "react";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import Todos from "./todo";
import {Link} from "react-router-dom";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>

            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home-screen">
                Tuiter
            </Link> |
            <Link to="/tuiter/explore-screen">
                Tuiter Home
            </Link> |
            <Link to="/tuiter/home-screen">
                Tuiter Home
            </Link>

            <ConditionalOutput/>
            <Styles/>
            <Classes/>

            <Todos/>
        </>

    )
};

export default Labs;
