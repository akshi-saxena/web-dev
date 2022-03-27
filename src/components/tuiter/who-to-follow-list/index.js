import React from 'react';
import WhoToFollowListItem from "./who-to-follow-list-item";
// import who from "../data/who.json";
import {useSelector} from "react-redux";
const WhoToFollowList = () => {
  const whom = useSelector(state => state.who);
  return(
    <div>
        <ul className="list-group">
            <li className="list-group-item fw-bold wd-bg-color-darkgray wd-fg-color-white">Who to follow</li>
                {
                    whom.map(who => {
                        return(<WhoToFollowListItem who={who}/>
                        );
                    })
                }
        </ul>
    </div>
  );
};
export default WhoToFollowList;

