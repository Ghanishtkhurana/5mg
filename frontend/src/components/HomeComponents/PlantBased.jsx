import React from 'react'
import axios from "axios"
import {backendSite} from "../backendSiteLink/backendSite"
import { useEffect } from 'react'

const PlantBased = () => {
    const plantsBasedData=()=>{
        axios.get(`${backendSite}/plant`)
          .then((res)=> {
        console.log("plantsBasedData:",res.data);
     })
        .catch(function (error) {
         console.log(error);
     })
    }
    useEffect(()=>{
        plantsBasedData()
    },[])
  return (
    <div>
      PlantBased
    </div>
  )
}

export default PlantBased
