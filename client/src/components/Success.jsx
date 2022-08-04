import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Success = () => {
  const [data,setData] = useState({})
  useEffect(()=>{
    const paymentIntent = JSON.parse(localStorage.getItem("paymentIntent"))
    console.log(paymentIntent)
    try {
      const res = (axios.get(`/api/checkout/${paymentIntent}`)).data
      setData(res)
      
    } catch (error) {
      console.log(error)
    }
  },[])
  return (
    <div>Success
      {data && console.log(data)}
    </div>
  )
}

export default Success