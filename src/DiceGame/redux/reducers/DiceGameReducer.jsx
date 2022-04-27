import { CHANGE_SCORE, ROLL_DICE, PLAY_AGAIN } from "../types/Type";
const initialState = {
  wagerList: [
    { id: "chicken", img: "./img/chicken.png", score: 0 },
    { id: "crab", img: "./img/crab.png", score: 0 },
    { id: "deer", img: "./img/deer.png", score: 0 },
    { id: "fish", img: "./img/fish.png", score: 0 },
    { id: "gourd", img: "./img/gourd.png", score: 0 },
    { id: "shrimp", img: "./img/shrimp.png", score: 0 },
  ],
  initialScore: 1000,
  diceList: [
    { id: "fish", img: "./img/fish.png" },
    { id: "gourd", img: "./img/gourd.png" },
    { id: "shrimp", img: "./img/shrimp.png" },
  ],
};
const DiceGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SCORE: {
      let wagerListUpdate = [...state.wagerList];
      let index = wagerListUpdate.findIndex(
        (item) => item.id === action.payload.obj.id
      );
      if (index !== -1) {
        if (action.payload.flag) {
          if (state.initialScore > 0) {
            wagerListUpdate[index].score += 100;
            state.initialScore -= 100;
          }
        } else {
          if (wagerListUpdate[index].score > 0) {
            wagerListUpdate[index].score -= 100;
            state.initialScore += 100;
          }
        }
      }
      return { ...state, wagerList: wagerListUpdate };
    }
    case ROLL_DICE: {
      //create a random dice list
      let randomDiceList = [];
      for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 6);
        let newDice = state.wagerList[randomNumber];
        randomDiceList.push(newDice);
      }
      //calculate score
      let wagerListUpdate = [...state.wagerList];
      //calculate reward score
      randomDiceList.forEach((item, randomIndex) => {
          let i = wagerListUpdate.findIndex((dice, index) => dice.id === item.id);
          if( i !==-1){
              state.initialScore += wagerListUpdate[i].score * 0.5 ;
          }

      })
      console.log(state.initialScore)
      //calculate returned score 
      wagerListUpdate.forEach((item, i) =>{
        let index= randomDiceList.findIndex(dice=> item.id === dice.id);
        if( index !== -1 ){
            state.initialScore += wagerListUpdate[i].score
        }
      })
      // renew game 
      state.wagerList= state.wagerList.map(item => ({...item, score: 0}))
      return { ...state, diceList: randomDiceList };
    }
    case PLAY_AGAIN: {
      state.initialScore = 1000;
      state.wagerList = state.wagerList.map((item, index) => {
        return { ...item, score: 0 };
      });
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default DiceGameReducer;
