import CategoryType, { initialCategory } from './CategoryType';

export type SellerType = {
    _id: string;
    name: string;
    email: string;
    avatar: string;
};

type VariantType = {
    [key: string]: string[];
};

type ProductType = {
    _id: string;
    name: string;
    seller: SellerType;
    description: string;
    normalPrice: number;
    price: number;
    rating: number;
    images: string[];
    category: CategoryType;
    sold_quantity: number;
    variants: VariantType;
    quantity: number;
};

export const initialProduct: ProductType = {
    _id: '',
    name: '',
    seller: {
        _id: '',
        name: '',
        email: '',
        avatar: ''
    },
    description: '',
    price: 0,
    normalPrice: 0,
    rating: 0,
    images: [],
    category: initialCategory,
    sold_quantity: 0,
    variants: {},
    quantity: 0
};

export default ProductType;
