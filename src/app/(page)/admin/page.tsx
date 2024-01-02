'use client';

import { useEffect } from 'react';

import AdminScreen from '@/components/adminPage';

const AdminPage = () => {
    useEffect(() => {
        document.title = 'TOKI | Admin Center';
    }, []);

    return <AdminScreen />;
};

export default AdminPage;
