import { FocusEventHandler, ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

interface IMainLayoutProps {
    children: ReactNode;
    onChange?: FocusEventHandler<HTMLInputElement>;
}

export default function MainLayout({ children, onChange }: IMainLayoutProps) {
    return (
        <>
            <Header onChange={onChange} />
            {children}
            <Footer />
        </>
    );
}
