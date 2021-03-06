import React, { Component } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStateValue } from '../../StateProvider';
import './ProductDetails.css'
import OtherProducts from '../OtherProducts/OtherProducts';


function ProductDetails(props) {

    const [productData, setProductData] = useState([]);
    const [{basket}, dispatch] = useStateValue();

    console.log('this is the cart', basket)

    let {id} = useParams()

    
    const fetchData = () =>{
       axios.get(`https://fakestoreapi.com/products/${id}`) 
        .then((data)=>{
            setProductData(data.data)
        })
    }

    

    const addToCart = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:productData.id,
                title:productData.title,
                image:productData.image,
                price:productData.price,
                description:productData.description,
            }
        })
    }

    useEffect (()=>{
        fetchData()
    },[])
 
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
        <>
      <div className='productdetail_container'>
          <Box sx={{ width: '100%' }}>
                            <Stack spacing={2}>
                                <Item>
                                <h1>{productData.title}</h1>
                                <h4>{productData.category}</h4>
                                <img src={productData.image}></img>
                                <div className='price'><span><p>${productData.price}</p></span></div>
                                <p>{productData.description}</p>
                                <button onClick={addToCart}>Add to Cart</button>
                                </Item>
                            </Stack>
                        </Box>
            
            {/* <p>Rating : {this.state.singleProductDetail.rating.rate}</p> */}
      </div>
      
      </>
    )
  
}

export default ProductDetails

