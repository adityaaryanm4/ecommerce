import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Title = styled.h1`
    margin: 20px;
    font-weight: 600;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    font-size: 20px;
    font-weight: 600;
`
const Select = styled.select`
   padding: 10px;
   margin-left: 20px;
`
const Option = styled.option`
   
`
const ProductList = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    Filter Products
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    Sort Products
                    <Select>
                        <Option disabled selected>Newest</Option>
                        <Option>Price(asc)</Option>
                        <Option>Price(desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductList