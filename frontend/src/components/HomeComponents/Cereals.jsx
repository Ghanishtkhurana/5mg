import React from 'react'
import axios from "axios"
import {backendSite} from "../backendSiteLink/backendSite"
import { useEffect } from 'react'

const Cereals = () => {
    const cerealsData=()=>{
        axios.get(`${backendSite}/cereal`)
          .then((res)=> {
        console.log("cerealsData:",res.data);
     })
        .catch(function (error) {
         console.log(error);
     })
    }
    useEffect(()=>{
        cerealsData()
    },[])
  return (
    <div>
      Cereals
    </div>
  )
}

export default Cereals
