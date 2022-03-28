import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
const Profile = () => {

    const profile = useSelector(state => state.profile.profileData);

    let [editProfile, setEditProfile]
      = useState(false);
    
    const editClickHandler = () => {
        setEditProfile(true)
    }

    // console.log(profile)
    let [fname, setFname] = useState(profile.firstName);
    let [lname, setLname] = useState(profile.lastName);
    let [bio, setBio] = useState(profile.bio);
    let [location, setLocation] = useState(profile.location);
    let [website, setWebsite] = useState(profile.website);
    let [date, setDate] = useState(profile.dateOfBirth);

    const dispatch = useDispatch();
    const saveClickHandler = () => {
        const prof = {profileInfo: {fname, lname, bio,location,website,date}
        }
        // console.log(prof)
        dispatch({
            type: 'save-profile', prof
        });
        setEditProfile(false)
    }

    const cancelClickHandler = () => {
        setBio(profile.bio)
        setDate(profile.date)
        setFname(profile.firstName)
        setLname(profile.lastName)
        setLocation(profile.location)
        setWebsite(profile.website)

        setEditProfile(false)
    }
 

    
    return (
        (!editProfile) ?
        <div className="row">
            <div>
                <i className="fas fa-arrow-left me-3"></i>
                <span>{profile.firstName} {profile.lastName}</span>
            </div>
            <div className="row position-relative">
                <img src={profile.bannerPicture} width="100%" height="200px"/>
                <div className="col-3 position-absolute bottom-0 ms-5">
                        <img className = "rounded-circle img-fluid" src= {profile.profilePicture}/>
                </div>
                <div className="mt-2">
                    <button className="btn btn-primary btn-block rounded-pill float-end" onClick={editClickHandler}>
                        Edit Profile
                    </button>
                </div>
            </div>
            <div className="row mt-3">
                <h5 className="mb-0">{profile.firstName} {profile.lastName}</h5>
                <p>@ {profile.handle}</p>
                <a href={`http://www.${profile.website}`}>{profile.website}</a>
                <p>{profile.bio}</p>
                <div>
                    <div className="d-lg-inline-block">
                        <i className="fas fa-map-marker-alt me-1"></i><span className="me-3">{profile.location}</span>
                    </div>
                    <div className="d-lg-inline-block">
                        <i className="fas fa-birthday-cake me-1"></i> <span className="me-3">Born {profile.dateOfBirth}</span>
                    </div>
                    <div className="d-lg-inline-block">
                        <i className="far fa-calendar me-1"></i><span className="me-3">Joined {profile.dateJoined}</span>
                    </div>        
                </div>
                <div>
                    <span className="me-1">{profile.followingCount}</span><span className="me-3">Following</span>
                    <span className="me-1">{profile.followersCount}</span><span className="me-3">Followers</span>
                </div>               
            </div>
        </div> :

        <div className="row">
        <div className="p-2" >
            <i className="fas fa-times me-3" onClick={cancelClickHandler}></i> <span>Edit Profile</span>
            <button className="btn btn-primary btn-block rounded-pill float-end" onClick={saveClickHandler}>
                Save
            </button>
        </div>
        <div className="row position-relative">
            <img src={profile.bannerPicture} width="100%" height="200px"/>
            <div className="col-3 position-absolute top-50 ms-5">
                        <img className = "rounded-circle img-fluid" src= {profile.profilePicture}/>
            </div>
        </div>
        <div className="row mt-4 py-2">
            <label htmlFor="name">Name</label>
            <textarea id ="name" value={`${fname} ${lname}`}
                        onChange={(event) =>
                            {setFname(event.target.value.split(' ').slice(0, -1).join(' '))
                            setLname(event.target.value.split(' ').slice(-1).join(' '))}
                        }
                        placeholder="Name" className="bg-transparent text-white">
            </textarea>
        </div>
        <div className="row py-2 ">
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" value={bio}
                        onChange={(event) =>
                            setBio(event.target.value)}
                        placeholder="Bio" className="bg-transparent text-white">
            </textarea>
        </div>
        <div className="row py-2 ">
            <label htmlFor="loc">Location</label>
            <textarea id="loc" value={location}
                        onChange={(event) =>
                            setLocation(event.target.value)}
                        placeholder="Location" className="bg-transparent text-white">
            </textarea>
            
        </div>
        <div className="row py-2 ">
            <label htmlFor="web">Website</label>
            <textarea id="web" value={website}
                        onChange={(event) =>
                            setWebsite(event.target.value)}
                        placeholder="Website" className="bg-transparent text-white">
            </textarea>
        </div>
        <div className="row py-2 ">
            <label htmlFor="web">Date of Birth</label>
            <input id="web" value={date} type="date"
                        onChange={(event) =>
                            setDate(event.target.value)}
                        placeholder="Date Of Birth" className="bg-transparent text-white"
            />
        </div>
        </div>
        
    );
}

export default Profile;