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
            const { product, quantity, variants, checked } = action.payload;
            const index = state.cart.findIndex(
                (item) =>
                    item.product._id === product._id &&
                    item.variants?.join('') === variants?.join('')
            );
            if (index >= 0) {
                state.cart[index].quantity += quantity;
                state.cart[index].checked = checked;
            } else {
                state.cart.push({ product, quantity, variants, checked });
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
            const { product, quantity, variants, checked } = action.payload;
            const index = state.cart.findIndex(
                (item) =>
                    item.product._id === product._id &&
                    item.variants?.join('') === variants?.join('')
            );
            if (index >= 0) {
                state.cart[index].quantity = quantity;
                state.cart[index].checked = checked;
            }
        }
    }
});

export const { addToCart, deleteFromCart, setCartItem } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
