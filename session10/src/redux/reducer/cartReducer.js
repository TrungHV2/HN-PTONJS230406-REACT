import {actionType} from '../action'

const initState = [];

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.cart.CART_ADD:
            state.push({
                product: action.payload,
                quantity: 1
            })
            console.log(state);
            return [...state];
        default:
            return state;
    }
}