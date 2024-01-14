import ProductType from './ProductType';
import UserType from './UserType';

type OrderLineType = {
    _id: string;
    product: Pick<ProductType, '_id' | 'name' | 'price' | 'images'> & {
        category: {
            _id: string;
            name: string;
        };
    };
    quantity: number;
    sub_total: number;
};

type OrderType = {
    _id: string;
    delivery_address: string;
    order_lines: OrderLineType[];
    status: number;
    sub_total: number;
    total: number;
    discount: string;
    discount_value: number;
    user: Pick<UserType, '_id' | 'name' | 'phone'>;
};

export type { OrderType, OrderLineType };
