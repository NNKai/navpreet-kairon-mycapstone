import './App.css';
import  HomePage  from './Components/HomePage/HomePage';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Product from './Pages/Products/Products';
import { Component } from 'react';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import Header from './Components/Header/Header';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import Test from './Components/Test';
import LogInPage from './Pages/LogInPage/LogInPage';
import React, {useEffect} from 'react';
import { auth } from './Pages/LogInPage/firebase';
import {useStateValue} from './StateProvider'
import CategoryList from './Pages/CategoryList/CategoryList';


function App () {
  const [{}, dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log(authUser)
      if(authUser){

        dispatch({
          type:'SET_USER',
          user:authUser
        })

      }else {
        dispatch({
          type:'SET_USER',
          user:null
      
      
      })
      }
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path='/login' component={LogInPage}/>
      <Route exact path='/' component= {HomePage}/>
      <Route exact path='/products' component= {Product}  />
      <Route exact path='/products/:id' component= {ProductDetails}  />
      <Route exact path='/category' component= {CategoryList}  />
      <Route exact path='/category/:category' component= {CategoryPage}  />
      <Route exact path='/checkoutpage' component= {CheckoutPage}  />
      <Route exact path='/:id' component= {Test}  />
      </Switch>
      </BrowserRouter>
    </div>
  );

}

export default App;
