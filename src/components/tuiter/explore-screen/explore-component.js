import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
    return(
        <>
            <div className="row pb-2">
                <div className="col-11">
                    <form>
                        <input className="form-control rounded-pill float-start border-0" type="search" placeholder="Search Tuiter" aria-label="Search"/>
                    </form>
                </div>
                <div className="col-1 py-2">
                    <a className="text-decoration-none"><i className="fas fa-cog float-end wd-fg-color-white"></i></a>
                </div>
            </div>

            <div className="pb-2">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                    <a className="nav-link active"  aria-current="page" href="for-you.html">For you</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="entertainment.html">Entertainment</a>
                        </li>
                </ul>
            </div>

            <div className="row">
                <div className="card text-white border-0">
                    <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" className="card-img"/>
                    <div className="card-img-overlay d-flex align-items-end">
                      <p className="card-text ps-2 fs-4">Spacex's Starship</p>
                    </div>
                  </div>
            </div>
            {PostSummaryList()}
        </>
    );
}

export default ExploreComponent;
