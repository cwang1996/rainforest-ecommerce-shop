import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';

const ProductSection = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    padding-bottom: 70px;
    margin-top: -50px;
`

const ProductsContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
`

const ProductsAll = ({cat, sort, filter}) => {

    const [ products, setProducts ] = useState([]);
    const [ filteredProducts, setFilteredProducts ] = useState([])

    useEffect(() =>{
        const getProducts = async () => {
            try{
                const res = await axios.get(
                    cat 
                        // ? `http://localhost:5000/api/products?category=${cat}`
                        // : 'http://localhost:5000/api/products'
                        ? `/api/products?category=${cat}`
                        : '/api/products'
                    )
                    setProducts(res.data);
            } catch(err) {
            }
        };
        getProducts();
    }, [cat])

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter((item) =>
                Object.entries(filter).every(([key, value]) => 
                    item[key].includes(value)
                )
            )
        )
    }, [products, cat, filter])

    useEffect(()=> {
        if((sort === 'newest')) {
            setFilteredProducts((prev) => 
                [...prev].sort((a,b) => a.createdAt - b.createdAt)
            );
        } else if ((sort === 'asc')) {
            setFilteredProducts((prev) => 
                [...prev].sort((a,b) => a.price - b.price)
            )
        } else {
            setFilteredProducts((prev) => 
                [...prev].sort((a,b) => b.price - a.price)
            )
        }
    }, [sort])

    return (
        <>
            <ProductSection>
                <ProductsContainer>
                    {cat 
                    ? filteredProducts.map((item) => 
                        <Product item={item} key={item.id} />)
                    : products.map((item) => <Product item={item} key={item.id} />)}
                </ProductsContainer>
            </ProductSection>
        </>
    )
}

export default ProductsAll
