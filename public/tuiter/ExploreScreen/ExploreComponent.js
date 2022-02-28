import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <!-- search -->
                <div class="row pb-2">
                    <div class="col-11">
                        <form>
                            <input class="form-control rounded-pill float-start border-0" type="search" placeholder="Search Tuiter" aria-label="Search">
                        </form>
                    </div>
                    <div class="col-1 py-2">
                        <a class="text-decoration-none"><i class="fas fa-cog float-end wd-fg-color-white"></i></a>
                    </div>
                </div>
            
                <!-- navbar -->
                <div class="pb-2">
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                        <a class="nav-link active"  aria-current="page" href="for-you.html">For you</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="entertainment.html">Entertainment</a>
                            </li>
                    </ul>
                </div>

                <!-- card -->
                <div class="row">
                    <div class="card text-white border-0">
                        <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" class="card-img"/>
                        <div class="card-img-overlay d-flex align-items-end">
                          <p class="card-text ps-2 fs-4">Spacex's Starship</p>
                        </div>
                      </div>
                </div>

           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
