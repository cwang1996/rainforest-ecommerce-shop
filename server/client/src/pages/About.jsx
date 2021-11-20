import React, { useState } from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import News from '../components/News';
import Menu from '../components/Menu';

const AboutContainer = styled.div`
    width: 100%;
    height: 100%;
`

const Wrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    text-align: center;
    padding-top: 70px;
    width: 100%;
    font-weight: normal;
    font-size: 25px;
    letter-spacing: .1em;
    text-transform: uppercase;
`

const Desc = styled.p`
    font-size: 18px;
    color: #6d6d6d;
    text-align: center;
    margin: 40px 0px;
    padding: 0px 10px;
`

const Image = styled.img`
    width: 100%;
    height: auto;
`

const About = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AboutContainer>
            <Announcement />
            <Navbar toggle={toggle} />
            <Menu isOpen={isOpen} toggle={toggle}/>
            <Wrapper>
                <Title>About Us</Title>
                <Desc>The vision of our craft begins with our designers who imagine the most relevant designs of today and tomorrow. It then extends to our manufacturers, who acquire only the finest of materials to craft our furniture. It ends with our delivery to you, ensuring the highest quality at the lowest price. </Desc>
                <Image src='https://cdn.shopify.com/s/files/1/1915/7383/files/POCKET_LIFT_4800x2700_2048x2048_c6966bf7-91c8-462c-9e53-eb4c53f6d096_1024x1024.jpg?v=1492027746' />
            </Wrapper>
            <News />
            <Footer />
        </AboutContainer>
    )
}

export default About
