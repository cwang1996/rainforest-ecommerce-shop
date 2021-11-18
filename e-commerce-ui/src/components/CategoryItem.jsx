import styled from 'styled-components';
import {
    Link 
} from 'react-router-dom';

const CategoryItemContainer = styled.div`
    color: #111;
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
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

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const Title = styled.h2`
    font-size: 35px;
    letter-spacing: .01em;
    margin-bottom: 30px;
    color: #fff;
    text-shadow: 0 0 4px rgb(0 0 0 / 40%);
`
const Button = styled.button`
    padding: 10px 30px;
    outline: none;
    color: #172d52;
    background: #e6e619;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: .1em;
    font-weight: bold;
    font-size: 14px;
    transition: all .5s ease;
    position: relative;
    font-family: 'Muli';
    
    &:hover {
        background: #adad12;
    }
`

const CategoryItem = ({item}) => {
    return (
        <CategoryItemContainer>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>Shop Now</Button>
                </Info>
            </Link>
        </CategoryItemContainer>
    )
}

export default CategoryItem
