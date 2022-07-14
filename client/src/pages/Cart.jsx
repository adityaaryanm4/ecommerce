import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { mobile } from '../responsive'

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
    ${mobile({margin: "15px 3px"})}
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
    border: ${props => props.type === "filled" && "none"};
    border-radius: 5px;
    ${mobile({padding: "8px"})}
    
`
const TopTexts = styled.div`
    ${mobile({display: "none"})}
`
const TopText = styled.span`
    text-decoration: underline;
    margin: 0 10px;
    cursor: pointer;
    
`
const Bottom = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`
const Info = styled.div`
flex: 3
`
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
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
${mobile({margin: "6px 15px"})}

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
${mobile({marginTop: "10px"})}
`
const SummaryTitle = styled.h1`
font-weight: 200;
font-size: 30px;
`
const SummaryItem = styled.div`
display: flex;
justify-content: space-between;
margin: 15px 0;
font-size: ${props=> props.type === "total" && "24px"};
font-weight: ${props=> props.type === "total" && "500"};
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
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="product-image"></Image>
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>ID:</b> 93813718293</ProductId>
                                    <ProductColor bg="black" />
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetails>
                            <Price>
                                <ProductAmount>
                                    <Remove>-</Remove>
                                    <Amount>1</Amount>
                                    <Add>+</Add>
                                </ProductAmount>
                                <ProductPrice>
                                    $20
                                </ProductPrice>
                            </Price>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetails>
                                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="product-image"></Image>
                                <Details>
                                    <ProductName><b>Product:</b> HAKURA T-SHIRT</ProductName>
                                    <ProductId><b>ID:</b> 93813718293</ProductId>
                                    <ProductColor bg="gray" />
                                    <ProductSize><b>Size:</b> M</ProductSize>
                                </Details>
                            </ProductDetails>
                            <Price>
                                <ProductAmount>
                                    <Remove>-</Remove>
                                    <Amount>1</Amount>
                                    <Add>+</Add>
                                </ProductAmount>
                                <ProductPrice>
                                    $30
                                </ProductPrice>
                            </Price>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryText>Subtotal</SummaryText>
                            <SummaryPrice>$80</SummaryPrice>
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
                            <SummaryPrice>$ 80</SummaryPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart