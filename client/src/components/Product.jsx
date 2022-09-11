import React from 'react'
import styled from 'styled-components'
import { SearchOutlined, ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom"

const Container = styled.div`
    background-color: #f5fbfd;
    min-width: 280px;
    height: 350px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 5px;
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        opacity: 1;
    }
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;;

    &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
    }
`
const Product = ({ product }) => {
    return (
        <Container>
            <Circle />
            <Image src={product.img} alt="popularProduct" />
            <Info>
                <Link style={{color:"#212529"}} to={`/product/${product._id}`}>
                    <Icon>  <SearchOutlined style={{ fontSize: '22px' }}/>  </Icon>
                </Link>
                <Icon>  <ShoppingCartOutlined style={{ fontSize: '22px' }}/>  </Icon>
                <Icon>  <HeartOutlined style={{ fontSize: '22px' }}/> </Icon>
            </Info>
        </Container>

    )
}

export default Product