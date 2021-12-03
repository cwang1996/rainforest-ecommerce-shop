import {useState, React} from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';
import ProductsAll from '../components/ProductsAll';
import News from '../components/News';
import { useLocation } from 'react-router';
import Menu from '../components/Menu';


const ProductListContainer = styled.div`
    width: 100%;
`

const Title = styled.h1`
    text-align: center;
    padding-top: 70px;
    padding-bottom: 50px;
    width: 100%;
    font-weight: normal;
    font-size: 25px;
    letter-spacing: .1em;
    text-transform: uppercase;
`

const FilterContainer = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
`

const Filter = styled.div`
    padding: 10px 10px;
    text-align: ${props => props.type === 'right' && 'right'};
    width: 100%;
    z-index: 2;
`

const FilterText = styled.span`
    font-size: 15px;
`

const Select = styled.select`
    padding: 10px 0px;
    font-size: 13px;
    color: #6d6d6d;
    border: none;
    outline: none;
    cursor: pointer;
`

const Option = styled.option`
    font-family: 'Muli';
    font-size: 16px;
    color: #8C95A8;
`

const ProductList = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const location = useLocation();
    const cat = (location.pathname.split('/')[2]);
    const [ sort, setSort ] = useState('newest');
    const [ filter, setFilters ] = useState({});

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filter,
            [e.target.name]: value.toLowerCase(),
        })
    }

    return (
        <ProductListContainer>
            <Announcement />
            <Navbar toggle={toggle} />
            <Menu isOpen={isOpen} toggle={toggle}/>
            <Title>Furniture</Title>
            <FilterContainer>
                <Filter type='left'>
                    <FilterText>Filter By</FilterText>
                    <Select name='type' onChange={handleFilters}>
                        <Option disabled selected></Option>
                        <Option>Beds</Option>
                        <Option>Sofas</Option>
                        <Option>Chairs</Option>
                        <Option>Show All</Option>
                    </Select>
                </Filter>
                <Filter type='right'>
                    <FilterText>Sort By</FilterText>
                    <Select onChange={e=>setSort(e.target.value)}>
                        <Option disabled selected></Option>
                        <Option value='newest'>Newest</Option>
                        <Option value='asc'>Price (asc)</Option>
                        <Option value='desc'>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <ProductsAll cat={cat} sort={sort} filter={filter} />
            <News />
            <Footer />
        </ProductListContainer>
    )
}

export default ProductList
