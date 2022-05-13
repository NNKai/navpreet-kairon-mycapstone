const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors');
const { response } = require("express");

const stripe = require('stripe')('sk_test_51KyR35AGGXbHgiGgr0VM1ig7R4PWnNlRdSzrKwLiysRBnQl8mnCup6OcNBFY9e31ifIHbYD2LGiMEHBfmhy495VI00zNgSkbR5')

const app = express();

app.use(cors({origin:true}));
app.use(express.json());

app.get('/',(request,response)=> response.status(200).send('helloworld'))

app.post('/payments/create', async(request, response) =>{
    const total = request.query.total
    console.log('payment request', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"usd",
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

exports.api = functions.https.onRequest(app)
