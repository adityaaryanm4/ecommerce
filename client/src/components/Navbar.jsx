import React from 'react'
import styled from 'styled-components'
import { Badge } from 'antd';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { mobile } from '../responsive';

const Container = styled.div`
  height:60px;
  ${mobile({ height:"50px" })}
  `
const Wrapper = styled.div`
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding:"20px 0" })}
  
  `
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center
  
  `
const Language = styled.span`
  font-size: 18px;
  cursor: pointer;
  ${mobile({ display:"none" })}
  `
const SearchContainer = styled.span`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px
  `
const Input = styled.input`
  border-style: none;
  `
const Center = styled.div`
  flex: 1;
  text-align: center
  `
const Logo = styled.h1`
  font-weight: bold;
  margin: 0;
  `
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  `
const MenuItem = styled.div`
font-size: 20px;
cursor: pointer;
margin-left: 16px;
  `
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>

          <SearchContainer>
            <Input />
            <SearchOutlined />
          </SearchContainer>

        </Left>

        <Center><Logo>KARA.</Logo></Center>

        <Right>
          <MenuItem>
            Register
          </MenuItem>
          <MenuItem>
            Log In
          </MenuItem>
          <MenuItem>
            <Badge count={5}>
              <ShoppingCartOutlined style={{ fontSize: '28px' }} />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar