import React, { Component } from 'react'
import axios from 'axios'

export class CategoryPage extends Component {
    state = {
        filteredData : []
    }
    
    fetchProductCategory(){
        let filteredCategory = this.props.match.params.category
        axios.get(`https://fakestoreapi.com/products/category/${filteredCategory}`)
        .then((res)=>{
            this.setState({
                filteredData : res.data
            })
        })
    }

    componentDidMount (){
        this.fetchProductCategory()
    }
  render() {
    return (
      <div>
          {this.state.filteredData.map((data)=>
            <div key={data.id}>
              <h1>{data.title}</h1>
              <h4>{data.category}</h4>
              <p>{data.description}</p>
              <p>Price : {data.price}</p>
              <p>Rating : {data.rating.rate}</p>
              <img src={data.image}></img>
            </div>
          )}
      </div>
    )
  }
}

export default CategoryPage