import React from 'react';
import styled from 'styled-components';
import homeImg from '../images/home-img.webp';
import { tablet } from '../responsive';
import { Link } from 'react-router-dom';

const HomeSection = styled.div`
    max-width: 100%;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: url(${homeImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all .5s ease-in-out;

    &:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,0.3);
        transition: all .2s linear;
    }
`

const HomeTitle = styled.h1`
        font-size: 60px;
        letter-spacing: .05em;
        padding: 30px 40px;
        color: #fff;
        margin-top: -80px;
        position: relative;
        text-shadow: 0 0 4px rgb(0 0 0 / 40%);
        ${tablet({fontSize: 40})};
        text-align: center;
`

const HomeButton = styled.button`
        padding: 15px 30px;
        outline: none;
        color: #fff;
        background: #DF362D;
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: .1em;
        font-weight: bold;
        font-size: 16px;
        transition: all .5s ease;
        position: relative;
        font-family: 'Muli';
        ${tablet({fontSize: 14})};

        &:hover {
            background: #9c2721;
        }
`

const Landing = () => {
    return (
        <HomeSection>
            <HomeTitle>Furniture Essentials</HomeTitle>
            <Link to='/products/furniture'>
                <HomeButton>Shop Now</HomeButton>
            </Link>
        </HomeSection>
    )
}

export default Landing
