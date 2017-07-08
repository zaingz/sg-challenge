import React, { Component } from 'react'
import ProductRow from './ProductRow'
import './ProductsTable.css'

class ProductsTable extends Component {

  constructor (props){
    super(props)
    this.state = {products: this.props.products}
  }

  componentWillReceiveProps(nextProps) {
    this.setState({products: nextProps.products})
  }

  onProductDelete = (product) => {
    this.props.deleteProduct(product)
  }

  onProductUpdate = (oldProduct, newProduct) => {
    this.props.updateProduct(oldProduct, newProduct)
  }

  render () {

let tbody = null
    if (this.props.permissions.includes('READ')) {
      tbody = this.state.products.map((p, i) => {
        return (
          <ProductRow
          permissions = {this.props.permissions}
          onProductUpdate = {this.onProductUpdate}
          onProductDelete={this.onProductDelete}
          product={p}
          key={p.name} />
        )
      })
    }

    return (
      <div className='ProductsTable'>
        <h3>List of Products</h3>
        <div className='ProductsTable-list'>

          <table className='container'>
            <thead>
              <tr>
                <th><h1>Name</h1></th>
                <th><h1>Price</h1></th>
                <th><h1>Currency</h1></th>
                <th><h1>Actions</h1></th>
              </tr>
            </thead>
            <tbody>
              {tbody}
            </tbody>
          </table>
        </div>

      </div>
    )
  }
}

export default ProductsTable
