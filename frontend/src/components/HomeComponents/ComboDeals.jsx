import React from 'react'
import axios from "axios"
import {backendSite} from "../backendSiteLink/backendSite"
import { useEffect } from 'react'

const ComboDeals = () => {
    const getComboDealsData=()=>{
        axios.get(`${backendSite}/comboDeals`)
          .then((res)=> {
        console.log("combodealsData:",res.data);
     })
        .catch(function (error) {
         console.log(error);
     })
    }
    useEffect(()=>{
        getComboDealsData()
    },[])
  return (
    <div>
      Combodeals
    </div>
  )
}

export default ComboDeals
