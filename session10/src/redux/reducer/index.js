import {combineReducers} from 'redux'
import { productReducer } from './productReducer'
import { cartReducer } from './cartReducer'

export const reducers = combineReducers({
    // Khai báo các reducers / state
    products: productReducer,
    carts: cartReducer
})