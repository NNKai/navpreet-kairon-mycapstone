import axios from 'axios'
import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import './Products.css'

export class Products extends Component {
    state = {
        allProduct : [],
    }
    
    fetchProduct(){
        axios.get('https://fakestoreapi.com/products')
        .then((data) =>{
            console.log(data.data)
            this.setState({
                allProduct : data.data
            })
        })
    }

   
    addToCart(){
        console.log("add to cart")
    }
    
    componentDidMount (){
        this.fetchProduct()
        
    }
  render() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
      <div className='big_productContainer'>
          {/* <div className='productTitle'><Stack><Item><h1>Our Products</h1></Item></Stack></div> */}
          <div className='product_outsideContainer'>{this.state.allProduct.map((data)=>{
            return <div className='product__Container'>
                        <Box sx={{ width: '100%' }}>
                            <Stack spacing={2}>
                            <Link to={`./products/` + data.id}>
                                <Item>
                                    <h1>{data.title}</h1>
                                    <img src={data.image}></img>
                                </Item>
                            </Link>
                            </Stack>
                        </Box>
            </div>
        })}</div>
      </div>
    )
  }
}

export default Products