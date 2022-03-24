import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import todos from "./reducers/todos-reducer";
import hello from "./reducers/hello";
import {createStore, combineReducers} from "redux";
import Todos from "./todos-component";
import {Provider} from "react-redux";

const reducers =
    combineReducers({hello, todos})

const store = createStore(reducers);

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <Todos/>
                <h2>Redux Examples</h2>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;