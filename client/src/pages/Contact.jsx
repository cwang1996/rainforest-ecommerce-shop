import { React, useRef, useState } from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar';
import News from '../components/News';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import emailjs from 'emailjs-com';
import Menu from '../components/Menu';

const ContactContainer = styled.div`
    width: 100%;
    height: 100%;
`

const Wrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
`

const Title = styled.h1`
    text-align: center;
    padding-top: 70px;
    padding-bottom: 40px;
    width: 100%;
    font-weight: normal;
    font-size: 25px;
    letter-spacing: .1em;
    text-transform: uppercase;
`

const Desc = styled.p`
    text-align: center;
    font-size: 16px;
    letter-spacing: .1em;
    margin-bottom: 40px;
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
    font-size: 16px;
    color: #6d6d6d;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    padding: 13px 16px;
    color: #6d6d6d;
    font-size: 16px;
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
    margin-bottom: 70px;
    margin-top: 20px;
    ${mobile ({width: 150})}

    &:hover {
        background: #9c2721;
    }   
`

const Contact = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_d23rzkl', 'template_yocn4a8', formRef.current, 'user_otRdW8ErcJvrRqEfk6XzR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <ContactContainer>
            <Announcement />
            <Navbar toggle={toggle} />
            <Menu isOpen={isOpen} toggle={toggle}/>
            <Wrapper>
                <Title>Contact Us</Title>
                <Desc>Leave us a message! We are always happy to help and assist with any questions that you may have regarding our products.</Desc>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <Label>Name</Label>
                        <Input type='text' name='user_name' />
                        <Label>Email</Label>
                        <Input type='text' name='user_email' />
                        <Label>Message</Label>
                        <TextArea rows='5' style={{resize: 'none'}} name='message'/>
                        <Button>Send</Button>
                    </Form>
            </Wrapper>
            <News />
            <Footer />
        </ContactContainer>
    )
}

export default Contact
