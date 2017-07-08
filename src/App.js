import React, { Component } from 'react'
import CreateProductForm from './Components/CreateProductForm'
import {connect} from 'react-redux'
import {fetchProducts, deleteProduct, updateProduct, submitProduct} from './Actions/ProductActions'
import {fetchPermissions} from './Actions/PermissionActions'
import ProductsTable from './Components/ProductsTable'
import logo from './logo.svg'
import './App.css'


function mapStateToProps ({products, permissions}) {
  return {
    products: products.toJS(),
    permissions: permissions.toJS()
  }
}

class App extends Component {

  componentDidMount () {
    this.props.dispatch(fetchProducts())
    this.props.dispatch(fetchPermissions())
  }


submitProduct = (product) => {
  this.props.dispatch(submitProduct(product))
}

deleteProduct = (product) => {
  this.props.dispatch(deleteProduct(product))
}

updateProduct = (oldProduct, newProduct) => {
  this.props.dispatch(updateProduct(oldProduct, newProduct))
}

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>SG coding challenge</h2>
        </div>

        <div className='App-body'>
          <CreateProductForm
            permissions={this.props.permissions}
            submitProduct={this.submitProduct}
            />

          <ProductsTable
            permissions={this.props.permissions}
            deleteProduct={this.deleteProduct}
            updateProduct={this.updateProduct}
            products={this.props.products}
          />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
