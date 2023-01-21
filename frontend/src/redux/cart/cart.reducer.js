import { GETCART } from "./cart.type"

const initState = {
  cart : []
}

const authReducer = (state=initState,action)=>{
    switch(action.type){
        case GETCART : return {
            ...state ,
            cart : [...state.cart,action]
        }
        default : return state
    }
}

export default authReducer