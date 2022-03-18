const FeedPostListItem = ({
                              content = {
                                  "profile_image":"../../images/profile-elon-musk.jpeg",
                                  "userName": "Elon Musk",
                                  "handle": "elonmusk",
                                  "time": "23h",
                                  "content": "Amazing show about @inspiration4x mission!",
                                  "postImage": "../../images/post-countdown.jpeg",
                                  "image_caption_title": "Countdown Inspiration4 Mission to Space ",
                                  "image_caption": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quaerat!",
                                  "comments": "4.32k",
                                  "retweets": "3.5k",
                                  "likes": "3.7k"
                              }
}) => {
    return (
            <div className = "row">
            <div className="col-2">
                <img className = "rounded-circle img-fluid" src= {content.profile_image}/>
            </div>
            <div className="col-10">
                    <span className="fw-bold text-white">{content.userName} <i className="fas fa-check-circle"></i></span>
                        <span> @{content.handle} &middot; {content.time}</span>
                        <p className="text-white">{content.content}</p>
                <div className="card rounded-3 border-secondary mb-3">
                    <img src= {content.postImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h6 className="card-title">{content.image_caption_title}</h6>
                        <p className="card-text">{content.image_caption}</p>
                    </div>
                </div>
                <div className="row p-2">
                        <div className="col">
                            <a href="#" className="text-decoration-none"><i className="far fa-comment"></i><span className="ps-2">{content.comments}</span></a>
                        </div>
                        <div className="col">
                            <a href="#" className="text-decoration-none"><i className="fas fa-retweet"></i><span className="ps-2">{content.retweets}</span></a>
                        </div>
                        <div className="col">
                            <a href="#" className="text-decoration-none"><i className="far fa-heart"></i><span className="ps-2">{content.likes}</span></a>
                        </div>
                        <div className="col">
                            <a href="#" className="text-decoration-none"><i className="fas fa-upload"></i></a>
                        </div>
                      </div>
            </div>
            </div>
    );
}
export default FeedPostListItem;
