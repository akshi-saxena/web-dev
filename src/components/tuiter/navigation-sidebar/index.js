import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({
                               active = 'explore'
                           }
) => {

    return(
            <>
            <div className="list-group">
                <Link to="/" className="list-group-item">
                    <i className="fab fa-twitter"></i>
                </Link>

                <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                            <i className="fas fa-home "></i><span className="p-1 d-none d-lg-inline-block ">Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fas fa-hashtag "></i><span className="p-1 d-none d-lg-inline-block ">Explore</span>
                </Link>
                <a href="#" className="list-group-item ">
                    <i className="fas fa-bell "></i><span className="p-1 d-none d-lg-inline-block">Notifications</span></a>
                <a href="#" className="list-group-item ">
                    <i className="fas fa-envelope "></i><span className="p-1 d-none d-lg-inline-block">Messages</span></a>
                <a href="#" className="list-group-item ">
                    <i className="fas fa-bookmark "></i><span className="p-1 d-none d-lg-inline-block">Bookmarks</span></a>
                <a href="#" className="list-group-item ">
                    <i className="fas fa-list-ul "></i><span className="p-1 d-none d-lg-inline-block">Lists</span></a>
                <a href="#" className="list-group-item profile">
                    <i className="fas fa-user"></i><span className="p-1 d-none d-lg-inline-block">Profile</span></a>
                <a href="#" className="list-group-item p-0 ">
                    <span className="p-0 fa-stack">
                        <i className="fas fa-circle fa-stack-1x"></i>
                        <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    </span>
                    <span className="p-0 d-none d-lg-inline-block">More</span>
                </a>
            </div>
            
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            </>
    );
}
export default NavigationSidebar;
