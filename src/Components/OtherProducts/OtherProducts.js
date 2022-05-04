import React from 'react'
import { Link } from 'react-router-dom'
import './OtherProducts.css'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import HeaderPic from '../../assets/images/headerpic.png'

const OtherProducts = (similarProduct) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
    
  return (
    <div>
      <h4 className='linkToProducts'><Link to='/products'>View All Products</Link></h4>
      <div className='similarProducts'>
        {similarProduct.similarProduct.map((data)=>
            <div className='dataContainer'><Link to={'/products/' + data.id}>
               <Stack><Item><div className='heroProductDetails'>
                <h1>{data.title}</h1>
                <h4>{data.category}</h4>
                <img src={data.image}></img>
                <div className='price'><p>${data.price}</p></div>
                {/* <button onClick={addToCart}>Add to Cart</button> */}
            </div></Item> </Stack></Link>
            </div>
        )}
        </div>
    </div>
  )
}

export default OtherProducts