import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { publicRequest } from '../requestMethods';
import { useState } from 'react';
import { useDispatch } from "react-redux"
import { loginSuccess } from '../store/userSlice';

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
    ${mobile({ width: "70%" })}
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
    &:focus{
        outline:none
    }
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

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        fName: "",
        lName: "",
        username: "",
        email: "",
        password: "",
        cPassword: "",
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    const handleFormSubmit = async (e) => {

        e.preventDefault()
        
        if (user.password === user.cPassword) {
            try {

                const res = (await publicRequest.post("/api/auth/register", user)).data
                dispatch(loginSuccess(res))
                window.location.href = "/"

            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleFormSubmit}>
                    <Input name="fName" type="name" placeholder="first name" onChange={handleChange}></Input>
                    <Input name="lName" type="name" placeholder="last name" onChange={handleChange}></Input>
                    <Input name="username" type="name" placeholder="username" onChange={handleChange}></Input>
                    <Input name="email" type="email" placeholder="email" onChange={handleChange}></Input>
                    <Input name="password" type="password" placeholder="Password" onChange={handleChange}></Input>
                    <Input name="cPassword" type="password" placeholder="confirm password" onChange={handleChange}></Input>
                    <Agreement> By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                    <Button type="submit">Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register