'use client';
import { useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

// components
import Button from '@/components/common/Button';
import TextBox from '@/components/common/TextBox';
import OrderItem from './OrderItem';

// utils
import { removeVietnamesePhonetics } from '@/utils/utils';
import orderApi from '@/apis/order.api';
import { OrderType } from '@/types/OrderType';
import { ORDER_STATUS, convertStatusToValue } from '@/constants/orderStatus';
import { mockOrders } from '@/components/productPage/mockData';

const chips = [
    'ALL',
    ...Object.values(ORDER_STATUS).map((status) => status.name)
];

export default function SellerOrderList() {
    const { isLoading: isGetOrdersLoading } = useQuery({
        queryKey: 'shopOrders',
        queryFn: () => orderApi.getShopOrders(),
        onSuccess: (res) => {
            setOrders(res.data.data);
        }
    });

    const { mutate, isLoading: isGetOrdersByStatusLoading } = useMutation({
        mutationKey: 'shopOrders',
        mutationFn: (status?: number) => orderApi.getShopOrders(status)
    });

    const initialChip = chips[0];

    const [orders, setOrders] = useState<OrderType[]>([]);

    const [searchInput, setSearchInput] = useState('');

    const [selectedStatus, setSelectedStatus] = useState<string>(initialChip);

    const filteredOrders = useMemo(() => {
        const filterString = removeVietnamesePhonetics(searchInput.trim());

        return orders.filter(
            (order) =>
                removeVietnamesePhonetics(
                    order.user.name.toLowerCase()
                ).includes(filterString) ||
                order.order_lines.some((order) =>
                    removeVietnamesePhonetics(
                        order.product.name.toLowerCase()
                    ).includes(filterString)
                ) ||
                order.order_lines.some((order) =>
                    removeVietnamesePhonetics(
                        order.product.category.name.toLowerCase()
                    ).includes(filterString)
                )
        );
    }, [searchInput, orders]);

    const handleChipClick = (chipValue: string) => {
        setSelectedStatus(chipValue);
        if (chipValue === 'ALL') {
            mutate(undefined, {
                onSuccess: (res) => {
                    setOrders(res.data.data);
                }
            });
            return;
        }
        mutate(convertStatusToValue(chipValue), {
            onSuccess: (res) => {
                setOrders(res.data.data);
            }
        });
    };

    if (isGetOrdersLoading || isGetOrdersByStatusLoading) return;

    return (
        <div className='container p-4'>
            <div className='grid grid-cols-3'>
                <div className='col-span-2 flex'>
                    <TextBox
                        className='col-span-6 mr-4'
                        placeholder='Product Name'
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                        }}
                        value={searchInput}
                    ></TextBox>
                    {/* <Button className='btn col-span-2'>Search</Button> */}
                </div>
            </div>
            <span className='text-main mt-4 flex text-xl'>
                {filteredOrders.length}{' '}
                {filteredOrders.length <= 1 ? 'Order' : 'Orders'}
            </span>
            <div className='mt-4 grid grid-cols-6'>
                <div className='flex'>
                    {chips.map((chip) => (
                        <div
                            key={chip}
                            className={`hover:bg-main/5 text-md text-nowrap mr-2 flex h-12 items-center justify-center rounded-md px-4 capitalize
                            ${
                                selectedStatus === chip
                                    ? 'border-main'
                                    : 'border'
                            }`}
                            onClick={() => handleChipClick(chip)}
                        >
                            {chip}
                        </div>
                    ))}
                </div>
            </div>
            <div className='container mt-6 px-0'>
                <div className='rounded-sm bg-white '>
                    {filteredOrders.map((order, index) => (
                        <OrderItem
                            order={order}
                            key={index}
                            isEditable={true}
                        ></OrderItem>
                    ))}
                </div>
            </div>
        </div>
    );
}
