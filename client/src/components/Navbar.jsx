import { Badge } from '@material-ui/core'
import { Search, ShoppingCartRounded } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive"


const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
    
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({ display: "none" })}
`

const Language = styled.span `
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}

`
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 30px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "22px" })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`
const Menu = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{color:"grey", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>AGAIN.</Logo>
            </Center>
            <Right>
                <Menu>Register</Menu>
                <Menu>Log in</Menu>
                <Menu>
                    <Badge badgeContent={4} color="primary">
                    <ShoppingCartRounded />
                    </Badge>
                </Menu>
            </Right>
        
        </Wrapper>
    </Container>
  )
}

export default Navbar