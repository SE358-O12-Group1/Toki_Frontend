/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

// assets
import Notification from '/public/assets/images/Notification.png';
import Question from '/public/assets/images/QuestionCircle.png';
import Logo from '/public/assets/images/Logo.png';
import Search from '/public/assets/images/btnSearch.png';

// components
import TextBox from '@/components/common/TextBox';
import CircleAvatar from '@/components/landing/components/CircleAvatar';

// constants
import { avatarPlaceholder } from '@/constants/common';

// hooks
import { useAppSelector } from '@/redux/hook';

const CartHeader = () => {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <>
            <div className='d-flex main-colored p-1'>
                {user.role === 1 && (
                    <Link className='offset-1 my-auto text-white' href={''}>
                        Seller Center
                    </Link>
                )}
                <Link
                    className='me-5 ms-auto  flex items-center text-white'
                    href={''}
                >
                    <img src={Notification.src} alt='' /> Notification
                </Link>
                <Link className='me-2 flex items-center text-white' href={'/'}>
                    <img src={Question.src} className='me-1' alt='' />
                    <span>Help</span>
                </Link>
                <Link className='me-5 flex items-center text-white' href={'/'}>
                    <CircleAvatar
                        className='ml-5 mr-3'
                        src={user?.avatar || avatarPlaceholder}
                        alt={user?.name || ''}
                        size={8}
                    ></CircleAvatar>
                    <span>{user?.name}</span>
                </Link>
            </div>

            <div className='flex items-center justify-between px-5 py-3'>
                <div className='offset-1 mr-10'>
                    <Link href={'/'} className='flex items-end'>
                        <img className='ms-5 ' src={Logo.src} alt='' />
                        <span className='text-main text-3xl font-semibold'>
                            CART
                        </span>
                    </Link>
                </div>
                <div className='mx-10 flex w-[40%] items-center'>
                    <TextBox placeholder='Search' className='mb-0'></TextBox>
                    <button type='button' className='btn btn-xxl ml-5'>
                        <img src={Search.src} alt='' />
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartHeader;
