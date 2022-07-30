import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from "axios"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`
const Products = ({ category, filters, sort }) => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = (await axios.get(category ? `/api/product?category=${category}` : `/api/product`)).data
                setProducts(response)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts()

    }, [category])

    useEffect(() => {
        category && setFilteredProducts(
            products.filter(product => Object.entries(filters).every(([key, value]) => product[key].includes(value)))
        )

    }, [products, category, filters])

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts(prevValue => [...prevValue].sort((a, b) => a.createdAt - b.createdAt))
        } else if (sort === "asc") {
            setFilteredProducts(prevValue => [...prevValue].sort((a, b) => a.price - b.price))
        } else {
            setFilteredProducts(prevValue => [...prevValue].sort((a, b) => b.price - a.price))
        }

    }, [sort])

    return (
        <Container>
            {category ? filteredProducts.map(filteredProduct => {
                return (
                    <Product key={filteredProduct._id} product={filteredProduct} />

                )
            }) : products.slice(0, 8).map(product => {
                return (
                    <Product key={product._id} product={product} />

                )
            })}
        </Container>

    )
}

export default Products