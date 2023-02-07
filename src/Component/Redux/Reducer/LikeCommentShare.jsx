import { LIKE,COMMENT,SHARE,FOLLOW } from "../Constants/ListConstant"

const initialState = 0;

const changeNumber = (state = initialState,action)=>{
      switch (action.type){
        case "LIKE" : return state +1
        case "COMMENT": return state -1
        case "SHARE": return state -1
        case "COMMENT": return state -1
        case "FOLLOW": return state -1
        default: return state;

      }
}
export default changeNumber;