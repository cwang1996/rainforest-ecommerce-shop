import styled from'styled-components';
import { trendingProducts } from '../data';
import Product from './Product';
import { tablet } from '../responsive';
import { Link } from 'react-router-dom';

const ProductSection = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
`

const ProductsContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    padding: 20px 0px;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
`

const ProductTitle = styled.div`
    text-align: center;
    padding-top: 70px;
    width: 100%;
    font-weight: normal;
    font-size: 25px;
    letter-spacing: .1em;
    text-transform: uppercase;
`

const ViewAll = styled.button`
    padding: 15px 30px;
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
    font-family: 'Muli';
    margin-top: 50px;
    margin-bottom: 70px;
    ${tablet({fontSize: 14})};

    &:hover {
        background: #9c2721;
    }
`

const Products = () => {
    return (
        <>
            <ProductSection>
                <ProductTitle>Trending Products</ProductTitle>
                <ProductsContainer>
                    {trendingProducts.map((item) => (
                        <Product item={item} key={item.id} />
                    ))}
                </ProductsContainer>
                <Link to='/products/furniture'>
                    <ViewAll>View All</ViewAll>
                </Link>
            </ProductSection>
        </>
    )
}

export default Products
