import React from 'react';
import styled from 'styled-components';
import locationImg from '../images/location.jpg';
import { mobile } from '../responsive';

const LocationContainer = styled.div`
    width: 100%;
    max-height: 500px;
    position: relative;
    padding: 80px;
    background-image: url(${locationImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 100px;
`

const LocationForm = styled.div`
    width: 310px;
    height: 350px;
    background-color: #f8f8f8;
    text-align: center;
    padding: 40px;
    ${mobile({marginLeft: -47})}
`
const LocationTitle = styled.h2`
    font-size: 16px;
    font-weight: 600;
`
const LocationAddress = styled.p`
    margin-top: 20px;
    font-size: 18px;
    color: #6d6d6d;
`
const LocationHours = styled.div`
    margin-top: 20px;
    color: #6d6d6d;
    font-size: 18px;
    display: flex;
    flex-direction: column;
`
const Hours = styled.span`
    padding: 3px;
`

const Direction = styled.a`
    text-decoration: none;
`

const Button = styled.button`
    padding: 15px 30px;
    outline: none;
    color: #fff;
    border: 1px solid #df362d;
    color: #df362d;
    background: transparent;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: .1em;
    font-weight: bold;
    font-size: 14px;
    transition: all .5s ease;
    position: relative;
    font-family: 'Muli';
    margin-top: 20px;

    &:hover {
        background: none;
        border: 1px solid #9c2721;
        color: #9c2721;
    }
`

const Location = () => {
    return (
        <LocationContainer>
            <LocationForm>
                <LocationTitle>Our Store</LocationTitle>
                <LocationAddress>1 Shields Ave, Davis, CA 95616</LocationAddress>
                <LocationHours>
                    <Hours>Mon-Fri, 10am - 9pm</Hours>
                    <Hours>Saturday, 11am - 9pm</Hours>
                    <Hours>Sunday, 11am - 5pm</Hours>
                </LocationHours>
                <Direction target='_blank' href='https://www.google.com/maps/place/1+Shields+Ave,+Davis,+CA+95616/@38.5424339,-121.7516497,17z/data=!3m1!4b1!4m5!3m4!1s0x8085290f0d180c55:0xc2aaa0f68af1c44e!8m2!3d38.5424297!4d-121.749461'><Button>Get Directions</Button></Direction>
            </LocationForm>
        </LocationContainer>
    )
}

export default Location
