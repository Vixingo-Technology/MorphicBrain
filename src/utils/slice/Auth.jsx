import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            email: "",
            username: "",
            id: "",
            token: "",
            role: "",
            password: "",
        },
    },
    reducers: {
        updateAuthData: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value;
        },
        resetAuth: (state) => {
            // Reset the form to initial state
            state.name = "";
            state.email = "";
            state.password = "";
        },
    },
});

export const { updateAuthData, resetAuth } = authSlice.actions;
export default authSlice.reducer;
