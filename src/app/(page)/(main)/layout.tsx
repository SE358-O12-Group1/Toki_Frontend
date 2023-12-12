import MainLayout from '@/components/common/MainLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'TOKI | Authenticate'
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <MainLayout>{children}</MainLayout>;
}
