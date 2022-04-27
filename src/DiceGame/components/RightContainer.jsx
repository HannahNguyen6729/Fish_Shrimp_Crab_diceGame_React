import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SmallDice from "./SmallDice";
import { rollDice } from "../redux/actions/Actions";

export default function RightContainer() {
  const diceList = useSelector((state) => state.DiceGameReducer.diceList);
  const dispatch = useDispatch();
  return (
    <div className="col-6 mt-5">
      <div className="d-flex justify-content-center align-items-center">
        <div
          className="row bg-warning rounded-pill"
          style={{ minWidth: 500, minHeight: 500 }}
        >
          <div
            className="col-12 text-center"
            style={{ transform: "translateY(60%)" }}
          >
            <SmallDice item={diceList[0].img} />
          </div>
          <div className="col-6 text-right">
            <SmallDice item={diceList[1].img} />
          </div>
          <div className="col-6">
            <SmallDice item={diceList[2].img} />
          </div>
        </div>
      </div>
      <div className="text-center mt-4 ">
        <button
          className="btn btn-success text-white px-4 py-3"
          style={{ fontSize: 20 }}
          onClick={() =>dispatch(rollDice())}
        >
          START
        </button>
      </div>
    </div>
  );
}
