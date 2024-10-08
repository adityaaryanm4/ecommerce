import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../responsive';
import { useState } from 'react'
import { useParams } from 'react-router-dom'


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
    ${mobile({ display: "flex", flexDirection: "column" })}
`
const Select = styled.select`
   padding: 10px;
   margin-left: 20px;
   ${mobile({ margin: "10px 0" })}
   
`
const Option = styled.option`
   
`
const ProductList = () => {

    const { category } = useParams()
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFiltersChange = (event) => {
        const { name, value } = event.target
        setFilters({ ...filters, [name]: value })
    }
    const handleSortChange = (event) => {
        const { value } = event.target
        setSort(value)
    }
    return (
        <div>
            <Announcement />
            <Navbar />
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    Filter Products
                    <Select defaultValue="Color" name="color" onChange={handleFiltersChange}>
                        <Option value="Color" disabled>Color</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name="size" onChange={handleFiltersChange}>
                        <Option defaultValue="disabled" >Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    Sort Products
                    <Select onChange={handleSortChange}>
                        <Option >Newest</Option>
                        <Option value="asc">Price(asc)</Option>
                        <Option value="desc">Price(desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductList