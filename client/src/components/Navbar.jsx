import React from 'react'
import styled from 'styled-components'
import { SearchOutlined } from '@ant-design/icons';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { logout } from '../store/userSlice';

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
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: "2" })}
  `
const MenuItem = styled.div`
font-size: 20px;
cursor: pointer;
margin-left: 16px;
${mobile({ fontSize: "16px", marginLeft: "5px" })}
  `
const MenuWrapper = styled.div`
display: flex;
align-items: center;
`
const Navbar = () => {

  const dispatch = useDispatch()
  const cartQuantity = useSelector(state => state.cart.cartQuantity)
  const user = useSelector(state => state.user.currentUser)

  const handleLogout = () => {
    dispatch(logout())
    window.location.href = "/login"
  }

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

          {user ?
            <MenuWrapper>
              <MenuItem
                style={{ fontWeight: "bold", fontSize: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <PersonIcon style={{ marginRight: "5px" }} />
                {user.username}
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                Log Out
              </MenuItem>
            </MenuWrapper>
            :
            <MenuWrapper>
              <MenuItem>
                <Link to="/register" style={{ textDecoration: "none", color: "black" }}>Register</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/login" style={{ textDecoration: "none", color: "black" }}>Log In</Link>
              </MenuItem>
            </MenuWrapper>
          }
          <MenuItem>
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              <Badge badgeContent={cartQuantity} showZero={true} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar