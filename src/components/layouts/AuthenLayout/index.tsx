import Head from 'next/head';
import { ReactNode } from 'react';

interface IAuthenticationLayoutProps {
    title?: string;
    children?: ReactNode;
}

const AuthenticationLayout = (props: IAuthenticationLayoutProps) => {
    const { title, children } = props;
    return (
        <>
            <h1>{title}</h1>
            <main>{children}</main>
        </>
    );
};

export default AuthenticationLayout;
