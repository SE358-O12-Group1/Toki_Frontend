/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

// assets
import Notification from '/public/assets/images/AdminNotification.png';
import Question from '/public/assets/images/AdminQuestion.png';
import AdminCenter from '/public/assets/images/ADMIN CENTER.png';

import Logo from '/public/assets/images/Logo.png';

// redux
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useMutation } from 'react-query';
import authApi from '@/apis/auth.api';
import { resetCart } from '@/redux/slices/cart.slice';
import { clearProfile } from '@/redux/slices/user.slice';
import { logout } from '@/redux/slices/auth.slice';
import { useRouter } from 'next/navigation';

const Header = () => {
    const { user } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const { mutate: logoutMutation } = useMutation({
        mutationFn: authApi.logout,
        onSuccess: () => {
            dispatch(resetCart());
            dispatch(clearProfile());
            dispatch(logout());
            localStorage.clear();
            router.push('/');
        }
    });

    const handleLogout = () => {
        logoutMutation();
    };
    return (
        <>
            <div className='d-flex' style={{ paddingBottom: 5 }}>
                <div
                    className='flex items-center justify-between py-1'
                    style={{ paddingLeft: 50 }}
                >
                    <div className='offset-1'>
                        <img className='ms-5 ' src={Logo.src} alt='' />
                    </div>
                </div>
                <div className='flex items-center justify-between '>
                    <div style={{ paddingTop: 20, paddingLeft: 15 }}>
                        <img className='ms-1' src={AdminCenter.src} alt='' />
                    </div>
                </div>
                <div
                    className='ms-auto items-center'
                    style={{ display: 'flex' }}
                >
                    <Link href={''} style={{ display: 'flex' }}>
                        <img src={Notification.src} alt='' />{' '}
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
                        <img src={Question.src} alt='' />
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

                    <div className='mr-28'>
                        <button
                            onClick={handleLogout}
                            className='border-1 block bg-white px-3 py-2 text-left hover:bg-slate-100 hover:text-cyan-500'
                        >
                            {'Log out'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
