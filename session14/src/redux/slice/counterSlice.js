import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        up: (state, action) => {
            state.count += 1;
            //return {...state};
        },
        down: (state, action) => {
            state.count -= 1;
        },
        upTo: (state, action) => {
            state.count += action.payload;
        },
        downTo: (state, action) => {
            state.count -= action.payload;
        }
    }
})

export const {up, down, upTo, downTo} = counterSlice.actions;
console.log(counterSlice.actions);

export default counterSlice.reducer;