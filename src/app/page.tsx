import MainLayout from '@/components/common/MainLayout';
import LandingPage from '@/components/landing';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'TOKI | Home'
};

export default function Home() {
    return (
        <MainLayout>
            <LandingPage />
        </MainLayout>
    );
}
