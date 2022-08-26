import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import styled from 'styled-components'
import { userRequest } from '../requestMethods';
import {Link} from "react-router-dom"

const Container = styled.div`
padding: 50px;
text-align:center;
font-size: 20px;
font-weight: 600;
`
const Button = styled.button`
padding: 10px;
border: none;
border-radius: 5px;
background-color: teal;
margin-top: 20px;
`
const Success = () => {
  const products = useSelector(state => state.cart.products)
  const user = useSelector(state => state.user.currentUser)
  const [orderId, setOrderId] = useState("")

  useEffect(() => {

    const paymentIntent = JSON.parse(localStorage.getItem("paymentIntent"))

    const makeRequest = async () => {
      try {
        const res = (await userRequest.post("/api/order", { products, paymentIntent, userId: user._id })).data
        setOrderId(res._id)
      } catch (error) {
        console.log(error)
      }

    }
    makeRequest()

  }, [products, user])

  return (
    <Container>
      <div>{orderId ? `Order has been created successfully. Your order number is ${orderId}` : "Successfull. Your order is being prepared..."}</div>
      <Button><Link to="/" style={{textDecoration:"none" , color:"white"}}>Go To Homepage</Link></Button>
    </Container >
  )
}

export default Success