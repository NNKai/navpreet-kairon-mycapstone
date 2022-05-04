import React from 'react'
import './FeaturedProduct.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import HeaderPic from '../../assets/images/headerpic.png'

const FeaturedProduct = (heroProduct) => {
    let addToCart = function sayhello(){
        console.log("add to cart")
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
      <div className='heroProduct'>
          <img className='heroProductImg' src={HeaderPic}></img>
      <div className='heroProductTitle'><Stack><Item><h1>Featured Product</h1></Item></Stack></div>
     
     <Link to={`/products/` + heroProduct.heroProduct.id}> <div className='heroProductMobile'><Stack><Item>
        <div className='heroProductDetails'>
            <h1>{heroProduct.heroProduct.title}</h1>
            <h4>{heroProduct.heroProduct.category}</h4>
            <img src={heroProduct.heroProduct.image}></img>
            {/* <p className='heroProductDescription'>{heroProduct.heroProduct.description}</p> */}
            <div className='price'><p>${heroProduct.heroProduct.price}</p></div>
        </div></Item></Stack>
        
    </div></Link>
    {/* <div className='heroProductDesktop'>
        <div className='heroProductDetails'>
            <h1>{heroProduct.heroProduct.title}</h1>
            <h4>{heroProduct.heroProduct.category}</h4>
            <p>{heroProduct.heroProduct.description}</p>
            <p>{heroProduct.heroProduct.price}</p>
        </div>
        <div className='heroProductImage'>
        <img src={heroProduct.heroProduct.image}></img>
        </div>
    </div> */}
    </div>
  )
}

export default FeaturedProduct