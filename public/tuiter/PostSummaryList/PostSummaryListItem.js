const PostSummaryListItem = (posts) => {
    return(`
        <div class="p-3">
            <div class="row">
                <div class="col-10">
                    <p class="m-0 p-0">
                        ${posts.topic}
                    </p>
                    <p class="fw-bold m-0 p-0 text-white">
                        ${posts.userName}
                        <i class="fas fa-check-circle"></i>
                        &middot; ${posts.time}
                    </p>
                    <p class="m-0 p-0 text-justify fw-bold text-white">${posts.title}</p>  
                    ${posts.tweets ? `<p class="m-0 p-0">${posts.tweets}</p>` : ""}          
                </div>
                <div class="col-2 py-2">
                    <img class = "img-fluid rounded float-end" src = ${posts.image}/>
                </div>
            </div>
        </div>   
    `);
}
export default PostSummaryListItem;
