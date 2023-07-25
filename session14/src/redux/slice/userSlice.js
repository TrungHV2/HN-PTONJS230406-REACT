import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    users: []
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchData: (state, action) => {
            state.users = action.payload;
        }
    }
})

export const { actions: userAction } = userSlice;

export default userSlice.reducer;