import ProductType from '@/types/ProductType';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type CartItemType = {
    product: ProductType;
    quantity: number;
    variants?: string[];
};

type CartState = {
    cart: CartItemType[];
};

const initialState: CartState = {
    cart: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItemType>) => {
            const { product, quantity, variants } = action.payload;
            const index = state.cart.findIndex(
                (item) =>
                    item.product._id === product._id &&
                    item.variants?.join('') === variants?.join('')
            );
            if (index >= 0) {
                state.cart[index].quantity += quantity;
            } else {
                state.cart.push({ product, quantity, variants });
            }
        }
    }
});

export const { addToCart } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
