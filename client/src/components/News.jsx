import React from 'react'
import styled from 'styled-components';
import { tablet } from '../responsive';

const NewsContainer = styled.div`
    height: 50vh;
    background-color: #f8e8e8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
`

const NewsWrapper = styled.div`
    max-width: 1200px;
`

const Title = styled.h1`
    text-align: center;
    width: 100%;
    font-weight: normal;
    font-size: 30px;
    letter-spacing: .1em;
    text-transform: uppercase;
    margin-bottom: 15px;
`

const Desc = styled.p`
    text-align: center;
    width: 100%;
    font-weight: normal;
    font-size: 20px;
    letter-spacing: .1em;
    text-transform: uppercase;
    margin-bottom: 30px;
    line-height: 22px;
    ${tablet({fontSize: 16})}
`

const InputContainer = styled.div`
    background-color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #dadce0;
    ${tablet({width: 350, margin: '0 auto'})}
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    font-family: 'Muli';
    font-size: 16px;
    outline: none;
`

const Button = styled.button`
    flex: 1;
    padding: 15px 20px;
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
    ${tablet({fontSize: 14})}

    &:hover {
        background: #9c2721;
    }
`


const News = () => {
    return (
        <NewsContainer>
            <NewsWrapper>
                <Title>Newsletter</Title>
                <Desc>Keep up to date with with your favorite products</Desc>
                <InputContainer>
                    <Input placeholder='Your Email'/>
                    <Button>Subscribe</Button>
                </InputContainer>
            </NewsWrapper>
        </NewsContainer>
    )
}

export default News
