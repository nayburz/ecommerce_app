import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './Reducers/ProductReducer';

const Store = configureStore({
    reducer: {
        products: productsReducer,
    }
})

export default Store; 