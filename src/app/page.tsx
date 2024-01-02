'use client';

import { FocusEvent, useEffect, useState } from 'react';

import MainLayout from '@/components/common/MainLayout';
import LandingPage from '@/components/landing';

export default function Home() {
    useEffect(() => {
        document.title = 'TOKI | Home';
    }, []);
    const [searchInput, setSearchInput] = useState<string>();
    function onSearch(event: FocusEvent<HTMLInputElement, Element>) {
        setSearchInput(event.target.value);
    }

    return (
        <MainLayout onChange={onSearch}>
            <LandingPage filterQuery={searchInput} />
        </MainLayout>
    );
}
