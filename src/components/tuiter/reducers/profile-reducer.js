const data = {profileData: {
    firstName: 'Hinata', lastName: 'Shoyo', 
    handle: 'hinata',
    profilePicture: '../../../images/profilepic.jpeg', 	
    bannerPicture: '../../../images/banner.jpeg',
    bio: 'Volleyball Club | 1st Year, class 1, Karasuno High | Middle Blocker | Lets go to Nationals!! ',
    website: 'youtube.com/webdevtv',
    location: 'Tokyo, Japan',	dateOfBirth: '1996-07-21',	dateJoined: 'April 2009',
    followingCount: 312,	followersCount: 180
}
};

const profileReducer = (state = data, action) => {
    switch (action.type) {
        case 'save-profile':
            // console.log(1)
            // console.log(state)
            // console.log(action)
            state.profileData.firstName = action.prof.profileInfo.fname
            state.profileData.lastName = action.prof.profileInfo.lname
            state.profileData.bio = action.prof.profileInfo.bio
            state.profileData.location = action.prof.profileInfo.location
            state.profileData.website = action.prof.profileInfo.website
            state.profileData.dateOfBirth = action.prof.profileInfo.date
            // console.log(2)
            // console.log(state)
            return state;
        default:
            // console.log(state)
            return state;
    }
    
};

export default profileReducer;