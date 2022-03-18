import WhoToFollowListItem from "./who-to-follow-list-item";
import who from "./who.json";

const WhoToFollowList = () => {
    return (
        <ul class="list-group">
            <li class="list-group-item fw-bold wd-bg-color-darkgray wd-fg-color-white">Who to follow</li>
            <li class="list-group-item wd-bg-color-darkgray wd-fg-color-white">
                {
                    who.map(who => {
                        return(<WhoToFollowListItem who={who}/>
                        );
                    })
                }
            </li>
        </ul>
); }

export default WhoToFollowList;

