import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const CategoryContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const CategoryTitle = styled.div`
    text-align: center;
    padding-top: 70px;
    padding-bottom: 45px;
    width: 100%;
    font-weight: normal;
    font-size: 25px;
    letter-spacing: .1em;
    text-transform: uppercase;
`

const Categories = () => {
    return  <>
                <CategoryTitle>Collections</CategoryTitle>
                <CategoryContainer>
                        {categories.map(item => (
                            <CategoryItem item={item} key={item.id}/>
                        ))}
                </CategoryContainer>
            </>
};

export default Categories
