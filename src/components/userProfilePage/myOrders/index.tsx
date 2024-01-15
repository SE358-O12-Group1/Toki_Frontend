/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// images
import Circle from '/public/assets/images/userprofilecircle.png';
import profileIcon from '/public/assets/images/profile.png';
import order from '/public/assets/images/orderbutton.png';

// components
import ProductsOrdered from '@/components/userProfilePage/myOrders/ProductsOrdered';
import { useMutation, useQuery } from 'react-query';

// api
import userApi from '@/apis/user.api';
import { useAppSelector } from '@/redux/hook';
import TextBox from '@/components/common/TextBox';
import { OrderType } from '@/types/OrderType';
import OrderItem from '@/components/sellerPage/components/OrderItem';
import { ORDER_STATUS, convertStatusToValue } from '@/constants/orderStatus';
import orderApi from '@/apis/order.api';
import { mockOrder1, mockOrders } from '@/components/productPage/mockData';

const chips = [
    'ALL',
    ...Object.values(ORDER_STATUS).map((status) => status.name)
];

export default function MyOrdersPage() {
    const { profile } = useAppSelector((state) => state.user);
    const initialChip = chips[0];
    const [selectedStatus, setSelectedStatus] = useState<string>(initialChip);

    const { data, isLoading } = useQuery({
        queryKey: 'myOrders',
        queryFn: () => userApi.getMyOrders(convertStatusToValue(selectedStatus))
    });

    const orders = data?.data.data;
    // const orders = mockOrders;

    console.log(orders);

    if (isLoading) return <div>Loading...</div>;

    function handleChipClick(chipValue: string): void {
        setSelectedStatus(chipValue);
    }

    return (
        <div className='row mx-0 mt-3' style={{ backgroundColor: '#E2E2E2' }}>
            <div className='row' style={{ marginTop: 30 }}>
                <div className='col d-flex ' style={{ marginInlineStart: 170 }}>
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
                            className='mb-5 rounded-full'
                            style={{ scale: 1.3 }}
                            src={profile.avatar || Circle.src}
                        />
                        <img
                            alt=''
                            className='mb-5 mt-2'
                            style={{ scale: 1.3 }}
                            src={profileIcon.src}
                        />
                        <img
                            alt=''
                            style={{ scale: 1.3, marginTop: 50 }}
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
                            {profile.name}
                        </div>
                        <div
                            style={{
                                fontSize: 18,
                                marginTop: 52
                            }}
                        >
                            <div
                                className='mb-2'
                                style={{
                                    fontWeight: 500
                                }}
                            >
                                My account
                            </div>
                            <div className='mb-2' style={{ color: '#777777' }}>
                                <Link
                                    href='/user/profile'
                                    style={{ color: '#777777' }}
                                >
                                    Profile
                                </Link>
                            </div>
                            <div className='mb-2' style={{ color: '#777777' }}>
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
                <div className='col-8' style={{ marginInlineEnd: 110 }}>
                    {orders ? (
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
                                            onClick={() =>
                                                handleChipClick(chip)
                                            }
                                        >
                                            {chip}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='container mt-6 px-0'>
                                <div className='rounded-sm bg-white '>
                                    {orders.map(
                                        (order: OrderType, index: number) => (
                                            <OrderItem
                                                order={order}
                                                key={index}
                                                isEditable={false}
                                            ></OrderItem>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='container min-h-[60vh] p-4 text-center'>
                            <span className='text-grey-500 mx-auto rounded-lg bg-white p-4 text-lg'>
                                Empty purchase history
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <div className='row' style={{ minHeight: 74 }}></div>
        </div>
    );
}
