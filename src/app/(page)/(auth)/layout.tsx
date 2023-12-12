import AuthenticationLayout from '@/components/auth/AuthenLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'TOKI | Authenticate'
};

export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return <AuthenticationLayout>{children}</AuthenticationLayout>;
}
