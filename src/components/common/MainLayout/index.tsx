import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

interface IMainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
