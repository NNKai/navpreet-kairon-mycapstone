import React, { Component } from 'react'
import axios from 'axios'
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct'
import Products from '../../Pages/Products/Products'
import OtherProducts from '../OtherProducts/OtherProducts'
import { Link } from 'react-router-dom'
import '../../App.css'


export class HomePage extends Component {
    state = {
        featuredProduct : [],
        otherProducts :[]
    }

    fetchFeaturedProduct(){
        axios.get('https://fakestoreapi.com/products')
        .then((data) =>{
            console.log(data.data)
            this.setState({
                featuredProduct : data.data[19],
            })
        })
    }

    otherProducts(){
        axios.get('https://fakestoreapi.com/products?limit=6')
        .then((data1) =>{
            console.log(data1.data)
            this.setState({
                otherProducts : data1.data
            })
        })
    }

    componentDidMount (){
        this.fetchFeaturedProduct()
        this.otherProducts()
    }

  render() {
    return (
        <>
            <div className="big_productContainer">
          <FeaturedProduct heroProduct={this.state.featuredProduct}/>
          <hr/>
          <OtherProducts similarProduct={this.state.otherProducts}/>
          </div>
          </>
    )
  }
}

export default HomePage