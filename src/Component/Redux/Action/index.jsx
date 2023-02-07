import { LIKE,COMMENT,SHARE,FOLLOW } from "../Constants/ListConstant"

export const likeNum = (id) => async(dispatch,getState)=> {
    dispatch ({
        type: LIKE,
        payload:id
    })
   
}
export const commentNum = (id) => async(dispatch,getState)=> {
    dispatch ({
        type: COMMENT,
        payload:id
    })
   
}
export const shareNum = (id) => async(dispatch,getState)=> {
    dispatch ({
        type: SHARE,
        payload:id
    })
   
}
export const followNum = (id) => async(dispatch,getState)=> {
    dispatch ({
        type: FOLLOW,
        payload:id
    })
   
}

