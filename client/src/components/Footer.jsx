import React from 'react'
import styled from 'styled-components'
import { InstagramOutlined, FacebookFilled, TwitterOutlined, PhoneFilled, MailOutlined, HomeFilled } from '@ant-design/icons';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    padding: 20px;
    ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
    flex: 1;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    color: white;
    background-color: #${props => props.bg};
    border-radius: 50%;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;

`
const Center = styled.div`
    flex:1;
    ${mobile({ display: "none" })}
`
const Title = styled.h1`
margin-bottom: 20px;
`
const List = styled.ul`
padding: 0;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
list-style: none;
margin-bottom: 10px;
width: 50%;
`
const Right = styled.div`
    flex:1;
    ${mobile({ backgroundColor: "#fff8f8",marginTop:"30px" })}
`
const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`
const Image = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>KARA.</Logo>
                <Desc>There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.</Desc>
                <SocialContainer>
                    <SocialIcon bg="3b5999"><FacebookFilled /></SocialIcon>
                    <SocialIcon bg="e4405f"><InstagramOutlined /></SocialIcon>
                    <SocialIcon bg="55acee"><TwitterOutlined /></SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><HomeFilled style={{ marginRight: "10px" }} />622 Dixie Path , South Tobinchester 98336</ContactItem>
                <ContactItem><PhoneFilled style={{ transform: "rotateY(180deg)", marginRight: "10px" }} /> +1 234 56 78</ContactItem>
                <ContactItem><MailOutlined style={{ marginRight: "10px" }} /> contact@aditya.aryan</ContactItem>
                <Image src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment"/>
            </Right>
        </Container>
    )
}

export default Footer