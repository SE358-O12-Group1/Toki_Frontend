'use client';

import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import './globals.css';
import store, { persistor } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

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
                    <Provider store={store}>
                        <PersistGate persistor={persistor}>
                            {children}
                        </PersistGate>
                    </Provider>
                </QueryClientProvider>
            </body>
        </html>
    );
}
