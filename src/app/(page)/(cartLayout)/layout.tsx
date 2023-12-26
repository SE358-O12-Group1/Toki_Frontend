import CartHeader from '@/components/cart/layout/cartHeader';
import Footer from '@/components/common/MainLayout/Footer';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'TOKI | Cart'
};

interface ICartLayoutProps {
    children?: ReactNode;
}
export default function CartLayout(props: ICartLayoutProps) {
    const { children } = props;
    return (
        <>
            <CartHeader></CartHeader>

            <main>{children}</main>

            <Footer></Footer>
        </>
    );
}
