import { Carousel } from 'react-bootstrap'
import React from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'

const Container = styled.div`
padding-top: 10px;

`
const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-wrap: wrap;
align-items: center;
background-color: #${(props)=> props.bg};
padding-bottom: 37px;


`
const ImgContainer = styled.div`
flex:1;
padding-right:80px;

`
const Image = styled.img`
width:550px
`
const InfoContainer = styled.div`
flex:1
`
const Title = styled.h1`
font-size:70px;
font-weight: 700;
`
const Desc = styled.p`
font-size:20px;
font-weight: 400;
letter-spacing: 3;
margin: 50px 0;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
cursor: pointer;
background-color: transparent;
`
const Slider = () => {
  return (
    <Container>
      <Carousel indicators={false} controls={false} interval={3000}>
        {sliderItems.map(sliderItem => {

          return (<Carousel.Item key={sliderItem.id}>

            <Wrapper bg={sliderItem.bg}>
              <ImgContainer>
                <Image
                  src={sliderItem.img}
                  alt="imageslide" />
              </ImgContainer>
              <InfoContainer>
                <Title>{sliderItem.title}</Title>
                <Desc>{sliderItem.desc}</Desc>
                <Button>Shop Now</Button>
              </InfoContainer>
            </Wrapper>

          </Carousel.Item>)
        })}

      </Carousel>
    </Container>

  )
}

export default Slider