import AuthenticationLayout from '@/components/layouts/AuthenLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'TOKI | Sign Up'
};

export default function LoginLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthenticationLayout title='Sign Up'>{children}</AuthenticationLayout>
    );
}
