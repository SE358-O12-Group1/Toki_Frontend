import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface IMainLayoutProps {
    children?: ReactNode;
}
export default function MainLayout(props: IMainLayoutProps) {
    const { children } = props;
    return (
        <>
            <Header></Header>

            <main>{children}</main>

            <Footer></Footer>
        </>
    );
}
