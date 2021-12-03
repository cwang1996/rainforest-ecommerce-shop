import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import News from '../components/News';
import { mobile, tablet } from '../responsive';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { Link, useHistory } from 'react-router-dom';
import { userRequest } from '../requestMethods';
import Menu from '../components/Menu';

const KEY = 'pk_test_51JtJc7BxCRgOKKURT5I6rLl2NWX9IfgdrUJ4UI79VcVW10t8HuoxEhOcHdOhFBxtbN2AWxyM5qpYqiTitHLnIknO00yRXVlwRI'

const CartContainer = styled.div`
    width: 100%;
    height: 100%;
`

const Wrapper = styled.div`
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
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

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
    padding-top: 15px;
    border-bottom: 1px solid #dadce0;
    margin: 0 auto;
`

const TopText = styled.span`
    border-bottom: 1px solid #da2f0c;
    cursor: pointer;
    margin: 0px 10px;
    text-align: center;
    margin-top: -20px;
    padding-bottom: 5px;
    color: #Da2f0c;
    font-size: 16px;
    font-weight: 600;
    margin: 0 auto;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
    ${mobile({flexDirection: 'column'})}
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    ${mobile({flexDirection: 'column'})}
`

const Image = styled.img`
    width: 200px;
    height: 150px;
    object-fit: cover;
    ${tablet({width: 150, height: 180})}
    ${mobile({width: '100%'})}
    transition: all .5s ease;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    ${mobile({width: '100%', flexDirection: 'row', paddingTop: 5})};
`

const ProductName = styled.span`
    font-size: 25px;
    color: #162950;
    font-weight: 400;
    line-height: 1.2;
    width: 200px;
    margin-top: -20px;
    ${tablet({fontSize: 20, width: 100, marginTop: 18})};
    ${mobile({width: '100%', height: 30})};
`

// const ProductRemove = styled.span`
//     border-bottom: 0.5px solid #da2f0c;
//     width: 58px;  
//     color: #Da2f0c;
//     font-size: 16px;
//     font-weight: 600;
//     padding-bottom: 5px;
//     ${mobile({height: 25})}
//     cursor: pointer;
// `

const PriceDetail = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Total = styled.span`
    margin-bottom: 5px;
    font-size: 16px;
    color: #6d6d6d;
`

const ProductAmountContainer = styled.div`
    margin: 20px 0px;
    margin-bottom: 20px;
    width: 200px;
`

const Quantity = styled.span`
    font-size: 14px;
    color: #6d6d6d;
`

const ProductAmount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid #dadce0;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    padding: 10px 20px;
`

const ProductPrice = styled.div`
    font-size: 25px;
    color: #6d6d6d;
`

const ProductFooter = styled.div`
    width: 100%;
    text-align: right;
    justify-content: end;
    border-top: 1px solid #dadce0;
    ${mobile({justifyContent: 'center', textAlign: 'center'})}
`

const CartSubtotal = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    margin-top: 40px;
    ${mobile({justifyContent: 'center'})}
`

const Subtotal = styled.p`
    color: #6d6d6d;
    font-size: 20px;
    margin-right: 20px;
`

const SubtotalPrice = styled.span`
    color: #6d6d6d;
    font-size: 20px;
`

const Taxes = styled.p`
    margin-top: 20px;
    color: #6d6d6d;
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
    margin-top: 20px;

    &:hover {
        background: #9c2721;
    }
`

const Cart = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const cart = useSelector((state) => state.cart)
    const [stripeToken, setStripeToken] = useState(null)
    const history = useHistory();

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
            try{
                const res = await userRequest.post('/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: cart.total*100
                });
                    history.push('/confirmation', { 
                        stripeData: res.data, 
                        products: cart, });
                    history.go(0)
            } catch{}
        };
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, history, cart])

    return (
        <CartContainer>
            <Announcement />
            <Navbar toggle={toggle} />
            <Menu isOpen={isOpen} toggle={toggle}/>
                <Wrapper>
                    <Title>Your Cart</Title>
                        <Top>
                            <Link to='/products/furniture' style={{textDecoration: 'none'}}>
                                <TopText>Continue Shopping</TopText>
                            </Link>
                        </Top>
                    <Bottom>
                        <Info>
                            {cart.products.map(product => (
                                <Product>
                                <ProductDetail>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName>{product.title}</ProductName>
                                        <ProductAmountContainer>
                                            <Quantity>Quantity</Quantity>
                                            <ProductAmount>{product.quantity}</ProductAmount>
                                        </ProductAmountContainer>
                                        {/* <ProductRemove >Remove</ProductRemove> */}
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <Total>Total Price</Total>
                                    <ProductPrice>${Math.round(product.price * product.quantity * 100) / 100}</ProductPrice>
                                </PriceDetail>
                            </Product>
                            ))}
                        </Info>
                    </Bottom>
                    <ProductFooter>
                        <CartSubtotal>
                            <Subtotal>Subtotal</Subtotal>
                            <SubtotalPrice>${Math.round(cart.total * 100) / 100}</SubtotalPrice>
                        </CartSubtotal>
                        <Taxes>Taxes and shipping calculated at checkout</Taxes>
                        <StripeCheckout
                            name = 'Rainforest'
                            image = 'https://cdn-icons-png.flaticon.com/512/327/327372.png'
                            billingAddress
                            shippingAddress
                            description = {`Your total is $${cart.total}`}
                            amount = {cart.total*100}
                            token= {onToken}
                            stripeKey= {KEY}
                            >
                            <Button>Checkout</Button>
                        </StripeCheckout>
                    </ProductFooter>
                </Wrapper>
            <News />
            <Footer />
        </CartContainer>
    )
}

export default Cart
