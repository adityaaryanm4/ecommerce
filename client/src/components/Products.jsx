import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`
const Products = () => {

    return (
        <Container>
            {popularProducts.map(popularProduct => {
                return (
                    <Product key={popularProduct.id} img={popularProduct.img} />

                )
            })}
        </Container>

    )
}

export default Products