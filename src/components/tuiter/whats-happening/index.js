import {useDispatch} from "react-redux";
import React, {useState} from "react";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
      = useState('');
  
  const dispatch = useDispatch();
  
  const tuitClickHandler = () => {
    dispatch({
        type: 'create-tuit',
        tuit: whatsHappening
   });
   setWhatsHappening('');
  }
  return (
    <>
        <div className = "row p-2 mb-2">
            <div className="col-2">
                <img className = "rounded-circle img-fluid" src= "../../../images/profilepic.jpeg"/>
            </div>
            <div className="col-10">
                <div className="row p-2 ">
                    <textarea value={whatsHappening}
                              onChange={(event) =>
                                  setWhatsHappening(event.target.value)}
                                placeholder="What's happening?" className="bg-transparent border-top-0 border-end-0 border-start-0">
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
                            <button className="btn btn-primary btn-block rounded-pill float-end" onClick={tuitClickHandler}>
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

