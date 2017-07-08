import {combineReducers} from 'redux'
import ProductReducer from './ProductReducer'
import PermissionReducer from './PermissionReducer'

const allReducers = combineReducers({
  products: ProductReducer,
  permissions: PermissionReducer
})

export default allReducers
