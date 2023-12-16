import ProductDetailPage from '@/components/productPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'TOKI | Product'
};

export default function ProductPage({ params }: { params: { id: string } }) {
    return <ProductDetailPage productId={params.id} />;
}
