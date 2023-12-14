import MainLayout from '@/components/common/MainLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
    return <MainLayout>{children}</MainLayout>;
}
