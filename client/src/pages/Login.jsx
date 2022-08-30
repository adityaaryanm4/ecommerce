import React from 'react'
import { useState,useEffect } from 'react';
import styled from 'styled-components'
import { mobile } from '../responsive';
import { login } from '../store/apiCalls';
import { useDispatch, useSelector } from "react-redux"
import { errorDefault } from '../store/userSlice';

const Container = styled.div`
    height: 100vh;
    width: 100wh;
    background: linear-gradient(
        rgba(255,255,255,0.5),rgba(255,255,255,0.5)
        ),url(https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)
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
    flex-direction: column;

`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;
    margin: 10px 0 ;
    &:focus{
        outline:none
    }
`

const Button = styled.button`
    border: none;
    padding: 10px;
    color: white;
    background-color: teal;
    width: 40%;
    border-radius: 5px;
    margin-bottom: 10px;
    &:disabled{
        color:#66b2b2;
        cursor: default;
    }
`
const Link = styled.a`
margin: 5px;
text-decoration: underline;
cursor: pointer;
color: black;
&:hover{
    color: gray;
}
`
const Error = styled.div`
    color: red;
`
const Login = () => {

    const dispatch = useDispatch()
    const { isFetching, error } = useSelector(state => state.user)

    //to set "error" to "false" on refresh/reload
    useEffect(()=>{
        dispatch(errorDefault())
    },[dispatch])


    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleChange = (event) => {
        const { value, name } = event.target
        setUser({ ...user, [name]: value })
    }

    const handleClick = (event) => {

        event.preventDefault()
        login(dispatch, user)
    }

    return (
        <Container>
            <Wrapper>
                <Title>LOG IN</Title>
                <Form>
                    <Input type="email" name="email" placeholder="email" onChange={handleChange}></Input>
                    <Input type="password" name="password" placeholder="Password" onChange={handleChange}></Input>
                    <Button onClick={handleClick} disabled={isFetching}>{isFetching ? "Logging In..." : "Log In"}</Button>
                </Form>
                {error && <Error>Something went wrong...</Error>}
                <Link>FORGOT PASSWORD?</Link>
                <Link href="/register">CREATE NEW ACCOUNT</Link>
            </Wrapper>
        </Container>
    )
}

export default Login