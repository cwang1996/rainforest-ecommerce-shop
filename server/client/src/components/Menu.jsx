import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`

const MenuList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const MenuItem = styled.li`
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid #dadce0;
    color: #162950;
    &:hover {
        color: #234785;
    }
`

const Menu = ({ isOpen }) => {

    return (
        <MenuContainer isOpen={isOpen}>
            <MenuList>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <MenuItem>Home</MenuItem>
                </Link>
                <Link to='/about' style={{textDecoration: 'none'}}>
                    <MenuItem>About</MenuItem>
                </Link>
                <Link to='/products/furniture' style={{textDecoration: 'none'}}>
                    <MenuItem>Products</MenuItem>
                </Link>
                <Link to='/contact'  style={{textDecoration: 'none'}}>
                    <MenuItem>Contact</MenuItem>
                </Link>
            </MenuList>
        </MenuContainer>
    )
}

export default Menu
