import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            <li class="list-group-item fw-bold wd-bg-color-darkgray wd-fg-color-white">Who to follow</li>
            <li class="list-group-item wd-bg-color-darkgray wd-fg-color-white">
                ${
                    who.map(who => {
                        return(WhoToFollowListItem(who));
                    }).join('')
                }
            </li>
        </ul>
`); }

export default WhoToFollowList;

