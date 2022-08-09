import React from 'react'
import styled from 'styled-components'
import { Badge } from 'antd';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { mobile } from '../responsive';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Container = styled.div`
  height:60px;
  ${mobile({ height: "50px" })}
  `
const Wrapper = styled.div`
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "15px 0" })}
  
  `
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center
  
  `
const Language = styled.span`
  font-size: 18px;
  cursor: pointer;
  ${mobile({ display: "none" })}
  `
const SearchContainer = styled.span`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px
  ${mobile({ padding: "2px" })}
  
  `
const Input = styled.input`
  border-style: none;
  &:focus{
    outline: none;
  }
  ${mobile({ width: "60px" })}
  `
const Center = styled.div`
  flex: 1;
  text-align: center
  `
const Logo = styled.h1`
  font-weight: bold;
  margin: 0;
  ${mobile({ fontSize: "24px" })}
  `
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: "2" })}
  `
const MenuItem = styled.div`
font-size: 20px;
cursor: pointer;
margin-left: 16px;
${mobile({ fontSize: "16px", marginLeft: "5px" })}
  `
const Navbar = () => {
  const cartQuantity = useSelector(state => state.cart.cartQuantity)
  const user = useSelector(state => state.user.currentUser)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>

          <SearchContainer>
            <Input placeholder="Search" />
            <SearchOutlined />
          </SearchContainer>

        </Left>

        <Center><Logo>KARA.</Logo></Center>

        <Right>

          {user && <MenuItem> {user.username} </MenuItem>}
          <MenuItem>
            <Link to="/register" style={{ textDecoration: "none", color: "black" }}>Register</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login" style={{ textDecoration: "none", color: "black" }}>Log In</Link>
          </MenuItem>
          <MenuItem>
            { /* <Badge  showZero color="#108ee9">
          <ShoppingCartOutlined />
          </Badge> */}
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              cart: {cartQuantity}
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar