import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
    border: ${props => props.type === "filled" && "none"};
    border-radius: 5px;
    
`
const TopTexts = styled.div`
    
`
const TopText = styled.span`
    text-decoration: underline;
    margin: 0 10px;
    cursor: pointer;
`
const Bottom = styled.div`
    
`
const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CONTINUE SHOPPING</TopButton>
                </Top>
                <Bottom></Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart