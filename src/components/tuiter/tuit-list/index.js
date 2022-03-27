import React from "react";
// import tuits from "../data/tuits.json";
import {useSelector} from "react-redux";
import TuitListItem from "./tuit-list-item";
// import './tuits.css';

const TuitList = () => {
  const tuits = useSelector(state => state.tuits);
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