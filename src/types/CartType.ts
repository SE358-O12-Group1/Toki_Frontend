import ProductType from './ProductType';

export type CartItemType = {
    product: ProductType;
    quantity: number;
    variants?: string[];
    checked?: boolean;
};

type CartType = {
    cart: CartItemType[];
};

export default CartType;
