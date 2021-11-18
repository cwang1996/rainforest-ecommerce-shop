import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import News from '../components/News';
import { mobile } from '../responsive';

const RegisterContainer = styled.div`
    width: 100%;
    height: 100%;
`

const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

const Title = styled.h1`
    text-align: center;
    padding-top: 70px;
    padding-bottom: 20px;
    width: 100%;
    font-weight: normal;
    font-size: 25px;
    letter-spacing: .1em;
    text-transform: uppercase;
`

const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    ${mobile({width: 350})}
`

const Label = styled.span`
    margin-bottom: 5px;
    color: #6d6d6d;
    font-size: 18px;
`

const Input = styled.input`
    width: 100%;
    margin-bottom: 20px;
    padding: 13px 16px;
`

const Button = styled.button`
    padding: 15px 30px;
    outline: none;
    color: #fff;
    background: #DF362D;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: .1em;
    font-weight: bold;
    font-size: 14px;
    transition: all .5s ease;
    position: relative;
    font-family: 'Muli';
    width: 30%;
    margin: 0 auto;
    margin-bottom: 70px;
    margin-top: 20px;
    ${mobile ({width: 150})}

    &:hover {
        background: #9c2721;
    }   
`

const Register = () => {
    return (
        <RegisterContainer>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>Create An Account</Title>
                <Form>
                    <Label>First Name</Label>
                    <Input />
                    <Label>Last Name</Label>
                    <Input />
                    <Label>Email</Label>
                    <Input />
                    <Label>Password</Label>
                    <Input />
                    <Button>Create</Button>
                </Form>
            </Wrapper>
            <News />
            <Footer />
        </RegisterContainer>
    )
}

export default Register
