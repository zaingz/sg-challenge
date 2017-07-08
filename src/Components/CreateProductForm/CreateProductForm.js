import React, { Component } from 'react'
import './CreateProductForm.css'

class CreateProductForm extends Component {

  handleSubmitProduct = () => {
    const name = document.getElementById('name')
    const price = document.getElementById('price')
    const currency = document.getElementById('currency')
    this.props.submitProduct({name: name.value, price: price.value, currency: currency.value})
    name.value = price.value = currency.value = ''
  }

  render() {
    return (
      <div className="CreateProductForm">
        <h3>Create new Product</h3>
        <div className="CreateProductForm-input">
          <input id="name" type="text" placeholder="Product Name"/>
          <input id="price" type="number" placeholder="Product Price" />
          <input id="currency" type="text" placeholder="Product Currency"/>
        </div>
        <div className="CreateProductForm-button">
          {this.props.permissions.includes('CREATE') ? <button onClick={this.handleSubmitProduct} >Submit</button> : null}
        </div>
        <hr />
      </div>
    )
  }


}



export default CreateProductForm
