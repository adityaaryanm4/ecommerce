import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 100wh;
    background: linear-gradient(
        rgba(255,255,255,0.5),rgba(255,255,255,0.5)
        ),url(https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)
        no-repeat center;
    background-size: cover;
    display : flex;
    justify-content: center;
    align-items: center;

`
const Wrapper = styled.div`
    width: 40%;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;
    margin: 20px 10px 0px 0px ;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;

`
const Button = styled.button`
    border: none;
    padding: 10px;
    color: white;
    background-color: teal;
    width: 40%;
    border-radius: 5px;
`
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input type="name" placeholder="first name"></Input>
                    <Input type="name" placeholder="last name"></Input>
                    <Input type="name" placeholder="username"></Input>
                    <Input type="email" placeholder="email"></Input>
                    <Input type="password" placeholder="Password"></Input>
                    <Input type="password" placeholder="confirm password"></Input>
                    <Agreement> By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register