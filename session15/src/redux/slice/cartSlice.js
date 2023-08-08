import { createSlice } from '@reduxjs/toolkit'

const initialState = [];
/**
 * {
 *      "product": {},
 *      "quantity": 0
 * }
 */

export const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Kiểm tra sp đã tồn tại hay chưa?
            let isDuplicated = false;
            for (let item of state) {
                if (item.product.id == action.payload.id) {
                    item.quantity += 1;
                    isDuplicated = true;
                }
            }
            if (!isDuplicated) {
                state.push({
                    product: action.payload,
                    quantity: 1
                })
            }
        }
    }
})

export const {actions: cartAct} = cartSlice;

export default cartSlice.reducer;