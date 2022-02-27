import PostItem from "./PostItem.js";
import postcontent from "./postcontent.js";

const PostList = () => {
    return (`
                ${
                postcontent.map(postc => {
                    return(PostItem(postc));
                }).join('')}
            `); }

export default PostList;

