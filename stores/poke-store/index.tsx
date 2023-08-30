import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState: any = {
    pokemons: [],
};

export const fethcPokes = createAsyncThunk('poke/fetchUser', async (id: string) => {
    const req = await fetch('http://localhost:3000/api/search');
    const data = await req.json();
    return data[id];
});

export const { reducer, actions } = createSlice({
    name: 'poke',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fethcPokes.fulfilled, (state, action) => {
            state.pokemons = action.payload;
        });
    },
});
