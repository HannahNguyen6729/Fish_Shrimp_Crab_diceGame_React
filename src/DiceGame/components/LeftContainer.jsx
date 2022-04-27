import React from "react";
import Dice from "./Dice";
import {useSelector, useDispatch} from 'react-redux';

export default function LeftContainer(props) {
  const wagerList= useSelector((state)=> state.DiceGameReducer.wagerList)
  
  const renderWagerList = ()=>{
    return wagerList.map((dice, index)=> (
      <div className="col-4" key={index}>
            <Dice dice={dice}/>
        </div>
    ))
  }

  return (
    <div className="col-6 my-5 pl-5">
      <div className="row">
        {renderWagerList()}
      </div>
    </div>
  );
}
