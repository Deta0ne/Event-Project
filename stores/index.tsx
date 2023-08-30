import { configureStore } from '@reduxjs/toolkit';
import { reducer as pokeReducer } from './poke-store';

export function createStore(preloadedState = {}) {
    const store = configureStore({
        reducer: {
            poke: pokeReducer,
        },
        preloadedState,
    });
    return store;
}

export const store = createStore({});
