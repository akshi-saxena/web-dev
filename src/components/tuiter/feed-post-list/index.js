import FeedPostListItem from "./feed-post-list-item";
import content from "./content.json";

const PostList = () => {
    return (
        <>
                {
                    content.map(content => {
                        return(<FeedPostListItem content={content}/>
                        );
                    })
                }
        </>
    );

}

export default PostList;

