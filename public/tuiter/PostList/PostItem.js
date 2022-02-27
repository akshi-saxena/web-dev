const PostItem = (postcontent) => {
    return (`
            <div class = "row">
            <div class="col-2">
                <img class = "rounded-circle img-fluid" src= ${postcontent.profile_image}/>
            </div>
            <div class="col-10">
                    <span class="fw-bold text-white">${postcontent.userName} <i class="fas fa-check-circle"></i></span>
                        <span>@${postcontent.handle} &middot ${postcontent.time}</span>
                        <p class="text-white">${postcontent.content}</p>
                <div class="card rounded-3 border-secondary mb-3">  
                      <img src= ${postcontent.postImage} class="card-img-top" alt="...">
                      ${(postcontent.image_caption || postcontent.image_caption_title) ? 
                        `<div class="card-body">
                        <h6 class="card-title">${postcontent.image_caption_title}</h6>
                        <p class="card-text">${postcontent.image_caption}</p>
                      </div>`: ""}
                </div>
                <div class="row p-2">
                        <div class="col">
                            <a href="#" class="text-decoration-none"><i class="far fa-comment"></i><span class="ps-2">${postcontent.comments}</span></a>
                        </div>
                        <div class="col">
                            <a href="#" class="text-decoration-none"><i class="fas fa-retweet"></i><span class="ps-2">${postcontent.retweets}</span></a>
                        </div>
                        <div class="col">
                            <a href="#" class="text-decoration-none"><i class="far fa-heart"></i><span class="ps-2">${postcontent.likes}</span></a>
                        </div>
                        <div class="col">
                            <a href="#" class="text-decoration-none"><i class="fas fa-upload"></i class="ps-2"></a>
                        </div>
                      </div>
            </div>
            </div>
    `);
}
export default PostItem;
