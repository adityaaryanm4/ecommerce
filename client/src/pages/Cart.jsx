import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    margin-top: 10px;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    ${mobile({ margin: "15px 3px" })}
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
    border: ${props => props.type === "filled" && "none"};
    border-radius: 5px;
    ${mobile({ padding: "8px" })}
    
`
const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`
const TopText = styled.span`
    text-decoration: underline;
    margin: 0 10px;
    cursor: pointer;
    
`
const Bottom = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
flex: 3
`
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`
const ProductDetails = styled.div`
display: flex;
flex: 2;
`
const Image = styled.img`
width: 200px;
`
const Details = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.bg};
`
const ProductSize = styled.span`

`
const Price = styled.span`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const ProductAmount = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 30px;
`
const Remove = styled.div`
cursor: pointer;
font-weight: 600;

`
const Amount = styled.div`

margin: 6px;
${mobile({ margin: "6px 15px" })}

`
const Add = styled.div`
cursor: pointer;
font-weight: 600;
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
`
const Hr = styled.hr`
background-color: #cecece;
height: 1px;
border: none;
`

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 70vh;
${mobile({ marginTop: "10px" })}
`
const SummaryTitle = styled.h1`
font-weight: 200;
font-size: 30px;
`
const SummaryItem = styled.div`
display: flex;
justify-content: space-between;
margin: 15px 0;
font-size: ${props => props.type === "total" && "24px"};
font-weight: ${props => props.type === "total" && "500"};
`
const SummaryText = styled.span`

`
const SummaryPrice = styled.span`

`
const Button = styled.button`
width: 100%;
padding: 10px;
border: none;
background-color: black;
color: white;
border-radius: 5px
`

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const { products, cartQuantity, cartTotal } = cart

    const handleCheckout = ()=>{
        try {
            const createSession = async () => {
                const response = (await axios.post("/api/checkout/create-checkout-session",{ products, cartQuantity, cartTotal })).data
                localStorage.setItem("paymentIntent",JSON.stringify(response.pi))
                window.location.href=response.url
            }
            createSession()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag({cartQuantity})</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {products && products.map(product => <Product key={product._id}>
                            <ProductDetails>
                                <Image src={product.img} alt="product-image"></Image>
                                <Details>
                                    <ProductName><b>Product:</b> {product.title}</ProductName>
                                    <ProductId><b>ID:</b> {product._id}</ProductId>
                                    <ProductColor bg={product.color} />
                                    <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                </Details>
                            </ProductDetails>
                            <Price>
                                <ProductAmount>
                                    <Remove>-</Remove>
                                    <Amount>{product.amount}</Amount>
                                    <Add>+</Add>
                                </ProductAmount>
                                <ProductPrice>
                                    ${product.price}
                                </ProductPrice>
                            </Price>
                        </Product>

                        )
                        }

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryText>Subtotal</SummaryText>
                            <SummaryPrice>${cartTotal}</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryText>Estimated Shipping</SummaryText>
                            <SummaryPrice>$ 5.90</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryText>Shipping Discount</SummaryText>
                            <SummaryPrice>$ -5.90</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryText>Total</SummaryText>
                            <SummaryPrice>$ {cartTotal}</SummaryPrice>
                        </SummaryItem>
                        
                            <Button onClick={handleCheckout}>CHECKOUT NOW</Button>
                        
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container >
    )
}

export default Cart