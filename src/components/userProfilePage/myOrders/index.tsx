/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import Link from 'next/link';

// images
import Circle from '/public/assets/images/userprofilecircle.png';
import profileIcon from '/public/assets/images/profile.png';
import order from '/public/assets/images/orderbutton.png';

// components
import ProductsOrdered from '@/components/userProfilePage/myOrders/ProductsOrdered';
import { useQuery } from 'react-query';

// api
import userApi from '@/apis/user.api';
import { useAppSelector } from '@/redux/hook';

export default function MyOrdersPage() {
    const { profile } = useAppSelector((state) => state.user);

    const { data, isLoading } = useQuery({
        queryKey: 'myOrders',
        queryFn: () =>
            userApi.getMyOrders(/**
             * Chỗ này truyền số thì get theo status
             * 0: being prepared
             * 1: to ship
             * 2: to receive
             * 3: complete
             * 4: cancel
             * Không truyền số thì get all
             */)
    });

    /**
     * @todo
     * - Làm lại UI để Từng order phân biệt nhau vì trong mỗi order có nhiều Orderline
     */

    const orders = data?.data.data;

    console.log(orders);

    if (isLoading) return <div>Loading...</div>;

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
                    <div
                        className='col-12 d-flex'
                        style={{
                            backgroundColor: '#ffffff',
                            borderRadius: 10,
                            fontSize: 18,
                            fontWeight: 500,
                            maxHeight: 60
                        }}
                    >
                        <div
                            className='text col-2'
                            style={{
                                marginInlineStart: 15,
                                color: '#00ADB5',
                                marginTop: 10,
                                marginBottom: 8,
                                marginInlineEnd: 5
                            }}
                        >
                            All
                        </div>
                        <div
                            className='text col-2 text-center'
                            style={{
                                color: '#808089',
                                marginTop: 10,
                                marginBottom: 8,
                                marginInlineEnd: 5
                            }}
                        >
                            Being Prepared
                        </div>
                        <div
                            className='text col-2 text-center'
                            style={{
                                color: '#808089',
                                marginTop: 10,
                                marginBottom: 8,
                                marginInlineEnd: 5
                            }}
                        >
                            To Ship
                        </div>
                        <div
                            className='text col-2 text-center'
                            style={{
                                color: '#808089',
                                marginTop: 10,
                                marginBottom: 8,
                                marginInlineEnd: 5
                            }}
                        >
                            To Receive
                        </div>
                        <div
                            className='text col-2 text-center'
                            style={{
                                color: '#808089',
                                marginTop: 10,
                                marginBottom: 8,
                                marginInlineEnd: 5
                            }}
                        >
                            Complete
                        </div>
                        <div
                            className='text col-2 text-center'
                            style={{
                                color: '#808089',
                                marginTop: 10,
                                marginBottom: 8
                            }}
                        >
                            Cancel
                        </div>
                    </div>
                    {/* {data?.data?.map((order) => (
                        <ProductsOrdered order={order} />
                    ))} */}
                    <ProductsOrdered />
                    <ProductsOrdered />
                    <ProductsOrdered />
                </div>
            </div>
            <div className='row' style={{ minHeight: 74 }}></div>
        </div>
    );
}
