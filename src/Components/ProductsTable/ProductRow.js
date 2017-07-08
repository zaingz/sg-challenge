import React, { Component } from 'react'
import InlineEdit from 'react-edit-inline'


class ProductRow extends Component {
  constructor(props){
    super(props)
    const {product} = this.props
    this.state = {update: false, productName: product.name, productPrice: product.price, productCurrency: product.currency}
  }

  onDelete = (e) => {
    var result = window.confirm(`Do you want to delete '${this.props.product.name}'?`);
    if (result) {
        //Logic to delete the item
        this.props.onProductDelete(this.props.product)
    }
  }

  onUpdate = (e) => {

    if (!this.state.update){
      alert('You can update value by clicking on it.');
    }
    else {
      this.props.onProductUpdate(this.props.product,
        {name: this.state.productName, price: this.state.productPrice, currency: this.state.productCurrency})
    }
    this.setState({update: !this.state.update})
  }


  nameChange = (data) => {
    this.setState({...data})
  }

  priceChange = (data) => {
    this.setState({...data})
  }
  currencyChnage = (data) => {
    this.setState({...data})
  }

  render() {
      return (<tr>
        <td><InlineEdit
            className={this.state.update ? 'inline-true': 'inline-false'}
            text={this.state.productName}
            paramName="productName"
          change={this.nameChange}/></td>
        <td><InlineEdit
            className={this.state.update ? 'inline-true': 'inline-false'}
            text={''+this.state.productPrice}
            paramName="productPrice"
          change={this.priceChange}/></td>
        <td>
          <InlineEdit
              className={this.state.update ? 'inline-true': 'inline-false'}
              text={this.state.productCurrency}
              paramName="productCurrency"
            change={this.currencyChnage}/>
        </td>
        <td>
          {this.props.permissions.includes('DELETE') ? <span onClick={this.onDelete} className="button">Delete</span> : null}

          {this.props.permissions.includes('UPDATE') ?<span onClick={this.onUpdate} className="button">{this.state.update ? 'Save': 'Update'}</span>:null }
        </td>
      </tr>)
  }
}

export default ProductRow
