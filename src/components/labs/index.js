import React from "react";
import ReduxExamples from "./redux-examples";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import Todo from "./todo";
import {Link} from "react-router-dom";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>

            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>

            <ReduxExamples/>

            {/*<ConditionalOutput/>*/}
            {/*<Styles/>*/}
            {/*<Classes/>*/}

            {/*<Todo/>*/}
        </>

    )
};

export default Labs;
