import { React, useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userRequest } from '../requestMethods';
import styled from 'styled-components';
import { tablet } from '../responsive';
import { Link } from 'react-router-dom';

const PurchaseContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`

const Button = styled.button`
    padding: 15px 20px;
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
    ${tablet({fontSize: 14})};

    &:hover {
        background: #9c2721;
    }
`

const PurchaseSuccessful = () => {

    const location = useLocation();
    const data = location.state.stripeData;
    const cart = location.state.cart;
    const currentUser = useSelector((state) => state.currentUser);
    const [orderId, setOrderId] = useState(null);

    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await userRequest.post('/orders', {
                    userId: currentUser._id,
                    products: cart.products.map((item) => ({
                        productId: item._id,
                        quantity: item._quantity,
                    })),
                    amount: cart.total,
                    address: data.billing_details.address,  
                });
                setOrderId(res.data._id);
            } catch {}
        };
        data && createOrder()
    }, [cart, data, currentUser]);

    return (
        <PurchaseContainer>
            {orderId 
                ? `Order has been created successfully. Your order number is ${orderId}`
                : `Your order is being prepared. Thank you for choosing Rainforest`}
                <Link to='/'>
                    <Button>Homepage</Button>
                </Link>
        </PurchaseContainer>
    )
}

export default PurchaseSuccessful;