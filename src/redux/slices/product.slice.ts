import ProductType, { initialProduct } from '@/types/ProductType';
import { createSlice } from '@reduxjs/toolkit';

type ProductState = {
    products: ProductType[];
    detailProduct: ProductType;
};

export const initialState: ProductState = {
    products: [],
    detailProduct: initialProduct
};

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setDetailProduct: (state, action) => {
            state.detailProduct = action.payload;
        }
    }
});

export const { setDetailProduct } = productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer;
