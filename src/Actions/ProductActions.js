export const fetchProducts = () => {
  return {
    type: 'FETCH_PRODUCTS',
    payload: [
      {
        'name': 'TV',
        'price': 1000,
        'currency': 'USD'
      },
      {
        'name': 'SSD',
        'price': 100,
        'currency': 'USD'
      }
    ]
  }
}

export const submitProduct = (product) => {
  return {
    type: 'SUBMIT_PRODUCT',
    payload: product
  }
}

export const deleteProduct = (product) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: product
  }
}

export const updateProduct = (oldProduct, newProduct) => {
  return {
    type: 'UPDATE_PRODUCT',
    payload: {oldProduct, newProduct}
  }
}
