import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Item from './Items';
import Home from './Home';
import Cart from './Cart';
import data from '../data';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Card } from 'reactstrap';
import Basket from './Basket';
import { useState } from 'react';
function Main() {
 
    
    return (
      <div >
        <Header/>
        <Switch>
              <Route path='/home' component={Home} />
              <Route exact path='/order' component={Item} />
              <Redirect to="/home" />
          </Switch>
        <Footer/>
      </div>
    );
  
}

export default Main;