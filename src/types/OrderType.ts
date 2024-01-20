import ProductType, { SellerType } from './ProductType';
import UserType from './UserType';

type OrderLineType = {
    _id: string;
    product: Pick<ProductType, '_id' | 'name' | 'price' | 'images'> & {
        category: {
            _id: string;
            name: string;
        };
        seller: Pick<SellerType, '_id' | 'name'>;
    };
    quantity: number;
    sub_total: number;
    status: number;
};

type OrderType = {
    _id: string;
    delivery_address: string;
    order_lines: OrderLineType[];
    sub_total: number;
    total: number;
    discount: string;
    discount_value: number;
    user: Pick<UserType, '_id' | 'name' | 'phone'>;
    seller?: Pick<SellerType, '_id' | 'name'>;
};

export type { OrderType, OrderLineType };
