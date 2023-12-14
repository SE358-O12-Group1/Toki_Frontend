import { configureStore } from '@reduxjs/toolkit';

// reducers
import authReducer from './slices/auth.slice';
import userReducer from './slices/user.slice';
import productReducer from './slices/product.slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        product: productReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
