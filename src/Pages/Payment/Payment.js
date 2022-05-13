import React,{useEffect, useState} from 'react'
import { useStateValue } from '../../StateProvider';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import {CardElement, useStripe, useElements,} from '@stripe/react-stripe-js'
import { emphasize } from '@mui/material';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../Components/Reducer/Reducer';
import axios from '../../Components/axios';
import {useHistory} from 'react-router-dom'
import './Payment.css'



function Payment() {
    const [{basket}, dispatch] = useStateValue();
    const history = useHistory()

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)
   

    useEffect(() =>{
        const getClientSecret = async () =>{
            const response = await axios({
                method : 'post',
                url: `/payments/create?total=${getBasketTotal(basket) *100 }`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('scret', clientSecret)

    const handleSubmit = async(event) =>{
        event.preventDefault();
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({PaymentIntent})=>{
            setSucceeded(true)
            setError(null)
            setProcessing(false)
            history.replace('/')
        })
    }

    const handleChange= (event) =>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

  return (
    <div className='payment'>
        <div className='payment_container'>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                    <p>abc@gmail.com</p>
                    <p>556 east hill rd</p>
                    <p>Calgary, AB</p>
                </div>
            </div>
            <hr></hr>
            <div className='payment_section'>
                <div className='payment_title'>
                </div>
                <div className='payment_items'>
                    {/* {basket.map(item=>(
                        <CheckoutPage
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        
                        />
                    ))} */}
                </div>
            </div>
            <div className='payment_section'>
                <div className='payment_title'><h3>Payment Method</h3></div>
                <div className='payment_details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className='payment_price'>
                                <p>Order Total</p>
                                <CurrencyFormat
                                renterText={(value)=>(
                
                                    <h3>Order Total: {value}</h3>
                                    
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                
                                
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing? <p>Processing </p>:"Buy Now"}</span>
                                </button>
                            </div>
                        </form>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Payment