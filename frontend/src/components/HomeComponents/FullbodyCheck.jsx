import React from 'react'
import axios from "axios"
import {backendSite} from "../backendSiteLink/backendSite"
import { useEffect } from 'react'

const FullbodyCheck = () => {

    const getFullBodyData=()=>{
        axios.get(`${backendSite}/fullBodyCheck`)
          .then((res)=> {
        console.log("fullbodydata:",res.data);
     })
        .catch(function (error) {
         console.log(error);
     })
    }
    useEffect(()=>{
        getFullBodyData()
    },[])

  return (
    <div>
      fulll bodyy
    </div>
  )
}

export default FullbodyCheck
