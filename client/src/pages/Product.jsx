import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'
import { addProduct } from '../store/cartSlice'
import { useDispatch } from "react-redux";
import { publicRequest } from '../requestMethods'


const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    ${mobile({ flexDirection: "column", padding: "20px" })}
`
const ImgContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "50vh" })}
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
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
    ${mobile({ width: "100%" })}
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
   outline: none;
`
const Option = styled.option`
   
`
const AddContainer = styled.div`
   width: 70%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   ${mobile({ width: "100%" })}
`
const AmountContainer = styled.div`
   font-weight: 600;
   font-size: 30px;
   display: flex;
   align-items: center;
`
const Add = styled.span`
   cursor: pointer
`
const Remove = styled.span`
   cursor: pointer
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
    border-radius: 5px;
    cursor: pointer;
    background-color: white;
    &:hover{
        background-color: #f8f4f4
    }
`

const Product = () => {
    const dispatch = useDispatch()
    const { _id } = useParams()
    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(true)

    const [amount, setAmount] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")

    const handleAmountChange = (type) => {
        if (type === "inc") {
            setAmount(amount + 1)
        } else {
            amount > 1 && setAmount(amount - 1)
        }
    }

    const handleAdd  = ()=>{
        dispatch(addProduct({...product,color,size,amount}))
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = (await publicRequest.get(`/api/product/find/${_id}`)).data
                setProduct(response)
                setLoader(false)

            }
            catch (error) {
                console.log(error)
                setLoader(false)
            }
        }
        fetchData()
    }, [_id])



    return (
        <div>
            <Announcement />
            <Navbar />
            {loader ? "loading..." : <Wrapper>
                <ImgContainer>
                    <Image src={product.img} alt="product-img">
                    </Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>{product.price}$</Price>
                    <FilterContainer>
                        <Filter>
                            Color:
                            {product.color.map((item) => <FilterColor color={item} key={item} onClick={() => setColor(item)} />)}
                        </Filter>
                        <Filter onChange={(event) => {
                            setSize(event.target.value)
                        }}>
                            Size:
                            <Select defaultValue="Select">
                            <option disabled value="Select">Select</option>
                                {product.size.map((item) => <Option value={item} key={item} >{item}</Option>)}
                            </Select>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleAmountChange("dec")}>-</Remove>
                            <Amount>{amount}</Amount>
                            <Add onClick={() => handleAmountChange("inc")}>+</Add>
                        </AmountContainer>
                        <Button onClick={handleAdd}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>}

            <Newsletter />
            <Footer />
        </div>
    )
}

export default Product