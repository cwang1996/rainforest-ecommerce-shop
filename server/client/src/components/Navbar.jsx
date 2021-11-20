import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchOutlined, ShoppingCartOutlined, AccountCircleOutlined } from '@material-ui/icons';
import { FaBars } from 'react-icons/fa';
import { Badge } from '@material-ui/core';
import { mobile, tablet } from '../responsive';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = styled.div`
    width: 100%;
    height: 80px;
    background-color: #fff;
    z-index: 999;
    border-bottom: 1px solid #dadce0;
`

const NavbarContainer = styled.div`
    padding: 20px 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const LeftNav = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const CenterNav = styled.div`
    flex: 1;
`

const Logo = styled.h1`
    font-size: 30px;
    text-transform: uppercase;
    letter-spacing: .01em;
    color: #172D52;
    font-weight: 900;
    text-align: center;
    ${mobile({marginLeft: -8})}

    &:hover {
        transform: scale(1.1);
    }
`

const RightNav = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({marginLeft: 8})}
`

const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 5px;
    color: #172D52;
    max-width: 35px;
    margin-top: 2px;

    &:hover {
        color: #234785;
        transform: scale(1.1);
    }
`
const CenterList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 380px;
    margin: 0 auto;
    ${tablet({display: 'none'})};
`

const ListItem = styled.li`
    padding: 0px 12px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    text-align: center;
    color: #162950;
    &:hover {
        color: #234785;
        transform: scale(1.1);
    }
    
    text-decoration: none;
    color: #111;
`

const NavItem = styled(Link)`
    font-size: 20px;
    color: #172D52;
    margin-left: 8px;
    margin-top: 5px;
    display: none;
    ${tablet({display: 'block'})}
    &:hover {
        color: #234785;
        transform: scale(1.1);
    }
`

const Navbar = ({ toggle }) => {

    const quantity = useSelector(state => state.cart.quantity)

    return (
        <Nav>
            <NavbarContainer>
                <LeftNav>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <Logo>Rainforest</Logo>
                    </Link>
                </LeftNav>
                <CenterNav>
                    <CenterList>
                        <Link to='/' style={{textDecoration: 'none'}}>
                            <ListItem>Home</ListItem>
                        </Link>
                        <Link to='/about' style={{textDecoration: 'none'}}>
                            <ListItem>About</ListItem>
                        </Link>
                        <Link to='/products/furniture' style={{textDecoration: 'none'}}>
                            <ListItem>Products</ListItem>
                        </Link>
                        <Link to='/contact'  style={{textDecoration: 'none'}}>
                            <ListItem>Contact</ListItem>
                        </Link>
                    </CenterList>
                </CenterNav>
                <RightNav>
                    <MenuItem>
                            <SearchOutlined style={{fontSize: 25}}/>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/login' style={{color: '#172d52'}}>
                            <AccountCircleOutlined style={{fontSize: 25}}/>
                        </Link>
                    </MenuItem>
                    <Link to='/cart'>
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined style={{fontSize: 25, marginTop: -5}}/>
                            </Badge>
                        </MenuItem>
                    </Link>
                    <NavItem>
                        <FaBars onClick={toggle} />
                    </NavItem>
                </RightNav>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
