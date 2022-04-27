import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { playAgain } from "../redux/actions/Actions";


export default function Header() {
  const initialScore = useSelector(state => state.DiceGameReducer.initialScore);
  const dispatch = useDispatch();
  return (
    <div className="text-center pt-5">
      <h1 className="text-success">GOURD CRAB SHRIMP FISH GAME</h1>
      <div className="my-5">
        <span
          className="px-5 py-3 bg-danger text-white rounded"
          style={{ fontSize: 23 }}
        >
          Reward Money: <span className="text-warning"> {initialScore.toLocaleString()} $</span>{" "}
        </span>
      </div>
      <button 
        onClick={() => dispatch(playAgain())}
        className="btn btn-success px-4" style={{ fontSize: 20 }}>
        Play again <i class="fa fa-sync-alt"></i>
      </button>
    </div>
  );
}
