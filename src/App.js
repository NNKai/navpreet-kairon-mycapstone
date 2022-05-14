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
import Payment from './Pages/Payment/Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Sidebar from './Components/Sidebar/Sidebar'

const promise = loadStripe('pk_test_51KyR35AGGXbHgiGgiycNo8oK29y7INYcg3GKJUeMOIufd2aY1pPxzSHkZb45v0v8Db2xuKAXRpjTioiw2x2TMnMz00EIIyKnw9')

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
      
      <Switch>
        
      <Route exact path='/login' component={LogInPage}/>
      <Route exact path='/'>
      <Sidebar />
        <Header/>
        <HomePage/>
      </Route>
      <Route exact path='/products'> <Sidebar /><Header/><Product/></Route> 
      <Route exact path='/products/:id' ><Sidebar /><Header/><ProductDetails/></Route>
      <Route exact path='/category' ><Sidebar /><Header/><CategoryList/></Route>
      <Route exact path='/category/:category' ><Sidebar /><Header/><CategoryPage/></Route>
      <Route exact path='/checkoutpage'><Sidebar /><Header/><CheckoutPage/>  </Route> 
      <Route exact path='/payment'><Sidebar /><Header/><Elements stripe = {promise}><Payment/></Elements></Route>
      
      </Switch>
      </BrowserRouter>
    </div>
  );

}

export default App;
