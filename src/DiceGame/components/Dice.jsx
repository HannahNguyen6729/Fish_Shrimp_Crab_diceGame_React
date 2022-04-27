import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {changeScore} from '../redux/actions/Actions';

export default function Dice(props) {
  const dispatch= useDispatch();
  const {dice} = props;
  const {img} = props.dice;
  return (
    <div
            className="card mb-4"
            style={{ backgroundColor: "rgb(252,154,2)", border: "none" }}
          >
            <img src={img} className="card-img-top" alt="img1" />
            <div className="card-body bg-success text-center py-2 rounded mt-2">
              <button 
                onClick={() => dispatch(changeScore(dice, true))}
                href="#!" className="btn btn-danger">
                <i className="fa fa-plus" />
              </button>
              <span className="text-warning px-4" style={{ fontSize: 20 }}>
                {props.dice.score}
              </span>
              <button 
                
                onClick={() => dispatch(changeScore(dice, false))}
                href="#!" className="btn btn-danger">
                <i className="fa fa-minus" />
              </button>
            </div>
          </div>
  )
}
