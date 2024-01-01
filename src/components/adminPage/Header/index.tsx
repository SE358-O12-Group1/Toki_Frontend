'use client';

import Link from 'next/link';
import { useEffect } from 'react';

// assets
import Notification from '/public/assets/images/AdminNotification.png';
import Question from '/public/assets/images/AdminQuestion.png';
import AdminCenter from '/public/assets/images/ADMIN CENTER.png';
import Circle from '/public/assets/images/BlueUserProfileCircle.png';

import Logo from '/public/assets/images/Logo.png';

// components
import { avatarPlaceholder } from '@/constants/common';

// redux
import { useAppSelector } from '@/redux/hook';

const Header = () => {
    const { user } = useAppSelector((state) => state.auth);
    const { cart } = useAppSelector((state) => state.cart);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const isSeller = user?.role === 'seller';

    return (
        <>
            <div className='d-flex' style={{ paddingBottom: 5 }}>
                <div
                    className='flex items-center justify-between py-1'
                    style={{ paddingLeft: 50 }}
                >
                    <div className='offset-1'>
                        <Link href={'/adminPage'}>
                            <img className='ms-5 ' src={Logo.src} />
                        </Link>
                    </div>
                </div>
                <div className='flex items-center justify-between '>
                    <div style={{ paddingTop: 20, paddingLeft: 15 }}>
                        <Link href={'/adminPage'}>
                            <img className='ms-1' src={AdminCenter.src} />
                        </Link>
                    </div>
                </div>
                <div
                    className='ms-auto items-center'
                    style={{ display: 'flex' }}
                >
                    <Link href={''} style={{ display: 'flex' }}>
                        <img src={Notification.src} />{' '}
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
                        <img src={Question.src} />
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
                    <Link href={''} style={{ display: 'flex' }}>
                        <img src={Circle.src} />
                        <div
                            style={{
                                color: '#00ADB5',
                                paddingTop: 3,
                                paddingRight: 100,
                                paddingLeft: 10
                            }}
                        >
                            UserName
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
