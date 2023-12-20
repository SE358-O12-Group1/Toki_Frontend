import AuthenticationLayout from '@/components/auth/AuthenLayout';

export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return <AuthenticationLayout>{children}</AuthenticationLayout>;
}
