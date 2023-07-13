import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import {actionType} from '../constant/action-type'

export const reducers = combineReducers({
    products: productReducer,
    currentProduct: (state = {}, action) => {
        switch(action.type) {
            case actionType.CUR_INIT:
                return {...action.payload};
            default:
                return state;
        }
    }
    //categories: categoriesReducer
})