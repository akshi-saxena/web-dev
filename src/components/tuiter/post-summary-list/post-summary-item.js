const PostSummaryItem = (
    {
        posts = {
            topic: "Web Development",
            userName: "ReactJS",
            time: "2h",
            title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            image: "../../../images/tile-img-react.jpeg",
        }
    }
) => {
    return(
        <div className="p-3">
            <div className="row">
                <div className="col-10">
                    <p className="m-0 p-0">
                        {posts.topic}
                    </p>
                    <p className="fw-bold m-0 p-0 text-white">
                        {posts.userName}
                        <i className="fas fa-check-circle"></i>
                        &middot; {posts.time}
                    </p>
                    <p className="m-0 p-0 text-justify fw-bold text-white">{posts.title}</p>
                    <p className="m-0 p-0">{posts.tweets}</p>
                </div>
                <div className="col-2 py-2">
                    <img className = "img-fluid rounded float-end" src = {posts.image}/>
                </div>
            </div>
        </div>
    );
}
export default PostSummaryItem;
