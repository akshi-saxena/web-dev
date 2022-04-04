import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {createTuit} from "../../../actions/tuits-actions";
import { Link } from "react-router-dom";
   

const WhatsHappening = () => {
//   let [whatsHappening, setWhatsHappening]
//       = useState('');
  
//   const dispatch = useDispatch();
  
//   const tuitClickHandler = () => {
//     dispatch({
//         type: 'create-tuit',
//         tuit: whatsHappening
//    });
//    setWhatsHappening('');
//   }

    const [newTuit, setNewTuit] = useState({tuit: 'New tuit', 
                                            postedBy:{username: 'Hinata Shoyo'}, 
                                            avatarImage : '../../../images/profilepic.jpeg', 
                                            handle: 'hinata',
                                            time: 'Now',
                                            likes:0, dislikes:0});
    const dispatch = useDispatch();

    return (
    <>
        <div className = "row p-2 mb-2">
            <div className="col-2">
                <img className = "rounded-circle img-fluid" src= "../../../images/profilepic.jpeg"/>
            </div>
            <div className="col-10">
                <div className="row p-2 ">
                    <textarea
                              onChange={(e) =>
                                setNewTuit({...newTuit,
                                tuit: e.target.value})}
                                placeholder="What's happening?" className="form-control bg-transparent text-white border-top-0 border-end-0 border-start-0">
                    </textarea>
                </div>
                <div className="row">
                    <div className="col-8">
                        <a href="#" className="text-decoration-none"><i className="far fa-image me-2"></i></a>

                        <a href="#" className="text-decoration-none"> <i className="far fa-chart-bar me-2"></i></a>

                        <a href="#" className="text-decoration-none"><i className="far fa-smile me-2"></i></a>

                        <a href="#" className="text-decoration-none"><i className="far fa-calendar me-2"></i></a>
                    </div>
                    <div className="col-4">
                            <button className="btn btn-primary btn-block rounded-pill float-end" onClick={() => createTuit(dispatch, newTuit)}>
                                Tuit
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
export default WhatsHappening;

