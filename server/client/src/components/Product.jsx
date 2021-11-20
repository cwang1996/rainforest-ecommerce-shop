import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';

const ProductContainer = styled.div`
    margin: 5px 5px;
    min-width: 380px;
    height: 350px;
    position: relative;
    ${mobile({minWidth: 325})}
`

const Image = styled.img`
    margin-top: 50px;
    width: 100%;
    height: 75%;
    cursor: pointer;
    object-fit: cover;
    /* ${mobile({width: 325})} */
`

const Info = styled.div`
    position: absolute;
    bottom: -20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Title = styled.h2`
    font-size: 18px;
    color: #162950;
`

const Price = styled.p`
    font-size: 16px;
    color: #404040;
    margin-top: 5px;
`

const Product = ({item}) => {
    return (
    <>
        <ProductContainer>
            <Link to={`/product/${item._id}`}>
                <Image src={item.img} />
            </Link>
            <Info>
                <Title>{item.title}</Title>
                <Price>${item.price}</Price>
            </Info>
        </ProductContainer>
    </>
    )
}

export default Product
