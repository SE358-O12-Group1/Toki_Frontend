'use client';

import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import './globals.css';
import store from '@/redux/store';

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 0
        }
    }
});

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <QueryClientProvider client={queryClient}>
                    <Provider store={store}>{children}</Provider>
                </QueryClientProvider>
            </body>
        </html>
    );
}
