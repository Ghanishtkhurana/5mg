import React from 'react'
import axios from "axios"
import {backendSite} from "../backendSiteLink/backendSite"
import { useEffect } from 'react'

const Trending = () => {
    const tredingDealsData=()=>{
        axios.get(`${backendSite}/trending`)
          .then((res)=> {
        console.log("trendingDealsData:",res.data);
     })
        .catch(function (error) {
         console.log(error);
     })
    }
    useEffect(()=>{
        tredingDealsData()
    },[])
  return (
    <div>
      trending
    </div>
  )
}

export default Trending
