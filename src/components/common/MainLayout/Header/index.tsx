'use client';

import Link from 'next/link';
import { ChangeEvent, FocusEventHandler, useEffect } from 'react';

// assets
import Notification from '/public/assets/images/Notification.png';
import Question from '/public/assets/images/QuestionCircle.png';
import Logo from '/public/assets/images/Logo.png';
import Search from '/public/assets/images/btnSearch.png';
import Cart from '/public/assets/images/btnCart.png';

// components
import TextBox from '@/components/common/TextBox';
import CircleAvatar from '@/components/landing/components/CircleAvatar';
import { avatarPlaceholder } from '@/constants/common';

// redux
import { useAppSelector } from '@/redux/hook';

export interface IHeaderProps {
    onChange?: FocusEventHandler<HTMLInputElement>;
}

const Header = (props: IHeaderProps) => {
    const { onChange } = props;
    const { user } = useAppSelector((state) => state.auth);
    const { cart } = useAppSelector((state) => state.cart);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    const isSeller = user?.role === 'seller';

    return (
        <>
            <div className='d-flex main-colored p-1'>
                {isSeller && (
                    <Link className='offset-1 my-auto text-white' href={''}>
                        Seller Center
                    </Link>
                )}
                <Link
                    className='me-5 ms-auto  flex items-center text-white'
                    href={''}
                >
                    <img src={Notification.src} /> Notification
                </Link>
                <Link className='me-2 flex items-center text-white' href={'/'}>
                    <img src={Question.src} className='me-1' />
                    <span>Help</span>
                </Link>
                {user ? (
                    <>
                        <Link
                            className='me-5 flex items-center text-white'
                            href={'/'}
                        >
                            <CircleAvatar
                                className='ml-5 mr-3'
                                src={user.avatar || avatarPlaceholder}
                                alt={user.name}
                                size={8}
                            ></CircleAvatar>
                            <span>{user.name}</span>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link className='btn me-1 text-white' href={'/login'}>
                            Login
                        </Link>
                        <div className='my-auto h-4 w-[1px] bg-white'></div>
                        <Link className='btn me-5 text-white' href={'/signup'}>
                            Sign Up
                        </Link>
                    </>
                )}
            </div>

            <div className='flex items-center justify-between px-5 py-3'>
                <div className='offset-1 mr-10'>
                    <Link href={'/'}>
                        <img className='ms-5 ' src={Logo.src} />
                    </Link>
                </div>
                <div className='mx-10 flex flex-1 items-center'>
                    <TextBox
                        placeholder='Search'
                        className='mb-0'
                        onChange={onChange}
                    ></TextBox>
                    <button type='button' className='btn btn-xxl ml-5'>
                        <img src={Search.src} />
                    </button>
                </div>
                <div className='ml-10 mr-5'>
                    <Link
                        href={'/cart'}
                        type='button'
                        className='btn position-relative me-5 ms-5 mt-4'
                    >
                        <img src={Cart.src} />
                        {cart.length > 0 && (
                            <span className='position-absolute start-100 translate-middle badge rounded-pill bg-danger top-0'>
                                {cart.length}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
