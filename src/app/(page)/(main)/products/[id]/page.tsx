import ProductDetailPage from '@/components/productPage';

export default function ProductPage({ params }: { params: { id: string } }) {
    return <ProductDetailPage productId={params.id} />;
}
