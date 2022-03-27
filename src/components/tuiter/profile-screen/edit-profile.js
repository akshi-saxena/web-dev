import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const EditProfile = () => {
    
    const profile = useSelector(state => state.profile.profileData);

    let [name, setName] = useState(profile.firstName);
    let [bio, setBio] = useState(profile.bio);
    let [location, setLocation] = useState(profile.location);
    let [Website, setWebsite] = useState(profile.website);

    const dispatch = useDispatch();
    const saveClickHandler = () => {
        const profile = {
            name: {name},
            bio: {bio},
            location: {location},
            Website: {Website}
        }
        console.log(profile)
        dispatch({
            type: 'save-profile', profile
        });
    }
 
    return (
        <div className="row">
            <div className="p-2" >
                <Link to="/tuiter/profile" className="fas fa-times me-3"></Link> <span>Edit Profile</span>
                <Link to="/tuiter/profile" className="btn btn-primary btn-block rounded-pill float-end" onClick={saveClickHandler}>
                    Save
                </Link>
            </div>
            <div className="row">
                <img src={profileData.bannerPicture} width="100%" height="200px"/>
                <div className="col-2">
                        <img className = "rounded-circle img-fluid" src= {profileData.profilePicture}/>
                </div>
            </div>
            <div className="row p-2 ">
                <label for="name">Name</label>
                <textarea id ="name" value={name}
                            onChange={(event) =>
                                setName(event.target.value)}
                            placeholder="Name" >
                </textarea>
            </div>
            <div className="row p-2 ">
                <label for="bio">Bio</label>
                <textarea id="bio" value={bio}
                            onChange={(event) =>
                                setBio(event.target.value)}
                            placeholder="Bio" >
                </textarea>
            </div>
            <div className="row p-2 ">
                <label for="loc">Location</label>
                <textarea id="loc" value={location}
                            onChange={(event) =>
                                setLocation(event.target.value)}
                            placeholder="Location" >
                </textarea>
                
            </div>
            <div className="row p-2 ">
                <label for="web">Website</label>
                <textarea id="web" value={Website}
                            onChange={(event) =>
                                setWebsite(event.target.value)}
                            placeholder="Website" >
                </textarea>
            </div>
        </div>
    );
}
export default EditProfile;