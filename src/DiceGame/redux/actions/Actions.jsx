import {CHANGE_SCORE, ROLL_DICE, PLAY_AGAIN} from '../types/Type'
export const changeScore = (obj, flag)=>({
    type: CHANGE_SCORE,
    payload: {obj, flag}
})
export const rollDice = ()=>({
    type: ROLL_DICE,
})
export const playAgain = ()=>({
    type: PLAY_AGAIN
})