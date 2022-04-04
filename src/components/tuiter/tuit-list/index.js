import React, {useEffect} from "react";
// import tuits from "../data/tuits.json";
import {useSelector, useDispatch} from "react-redux";
import TuitListItem from "./tuit-list-item";
import {findAllTuits} from "../../../actions/tuits-actions";


const TuitList = () => {
  const tuits = useSelector(state => state.tuits);

  const dispatch = useDispatch();
  useEffect(() => findAllTuits(dispatch), []);

  return (
    <ul className="ttr-tuits list-group">
      {
        tuits.map && tuits.map(tuit =>
          <TuitListItem key={tuit._id} tuit={tuit}/>)
      }
    </ul>
  );
}

export default TuitList;