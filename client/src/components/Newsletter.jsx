import React from 'react'
import styled from 'styled-components'
import { SendOutlined } from '@ant-design/icons';

const Container = styled.div`
   height: 60vh;
   background-color: #fcf5f5;
   align-items: center;
   display: flex;
   justify-content: center;
   flex-direction: column;
`
const Title = styled.h1`
   font-size: 70px;
   margin-bottom:20px
`
const Desc = styled.p`
   font-size: 24px;
   font-weight: 300;
   margin-bottom: 20px;
`
const InputBox = styled.div`
   background-color: white;
   width: 50%;
   height: 40px;
   border: 1px solid lightgray;
   display: flex;
   justify-content: space-between;
`
const Input = styled.input`
    border:none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
   border:none;
   background-color: teal;
   flex: 1;
   color: white;
   font-size: 23px;
   display: flex;
   justify-content: center;
   align-items: center;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>  Newsletter  </Title>
            <Desc>Get timely updates from your favourite products</Desc>
            <InputBox>
                <Input placeholder="Your email"></Input>
                <Button><SendOutlined /></Button>
            </InputBox>
        </Container>
    )
}

export default Newsletter