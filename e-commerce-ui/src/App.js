import './App.css';
import React from 'react'
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTheTop from './components/ScrollToTop';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import PurchaseSuccessful from './pages/PurchaseSuccessful';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <ScrollToTheTop />
          <Home />
        </Route>
        <Route path='/products/:category'>
          <ScrollToTheTop />
          <ProductList />
        </Route>
        <Route path='/product/:id'>
          <ScrollToTheTop />
          <ProductPage />
        </Route>
        <Route path='/cart'>
          <ScrollToTheTop />
          <Cart />
        </Route>
        <Route path='/login'>
          <ScrollToTheTop />
          <Login />
        </Route>
        <Route path='/register'>
          <ScrollToTheTop />
          <Register />
        </Route>
        <Route path='/about'>
          <ScrollToTheTop />
          <About/>
        </Route>
        <Route path='/confirmation'>
          <ScrollToTheTop />
          <PurchaseSuccessful />
        </Route>
        <Route path='/contact'>
          <ScrollToTheTop />
          <Contact />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

