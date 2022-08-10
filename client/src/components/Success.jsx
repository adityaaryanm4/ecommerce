import React, { useState, useEffect } from 'react'
import {useSelector} from "react-redux"
import { userRequest } from '../requestMethods';

const Success = () => {
  const products = useSelector(state => state.cart.products)
  const user = useSelector(state => state.user.currentUser) 
  useEffect(()=>{

    const paymentIntent = JSON.parse(localStorage.getItem("paymentIntent"))

    const makeRequest = async()=>{
      try {
        const res = (await userRequest.post("/api/order",{products,paymentIntent,userId:user._id })).data
        console.log(res)
        
      } catch (error) {
        console.log(error)
      }
      
    }
    makeRequest()
   
  },[])
  
  return (
    <div>Success
    </div>
  )
}

export default Success