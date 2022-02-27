const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            
                <a href="../HomeScreen/home.html" class="list-group-item ${active ? active : ''}">
                            <i class="fas fa-home "></i><span class="p-1 d-none d-lg-inline-block">Home</span>
                </a>
                <a href="../ExploreScreen/explore.html" class="list-group-item ${active ? active : ''}">
                    <i class="fas fa-hashtag "></i><span class="p-1 d-none d-lg-inline-block">Explore</span></a>
                <a href="#" class="list-group-item">
                    <i class="fas fa-bell "></i><span class="p-1 d-none d-lg-inline-block">Notifications</span></a>
                <a href="#" class="list-group-item">
                    <i class="fas fa-envelope "></i><span class="p-1 d-none d-lg-inline-block">Messages</span></a>
                <a href="#" class="list-group-item">
                    <i class="fas fa-bookmark "></i><span class="p-1 d-none d-lg-inline-block">Bookmarks</span></a>
                <a href="#" class="list-group-item">
                    <i class="fas fa-list-ul "></i><span class="p-1 d-none d-lg-inline-block">Lists</span></a>
                <a href="#" class="list-group-item">
                    <i class="fas fa-user"></i><span class="p-1 d-none d-lg-inline-block">Profile</span></a>
                <a href="#" class="list-group-item p-0">
                    <span class="p-0 fa-stack">
                        <i class="fas fa-circle fa-stack-1x"></i>
                        <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    </span>
                    <span class="p-0 d-none d-lg-inline-block">More</span>
                </a>
            </div>
            
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
