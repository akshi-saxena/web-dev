const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img class = "rounded-circle img-fluid" src= ${who.avatarIcon}/>
                </div>
                <div class="col-7">
                    <span class="fw-bold text-nowrap">${who.userName} <i class="fas fa-check-circle"></i></span>
                    <br/>
                    <span class="wd-fg-color-gray">${who.handle}</span>
                </div>
                <div class="col-3  wd-follow-btn">
                    <button class="btn btn-primary rounded-pill float-end" type="submit">Follow</button>
                </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;
