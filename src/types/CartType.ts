import ProductType from './ProductType';

export type CartItemType = {
    product: ProductType;
    quantity: number;
    checked?: boolean;
};

export type CheckoutItemType = Omit<CartItemType, 'checked'>;

type CartType = {
    cart: CartItemType[];
};

export default CartType;
