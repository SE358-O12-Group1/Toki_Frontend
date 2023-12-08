import AuthenticationLayout from '@/components/layouts/AuthenLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'TOKI | Login'
};

export default function LoginLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return <AuthenticationLayout>{children}</AuthenticationLayout>;
}
