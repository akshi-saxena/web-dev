
import PostSummaryItem from "./post-summary-item";
import posts from "./posts.json";

const PostSummaryList = () => {
    return (
        <>{
            posts.map(posts => {
                return(<PostSummaryItem posts={posts}/>
                );
            })
        }
        </>
); }

export default PostSummaryList;

