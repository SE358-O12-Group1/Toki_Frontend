'use client';

import { useEffect } from 'react';

import MainLayout from '@/components/common/MainLayout';
import LandingPage from '@/components/landing';

export default function Home() {
    useEffect(() => {
        document.title = 'TOKI | Home';
    }, []);

    return (
        <MainLayout>
            <LandingPage />
        </MainLayout>
    );
}
