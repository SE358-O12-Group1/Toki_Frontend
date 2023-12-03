import AuthenticationLayout from '@/components/layouts/AuthenLayout';

export default function LoginLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthenticationLayout title='Login'>{children}</AuthenticationLayout>
    );
}
