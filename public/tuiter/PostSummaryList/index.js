import PostSummaryListItem from "./PostSummaryListItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`

                ${
        posts.map(post => {
            return(PostSummaryListItem(post));
        }).join('')
        }
`); }

export default PostSummaryList;

