
import Immutable from 'immutable'

export default function (state = Immutable.fromJS([]), action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return Immutable.fromJS(action.payload)
    case 'SUBMIT_PRODUCT':
      const newProduct = Immutable.fromJS([action.payload])
      return state.concat(newProduct)
    case 'DELETE_PRODUCT':
      return state.delete(state.findIndex(i => i.get('name') === action.payload.name))
    case 'UPDATE_PRODUCT':
      return state.update(state.findIndex(i => i.get('name') === action.payload.oldProduct.name), (oldValue) => Immutable.fromJS(action.payload.newProduct))
  }
  return state
}
