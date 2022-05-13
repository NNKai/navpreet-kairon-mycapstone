import React, { Component } from 'react';
import './CheckoutPage.css'
import Subtotal from '../../Components/Subtotal/Subtotal';
import CartProduct from '../../Components/CartProduct/CartProduct';
import { useStateValue } from '../../StateProvider';


function CheckoutPage ()  {
    const [{basket}, dispatch] = useStateValue();

    return (
      <div className='checkoutPage'>
          <div className='checkout__left'>
              <div className='cart__container'>
                    <h2 className='checkout__title'>
                        Your Shopping Basket
                    </h2>
                {basket.map((data)=>{
                    return <CartProduct
                            id = {data.id}
                            title = {data.title}
                            image= {data.image}
                            price = {data.price}
                            />
                })}
              </div>
          </div>
          <div className='checkout__right'>
              <Subtotal/>
          </div>
      </div>
    )
  
}

export default CheckoutPage