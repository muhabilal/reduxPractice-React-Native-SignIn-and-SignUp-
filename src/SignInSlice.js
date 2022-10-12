import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: ''
}

export const signInSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        account: (state, action) => {
            state.user = action.payload
        },
    }
})
export const { account } = signInSlice.actions
export default signInSlice.reducer