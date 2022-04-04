import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import {deleteTuit, updateTuit} from "../../../actions/tuits-actions";

const TuitListItem = ({key,tuit}) => {

    const dispatch = useDispatch();
    // const likeTuit = () => {
    //     dispatch({type: 'like-tuit', tuit});
    // };


    // const deleteTuit = (tuit) => {
    //     dispatch({type: 'delete-tuit', tuit})
    // }

    return (
            <div className = "row">
                <div className="col-2">
                    <img className = "rounded-circle img-fluid" src= {tuit.avatarImage}/>
                </div>
                <div className="col-10">
                        <span className="fw-bold text-white">{tuit.postedBy && tuit.postedBy.username} <i className="fas fa-check-circle"></i></span>
                            <span> @{tuit.handle} &middot; {tuit.time}</span>
                        <span className="float-end">
                            <i className="fas fa-times"
                            onClick={() => deleteTuit(
                                dispatch, tuit)}></i>
                        </span>
                    <p className="text-white">{tuit.tuit}</p>
                    <div className="rounded-3 border-secondary mb-3">
                                {(tuit.attachments && tuit.attachments.image) ?
                                    <img src= {tuit.attachments.image} className="card-img-top" alt="..."/>  : ""}
                                {(tuit.attachments && tuit.attachments.video) ?
                                    <iframe width="100%"
                                            height="300px"
                                        src= {`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe> : ""}
                    </div>
                    <div className="row p-2">
                            <div className="col">
                                <a href="#" className="text-decoration-none"><i className="far fa-comment"></i><span className="ps-2">{tuit.stats && tuit.stats.comments}</span></a>
                            </div>
                            <div className="col">
                                <a href="#" className="text-decoration-none"><i className="fas fa-retweet"></i><span className="ps-2">{tuit.stats && tuit.stats.retuits}</span></a>
                            </div>
                            <div className="col">
                                {/* <span onClick={likeTuit}>
                                    {
                                        tuit.liked &&
                                        <a href="#" className="text-decoration-none">
                                        <i className="fas fa-heart"
                                           style={{color: 'red'}}></i></a>
                                    }
                                    {
                                        !tuit.liked &&
                                        <i className="far fa-heart"></i>
                                    }
                                    <span className="ps-2">{tuit.stats && tuit.stats.likes}</span>
                                </span> */}
                                <span><i onClick={() => updateTuit(dispatch, {
                                ...tuit,
                                likes: tuit.likes + 1
                                })} className="far fa-thumbs-up ms-2"></i>
                                <span className="ps-2">{tuit.likes}</span>
                                </span> 
                            </div>
                            <div className="col">
                                <span><i onClick={() => updateTuit(dispatch, {
                                ...tuit,
                                dislikes: tuit.dislikes + 1
                                })} className="far fa-thumbs-down ms-2"></i>
                                <span className="ps-2">{tuit.dislikes}</span>
                                </span> 
                            </div>
                            <div className="col">
                                <a href="#" className="text-decoration-none"><i className="fas fa-upload"></i></a>
                            </div>
                          </div>
                </div>
            </div>
    );
}
export default TuitListItem;
