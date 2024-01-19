'use client';

import { useEffect } from 'react';

import AdminScreen from '@/components/adminPage';
import { useAppSelector } from '@/redux/hook';
import { useRouter } from 'next/navigation';

const AdminPage = () => {
    useEffect(() => {
        document.title = 'TOKI | Admin Center';
    }, []);

    const router = useRouter();

    const { user } = useAppSelector((state) => state.auth);

    if (user._id === '') {
        return (
            <div className='p-5'>
                <h1>Please login to continue...</h1>
                <button
                    onClick={() => {
                        router.push('/login');
                    }}
                    className='rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
                >
                    Login
                </button>
            </div>
        );
    }

    if (user.role !== 0) {
        return (
            <div className='p-5'>
                <h1>You don&apos;t have permission!</h1>
                <button
                    onClick={() => {
                        router.push('/');
                    }}
                    className='rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
                >
                    Go back
                </button>
            </div>
        );
    }

    return <AdminScreen />;
};

export default AdminPage;
