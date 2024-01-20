/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useMutation, useQuery } from 'react-query';

// images
import Circle from '/public/assets/images/userprofilecircle.png';
import profileIcon from '/public/assets/images/profile.png';
import order from '/public/assets/images/orderbutton.png';

// components
import OrderItem from '@/components/sellerPage/components/OrderItem';

// api
import userApi from '@/apis/user.api';
import { OrderLineType, OrderType } from '@/types/OrderType';
import { ORDER_STATUS, convertStatusToValue } from '@/constants/orderStatus';
import { setProfile } from '@/redux/slices/user.slice';

const chips = [
    'ALL',
    ...Object.values(ORDER_STATUS).map((status) => status.name)
];

interface OrderByShop {
    shopId: string;
    orderLines: OrderLineType[];
}

export default function MyOrdersPage() {
    const { profile } = useAppSelector((state) => state.user);
    const initialChip = chips[0];
    const [selectedStatus, setSelectedStatus] = useState<string>(initialChip);

    const [orders, setOrders] = useState<OrderType[]>([]);

    function checkShopExists(orders: OrderByShop[], orderLine: OrderLineType) {
        orders.forEach((order, index) => {
            if (order.shopId === orderLine.product.seller._id) return index;
        });
        return -1;
    }

    const ordersByShop = useMemo(() => {
        const result: OrderType[] = [];
        orders.forEach((order) => {
            const orderByShops: OrderByShop[] = [];
            order.order_lines.forEach((ol) => {
                const temp = checkShopExists(orderByShops, ol);
                if (temp !== -1) {
                    orderByShops[temp].orderLines.push(ol);
                } else {
                    orderByShops.push({
                        shopId: ol.product.seller._id,
                        orderLines: [ol]
                    });
                }
            });
            orderByShops.forEach((shop) => {
                const orderShop: OrderType = {
                    _id: order._id,
                    delivery_address: order.delivery_address,
                    order_lines: shop.orderLines,
                    sub_total: shop.orderLines.reduce(
                        (total, ol) => total + ol.sub_total,
                        0
                    ),
                    total: shop.orderLines.reduce(
                        (total, ol) => total + ol.sub_total,
                        0
                    ),
                    discount: order.discount,
                    discount_value: order.discount_value,
                    user: order.user,
                    seller: shop.orderLines[0].product.seller
                };
                result.push(orderShop);
            });
        });
        return result;
    }, [orders]);

    const dispatch = useAppDispatch();

    useQuery({
        queryKey: 'myOrders',
        queryFn: () => userApi.getMyOrders(),
        onSuccess: (res) => {
            setOrders(res.data.data);
            console.log(res.data.data);
        }
    });

    useQuery({
        queryKey: 'profile',
        queryFn: () => userApi.getProfile(),
        onSuccess: (res) => {
            const { data } = res.data;
            dispatch(setProfile(data));
        }
    });

    const { mutate } = useMutation({
        mutationKey: 'myOrders',
        mutationFn: (status?: number) => userApi.getMyOrders(status),
        onSuccess: (res) => {
            setOrders(res.data.data);
        }
    });

    function handleChipClick(chipValue: string): void {
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
    }

    return (
        <div className='mx-0 mt-3 flex' style={{ backgroundColor: '#E2E2E2' }}>
            <div className='grid grid-cols-12' style={{ marginTop: 30 }}>
                <div className='col-span-1'></div>
                <div className='d-flex col-span-2'>
                    <div
                        className='col-2 '
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: 40
                        }}
                    >
                        <img
                            alt=''
                            className='rounded-full'
                            src={profile.avatar || Circle.src}
                            style={{
                                maxWidth: '40px',
                                maxHeight: '100%',
                                objectFit: 'contain'
                            }}
                        />
                        <img
                            alt=''
                            src={profileIcon.src}
                            style={{ paddingTop: 30 }}
                        />
                        <img
                            alt=''
                            style={{ paddingTop: 80 }}
                            src={order.src}
                        />
                    </div>
                    <div className='col ms-3'>
                        <div
                            className='text'
                            style={{
                                fontSize: 26,
                                color: '#00ADB5',
                                fontWeight: 700,
                                marginTop: 40,
                                display: 'flex'
                            }}
                        >
                            <div
                                style={{
                                    width: '7em',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis'
                                }}
                            >
                                {profile.name}
                            </div>
                        </div>
                        <div
                            style={{
                                fontSize: 18,
                                paddingTop: 28
                            }}
                        >
                            <div
                                style={{
                                    fontWeight: 500
                                }}
                            >
                                My account
                            </div>
                            <div style={{ color: '#777777' }}>
                                <Link
                                    href='/user/profile'
                                    style={{ color: '#777777' }}
                                >
                                    Profile
                                </Link>
                            </div>
                            <div style={{ color: '#777777' }}>
                                <Link
                                    href='/user/changepassword'
                                    style={{ color: '#777777' }}
                                >
                                    Change Password
                                </Link>
                            </div>
                            <div
                                style={{
                                    fontWeight: 500,
                                    marginTop: 25,
                                    color: '#00ADB5'
                                }}
                            >
                                My Orders
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='col-span-9 mb-4 min-h-[64vh]'
                    style={{ marginInlineEnd: 110 }}
                >
                    <div className='container rounded-lg bg-white p-4'>
                        <span className='text-main mt-4 flex text-xl'>
                            {orders.length}{' '}
                            {orders.length <= 1 ? 'Order' : 'Orders'}
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
                                {ordersByShop.map(
                                    (order: OrderType, index: number) => (
                                        <OrderItem
                                            order={order}
                                            key={index}
                                            isEditable={false}
                                            isUserOrder={true}
                                        ></OrderItem>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
