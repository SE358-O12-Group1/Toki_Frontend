type SellerType = {
    id: string;
    name: string;
    email: string;
    avatar: string;
};

type CategoryType = {
    id: string;
    name: string;
};

type ProductType = {
    id: string;
    name: string;
    seller: SellerType;
    description: string;
    normalPrice: number;
    price: number;
    rating: number;
    images: string[];
    category: CategoryType;
    sold_quantity: number;
    variants: string[];
    quantity: number;
};

export const initialProduct: ProductType = {
    id: '',
    name: '',
    seller: {
        id: '',
        name: '',
        email: '',
        avatar: ''
    },
    description: '',
    price: 0,
    normalPrice: 0,
    rating: 0,
    images: [],
    category: {
        id: '',
        name: ''
    },
    sold_quantity: 0,
    variants: [],
    quantity: 0
};

export default ProductType;
