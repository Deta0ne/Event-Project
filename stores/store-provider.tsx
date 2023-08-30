'use client';
import { Provider } from 'react-redux';
import { createStore } from './index';

export function StoreProvider({ children, preloadedState }: any) {
    const store = createStore(preloadedState);
    console.log(store.getState());
    return <Provider store={store}>{children}</Provider>;
}
