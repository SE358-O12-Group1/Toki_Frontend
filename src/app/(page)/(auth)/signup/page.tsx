'use client';

import { useEffect } from 'react';

import SignupForm from '@/components/auth/SignupForm';

const SignUp = () => {
    useEffect(() => {
        document.title = 'TOKI | Sign Up';
    }, []);

    return <SignupForm />;
};

export default SignUp;
