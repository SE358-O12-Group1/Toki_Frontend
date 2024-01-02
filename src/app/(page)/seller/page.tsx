'use client';

import { useEffect } from 'react';

import SellerScreen from '@/components/sellerPage';

const SellerPage = () => {
    useEffect(() => {
        document.title = 'TOKI | Seller Center';
    }, []);

    return <SellerScreen />;
};

export default SellerPage;
