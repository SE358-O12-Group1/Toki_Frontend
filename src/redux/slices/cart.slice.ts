import CartType, { CartItemType } from '@/types/CartType';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: CartType = {
    cart: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItemType>) => {
            const { product, quantity, checked } = action.payload;
            const index = state.cart.findIndex(
                (item) => item.product._id === product._id
            );
            if (index >= 0) {
                state.cart[index].quantity += quantity;
                state.cart[index].checked = checked;
            } else {
                state.cart.push({ product, quantity, checked });
            }
        },

        deleteFromCart: (state, action: PayloadAction<string>) => {
            const index = state.cart.findIndex(
                (item) => item.product._id === action.payload
            );
            if (index >= 0) {
                state.cart.splice(index, 1);
            }
        },

        setCartItem: (state, action: PayloadAction<CartItemType>) => {
            const { product, quantity, checked } = action.payload;
            const index = state.cart.findIndex(
                (item) => item.product._id === product._id
            );
            if (index >= 0) {
                state.cart[index].quantity = quantity;
                state.cart[index].checked = checked;
            }
        },

        resetCart: (state) => {
            state.cart = [];
        }
    }
});

export const { addToCart, deleteFromCart, setCartItem, resetCart } =
    cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
