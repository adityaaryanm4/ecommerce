import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`
const ImgContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
`
const Title = styled.h1`
font-weight: 200;
    
`
const Desc = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-size: 40px;
    font-weight: 100;
`
const FilterContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    
    background-color: ${props => props.color};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-left: 10px;
    cursor: pointer;
`
const Select = styled.select`
   padding: 10px;
   margin-left: 20px;
`
const Option = styled.option`
   
`
const AddContainer = styled.div`
   width: 70%;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const AmountContainer = styled.div`
   font-weight: 600;
   font-size: 30px;
   display: flex;
   align-items: center;
`
const Add = styled.span`
   
`
const Remove = styled.span`
   
`
const Amount = styled.span`
display: flex;
justify-content: center;
align-items: center;
   height: 30px;
   width: 30px;
   border-radius: 10px;
   border: 1px solid teal;
   margin: 0 5px;

`
const Button = styled.button`
    padding: 12px 32px;
    border: 2px solid teal;
    cursor: pointer;
    background-color: white;
    &:hover{
        background-color: #f8f4f4
    }
`

const Product = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="product-img">
                    </Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            Color:
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            Size:
                            <Select>
                                <Option disabled selected>Size</Option>
                                <Option>XS</Option>
                                <Option>S</Option>
                                <Option>M</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                            </Select>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove>-</Remove>
                            <Amount>1</Amount>
                            <Add>+</Add>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Product