import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        decrement: (state) => {
            state.value -= 1;
        },
        increment: (state) => {
            state.value += 1;
        },
        incrementBy: (state, action) => {
            state.value += action.payload;
        }
    }
});

export const { increment, decrement, incrementBy } = counterSlice.actions
