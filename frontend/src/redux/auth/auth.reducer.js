import { LOGIN, LOGOUT} from "./auth.type"

let token = localStorage.getItem("Token")
console.log("Token=>",token);
const initState = {
    isAuth : false ,
    token : !!token
}

const authReducer = (state=initState,action)=>{
    switch(action.type){
        case LOGIN : {
            localStorage.setItem("token",action.payload.token)
            return {
                ...state,
                isAuth : true,
                token : action.payload.token
            }
        }
        case LOGOUT : {
            localStorage.removeItem("token")
            return {
                ...state,
                isAuth : false,
                token : ""
            }
        }
        default : return state
    }
}

export default authReducer