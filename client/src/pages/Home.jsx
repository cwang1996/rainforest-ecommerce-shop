import React, { useState } from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Landing from '../components/Landing';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Footer from '../components/Footer';
import News from '../components/News';
import Location from '../components/Location';
import Menu from '../components/Menu';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Announcement />
            <Navbar toggle={toggle}/>
            <Menu isOpen={isOpen} toggle={toggle}/>
            <Landing />
            <Products />
            <Slider />
            <Categories />
            <News />
            <Location />
            <Footer />
        </div>
    )
}

export default Home
