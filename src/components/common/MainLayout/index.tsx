import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface IMainLayoutProps {
    title?: string;
    children?: ReactNode;
}
export default function MainLayout(props: IMainLayoutProps) {
    const { title, children } = props;
    return (
        <>
            <Header></Header>

            <main>{children}</main>

            <Footer></Footer>
        </>
    );
}
