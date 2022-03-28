import {Outlet} from "react-router-dom";
// import "./tuiter.css";
import tuitsReducer from "./reducers/tuits-reducer"
import whoReducer from "./reducers/who-reducer";
import profileReducer from "./reducers/profile-reducer";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import { useLocation } from 'react-router-dom';

import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

const reducer = combineReducers({tuits: tuitsReducer, who: whoReducer, profile: profileReducer})
const store = createStore(reducer);

const Tuiter = () => {

    const location = useLocation();

  return (
    <Provider store={store}>
        <div className="row mt-2">
            <div className="col-2 col-lg-1 col-xl-2">
                <NavigationSidebar active = {location.pathname}/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
                <Outlet/>
            </div>
            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    </Provider>
  );
};
export default Tuiter;