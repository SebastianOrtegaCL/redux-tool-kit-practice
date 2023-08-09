import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from './slices/counter/'
import { pokemonSlice } from "./slices/pokemon/index.js";
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemon: pokemonSlice.reducer
    },
});