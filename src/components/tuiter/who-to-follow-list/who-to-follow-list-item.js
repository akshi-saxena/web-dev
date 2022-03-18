const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon: '../../../images/follow-logo-virgin.png',
                                     userName: 'Virgin Galactic',
                                     handle: 'virgingalactic',
                                 }

                             }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className = "rounded-circle img-fluid" src= {who.avatarIcon}/>
                </div>
                <div className="col-7">
                    <span className="fw-bold text-nowrap">{who.userName} <i className="fas fa-check-circle"></i></span>
                    <br/>
                    <span className="wd-fg-color-gray">{who.handle}</span>
                </div>
                <div className="col-3  wd-follow-btn">
                    <button className="btn btn-primary rounded-pill float-end" type="submit">Follow</button>
                </div>
            </div>
        </li>
    );
}
export default WhoToFollowListItem;
