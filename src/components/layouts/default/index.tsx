import Footer from './Footer';
import Header from './Header';

export default function MainLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}
