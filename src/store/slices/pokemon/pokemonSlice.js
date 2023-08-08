import {createSlice} from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state) => {
          state.isLoading = true;
        },
        setPokemons: (state, action ) => {
            console.log(action)
        }
    }
});


// Actions creators are generated for each case reducer function

export const { increment, startLoadingPokemons, setPokemons } = pokemonSlice.actions;