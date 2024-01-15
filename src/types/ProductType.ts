import CategoryType, { initialCategory } from './CategoryType';

export type SellerType = {
    _id: string;
    name: string;
    email: string;
    avatar: string;
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
    reviews: string[];
    quantity: number;
    relatedProducts: ProductType[];
};

export type ShopProductType = Omit<ProductType, 'seller' | 'category'> & {
    seller: {
        _id: string;
        name: string;
    };
    category: {
        _id: string;
        name: string;
    };
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
    quantity: 0,
    reviews: [],
    relatedProducts: []
};

export default ProductType;
