'use client';

import { useEffect } from 'react';

import AdminScreen from '@/components/adminPage';

const AdminPage = () => {
    useEffect(() => {
        document.title = 'TOKI | Sign Up';
    }, []);

    return <AdminScreen />;
};

export default AdminPage;
