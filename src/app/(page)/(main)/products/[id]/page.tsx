'use client';

import { useEffect } from 'react';

import ProductDetailPage from '@/components/productPage';

export default function ProductPage() {
    useEffect(() => {
        document.title = 'TOKI | Product Detail';
    }, []);

    return <ProductDetailPage />;
}
