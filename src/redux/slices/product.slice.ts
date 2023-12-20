import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import CategoryType from '@/types/CategoryType';
import ProductType, { initialProduct } from '@/types/ProductType';

type ProductState = {
    products: ProductType[];
    relatedProducts: ProductType[];
    detailProduct: ProductType;
};

export const initialState: ProductState = {
    products: [],
    relatedProducts: [],
    detailProduct: initialProduct
};

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductType[]>) => {
            state.products = action.payload;
        },

        setDetailProduct: (state, action: PayloadAction<ProductType>) => {
            state.detailProduct = action.payload;
        },

        getRelatedProducts: (state, action: PayloadAction<string>) => {
            state.relatedProducts = state.products.filter(
                (product) =>
                    product.category._id === action.payload &&
                    product._id !== state.detailProduct._id
            );
        }
    }
});

export const { setProducts, setDetailProduct, getRelatedProducts } =
    productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer;
