import React from "react";
import GameStyle from "./GameStyle.css"
import Header from "./Header";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

export default function DiceGame() {
  return (
    <div id="diceGame">
      {/* Header */}
      <Header />
      {/* MainContainer  */}
      <div className="container-fluid">
        <div className="row">
          <LeftContainer />
          <RightContainer />
        </div>
      </div>
    </div>
  );
}
