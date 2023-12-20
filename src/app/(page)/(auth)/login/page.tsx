'use client';

import { useEffect } from 'react';

import LoginForm from '@/components/auth/LoginForm';

const LogIn = () => {
    useEffect(() => {
        document.title = 'TOKI | Login';
    }, []);

    return <LoginForm />;
};

export default LogIn;
