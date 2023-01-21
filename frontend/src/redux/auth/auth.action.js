import axios from "axios"
import { backendSite } from "../../components/backendSiteLink/backendSite"
import { LOGIN } from "./auth.type"

export const reg =(formstate)=>async(dispatch)=>{
    console.log("working")
    const res =  await axios.post(`${backendSite}/users/login`,formstate)
    console.log("res data=>",res.data);
    return dispatch({type : LOGIN,payload:res.data})
}
