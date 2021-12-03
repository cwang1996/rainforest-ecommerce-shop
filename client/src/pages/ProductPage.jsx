import { useState, useEffect, React } from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import News from '../components/News';
import { tablet } from '../responsive';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import { Add, ContactSupportTwoTone, Remove } from '@material-ui/icons';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { Link, useHistory} from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { useSelector } from 'react-redux';
import { userRequest } from '../requestMethods';

const KEY = 'pk_test_51JtJc7BxCRgOKKURT5I6rLl2NWX9IfgdrUJ4UI79VcVW10t8HuoxEhOcHdOhFBxtbN2AWxyM5qpYqiTitHLnIknO00yRXVlwRI'

const ProductPageContainer = styled.div`
    width: 100%;
`

const Wrapper = styled.div`
    margin: 0 auto;
    padding: 70px 0px;
    max-width: 1300px;
    display: flex;
    ${tablet({flexDirection: 'column'})};
`

const ImgContainer = styled.div`
    flex: 1;
    text-align: center;
`

const Image = styled.img`
    max-width: 100%;
    max-height: 50vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 10px 50px;
`

const Title = styled.h1`
    font-size: 30px;
    color: #162950;
    margin-bottom: 10px;
    font-weight: 600;
    line-height: 1.2;
`

// const Desc = styled.p`
//     margin: 20px 0px;
//     font-size: 16px;
//     color: #6D6D6D;
// `

const Price = styled.span`
    font-size: 20px;
    color: #6D6D6D;
`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    padding: 20px 0px;
`

const Quantity = styled.span`
    font-size: 18px;
    width: 100%;
    margin-bottom: 15px;
    color: #6d6d6d;
`

const AmountContainer = styled.div`
    width: 100%;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid #dadce0;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    padding: 10px 30px;
`

const Button = styled.button`
    padding: 15px 30px;
    border: none;
    outline: none;
    color: #fff;
    background: #DF362D;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: .1em;
    font-weight: bold;
    font-size: 14px;
    transition: all .5s ease;
    position: relative;
    font-family: 'Muli';
    width: 100%;
    margin-top: 20px;
    border: ${(props) => props.type === 'filled' && '1px solid #df362d'};
    background: ${(props) => props.type === 'filled' ? 'transparent' : '#df362d'};
    color: ${(props) => props.type === 'filled' && '#df362d'};

    &:hover {
        border: ${(props) => props.type === 'filled' && '1px solid #9c2721'};
        color: ${(props) => props.type === 'filled' && '#9c2721'};
        background: ${(props) => props.type === 'filled' ? 'none' : '#9c2721'};
    }   
`

const BackButton = styled.div`
    width: 300px;
    margin: 0 auto;
`

const AddMessage = styled.div`
    position: absolute;
    top: 150px;
    right: 10px;
    font-size: 15px;
    font-family: 'Muli';
    text-transform: uppercase;
    background: transparent;
    border: 1px solid #df362d;
    padding: 10px 20px;
    color: #df362d;
    letter-spacing: .1em;
    transition: all .2s ease;
    opacity: ${({ addMess }) => (addMess ? 1 : 0)};
`

const ProductPage = () => {

    const location = useLocation();
    const id = (location.pathname.split('/')[2]);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const [disable, setDisable] = useState(false);

    const [addMess, setAddMess] = useState(false);

    const showAddMess = () => {
        setAddMess(!addMess);

        setTimeout(() => {
            setAddMess(addMess);
        }, 2000)
    }

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get('/products/find/' + id)
                setProduct(res.data);
            } catch {}
        };
        getProduct();
    }, [id])

    const handleQuantity = (type) => {
        if(type === 'decrease'){
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }

    const handleClick = () => {
        dispatch(
            addProduct({ ...product, quantity })
        ) 
        setDisable(true);
    }

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
                    amount: (product.price * quantity) * 100
                });
                    history.push('/confirmation', { 
                        stripeData: res.data, 
                        products: cart });
            } catch{}
        };
        stripeToken && makeRequest();
    }, [stripeToken, history, cart, product.price, quantity])

    return (
        <ProductPageContainer>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Price>${product.price}</Price>
                    <AddContainer>
                        <Quantity>Quantity</Quantity>
                            <AmountContainer>
                                <Remove onClick={() => handleQuantity('decrease')} style={{paddingTop: 10, cursor: 'pointer'}} />
                            <Amount>{quantity}</Amount>
                                <Add onClick={() => handleQuantity('increase')} style={{paddingTop: 10, cursor: 'pointer'}} />
                        </AmountContainer>
                    </AddContainer>
                    <Button disabled={disable} type='filled' onClick={() => {handleClick(); showAddMess();}}>Add to Cart</Button>
                    <AddMessage addMess={addMess}>Added to cart!</AddMessage>
                    <StripeCheckout
                                name = 'Rainforest'
                                image = 'https://cdn-icons-png.flaticon.com/512/327/327372.png'
                                billingAddress
                                shippingAddress
                                description = {`Your total is $${product.price * quantity}`}
                                amount = {(product.price * quantity) * 100}
                                token= {onToken}
                                stripeKey= {KEY}
                                >
                        <Button>Purchase Now</Button>
                    </StripeCheckout>
                    {/* <Desc>{product.desc}</Desc> */}
                </InfoContainer>
            </Wrapper>
            <BackButton>
                <Link to='/products/furniture'>
                    <Button type='filled'>Back to products</Button>
                </Link>
            </BackButton>
            <News />
            <Footer />
        </ProductPageContainer>
    )
}

export default ProductPage
