import React from 'react'
import { categories } from '../data'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    height: 70vh;
    padding: 20px 20px 20px 10px;
    ${mobile({ padding:"0 20px", flexDirection:"column",height: "auto"  })}
`
const Wrapper = styled.div`
flex: 1;
margin-left: 10px;
position: relative;
${mobile({ margin:"10px 0 0" })}
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({ height:"35vh" })}
`
const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`
const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
font-weight: 600;
cursor: pointer;
`

const Categories = () => {
    
  return (
    <Container>
{categories.map(category=>{
    return (
        <Wrapper key={category.id}>
            <Image src={category.img} />
            <Info>
                <Title>{category.title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Wrapper>
    )
})}
    </Container>
  )
}

export default Categories