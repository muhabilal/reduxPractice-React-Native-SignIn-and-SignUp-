import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    email: '',
    password: '',
}
export const signInSlice = createSlice({
    name: 'practice',
    initialState,
    reducers: {
        Email: (state) => {
            state.email
        },
    }
})