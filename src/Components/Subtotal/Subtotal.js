import React, { Component } from 'react'
import CurrencyForm from 'react-currency-format'
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../Reducer/Reducer';
import {useHistory} from 'react-router-dom'



function Subtotal() {
    const history = useHistory()
    const [{basket}, dispatch] = useStateValue();
  
    return (
        <div className='subtotal'>
          <CurrencyForm
           renderText = {(value)=>(
               <>
               <p>Subtotal({basket.length} items):<strong>{value}</strong></p>
                </>
           )}
           decimalScale={2}
           value ={getBasketTotal(basket)}
           displayType={"text"}
           thousandSeparator={true}
           prefix={"$"}
            />

            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
  
}

export default Subtotal