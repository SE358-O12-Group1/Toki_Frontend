import MainLayout from '@/components/layouts/default';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'TOKI | Product'
};

export default function ProductDetailLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return <MainLayout>{children}</MainLayout>;
}
