import {configureStore} from '@reduxjs/toolkit';
import categoryReducer from './categoryReducer';

export const store  = configureStore({
    reducer:{
        category : categoryReducer,
    },
})