import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';

interface IMainLayoutProps {
    title?: string;
    children?: ReactNode;
}
export default function MainLayout(props: IMainLayoutProps) {
    const { title, children } = props;
    return (
        <>
            <Head>
                <title>{title || 'TOKI'}</title>
                <link rel='icon' href='/favicon_black.png' />
            </Head>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}
