import { React, useState } from 'react';
import styled from 'styled-components';
import { KeyboardArrowLeft, KeyboardArrowRight} from '@material-ui/icons';
import { tablet } from '../responsive';

const SliderContainer = styled.div`
    width: 100%;
    max-height: 600px;
    display: flex;
    overflow: hidden;
    position: relative;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.7;
    background: transparent;
    color: #fff;
    z-index: 1;
`

const SliderWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: relative;

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

const ImgContainer = styled.div`
    height: 100%;
    width: 100vw;
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
    display: block;
`

const Info = styled.div`
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`

const Text = styled.h2`
    color: #fff;
    font-size: 55px;
    ${tablet({fontSize: 30})}
    margin-bottom: 10px;
    text-shadow: 0 0 4px rgb(0 0 0 / 40%);
    width: 100%;
`

const Desc = styled.span`
    color: #fff;
    font-size: 25px;
    ${tablet({fontSize: 16})}
    text-shadow: 0 0 4px rgb(0 0 0 / 40%);
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1)
        } else {
            setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0)
        }
    }

    return (
        <SliderContainer>
            <Arrow direction='left' onClick={ () => handleClick('left')}>
                <KeyboardArrowLeft style={{fontSize: 60}}/>
            </Arrow>
            <Arrow direction='right' onClick={ () => handleClick('right')}>
                <KeyboardArrowRight style={{fontSize: 60}} />
            </Arrow>
            <SliderWrapper slideIndex = {slideIndex}> 
                    <Slide>
                    <ImgContainer>
                        <Image src='https://images.pexels.com/photos/879010/pexels-photo-879010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                    </ImgContainer>
                        <Info>
                            <Text>Create Paradise</Text>
                            <Desc>Designing exclusively for our customers</Desc>
                        </Info>
                    </Slide>

                    <Slide>
                    <ImgContainer>
                        <Image src='https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                    </ImgContainer>
                        <Info>
                            <Text>Escape Into Your Fantasy</Text>
                            <Desc>Live out your dreams at the comfort of your home</Desc>
                        </Info>
                    </Slide>                  
            </SliderWrapper>

        </SliderContainer>
    )
}

export default Slider
