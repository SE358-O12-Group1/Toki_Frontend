/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { useEffect } from 'react';

// assets
import Notification from '/public/assets/images/AdminNotification.png';
import Question from '/public/assets/images/AdminQuestion.png';
import SellerCenter from '/public/assets/images/seller_center.png';
import Circle from '/public/assets/images/BlueUserProfileCircle.png';

import Logo from '/public/assets/images/Logo.png';

// components
import { avatarPlaceholder } from '@/constants/common';

// redux
import { useAppSelector } from '@/redux/hook';
import CircleAvatar from '../landing/components/CircleAvatar';

const SellerHeader = () => {
    const { user } = useAppSelector((state) => state.auth);
    // const { cart } = useAppSelector((state) => state.cart);

    // useEffect(() => {
    //     console.log(cart);
    // }, [cart]);

    return (
        <>
            <div className='d-flex' style={{ paddingBottom: 5 }}>
                <div
                    className='flex items-center justify-between py-1'
                    style={{ paddingLeft: 50 }}
                >
                    <div className='offset-1'>
                        <Link href={'/'}>
                            <img alt='' className='ms-5 ' src={Logo.src} />
                        </Link>
                    </div>
                </div>
                <div className='flex items-center justify-between '>
                    <div style={{ paddingTop: 20, paddingLeft: 15 }}>
                        <Link href={'/'}>
                            <img
                                alt=''
                                className='ms-1'
                                src={SellerCenter.src}
                            />
                        </Link>
                    </div>
                </div>
                <div
                    className='ms-auto items-center'
                    style={{ display: 'flex' }}
                >
                    <Link href={''} style={{ display: 'flex' }}>
                        <img alt='' src={Notification.src} />{' '}
                        <div
                            style={{
                                color: '#00ADB5',
                                paddingRight: 50,
                                paddingLeft: 10
                            }}
                        >
                            Notification
                        </div>
                    </Link>
                    <Link href={''} style={{ display: 'flex' }}>
                        <img alt='' src={Question.src} />
                        <div
                            style={{
                                color: '#00ADB5',
                                paddingRight: 50,
                                paddingLeft: 10
                            }}
                        >
                            Help
                        </div>
                    </Link>
                    {user ? (
                        <>
                            <Link
                                className='me-5 flex items-center text-white'
                                href={'/user/profile'}
                            >
                                <CircleAvatar
                                    className='ml-5 mr-3'
                                    src={user.avatar || avatarPlaceholder}
                                    alt={user.name}
                                    size={8}
                                ></CircleAvatar>
                                <span className='text-[#00ADB5]'>
                                    {user.name}
                                </span>
                            </Link>
                        </>
                    ) : (
                        <Link href={''} style={{ display: 'flex' }}>
                            <img alt='' src={Circle.src} />
                            <div
                                style={{
                                    color: '#00ADB5',
                                    paddingTop: 3,
                                    paddingRight: 100,
                                    paddingLeft: 10
                                }}
                            >
                                Shop Center
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
};

export default SellerHeader;
