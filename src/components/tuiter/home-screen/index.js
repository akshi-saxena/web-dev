import NavigationSidebar from "../navigation-sidebar";
import PostSummaryList from "../post-summary-list";
import PostList from "../feed-post-list";

const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">
                <PostList/>
            </div>
            
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList/>
            </div>
        </div>
    );
};
export default HomeScreen;