import axios from "axios"
import { LOGIN } from "./cart.type"

export const reg =(formstate)=>async(dispatch)=>{
    console.log("working")
    const res =  await axios.post("http://localhost:4001/users/login",formstate)
    console.log("res data=>",res.data);
    return dispatch({type : LOGIN,payload:res.data})
}
