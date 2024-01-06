'use client';

import Link from 'next/link';
import { useMutation } from 'react-query';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';

// components
import Button from '@/components/common/Button';
import TextBox from '@/components/common/TextBox';

// apis
import { useAppDispatch } from '@/redux/hook';
import authApi from '@/apis/auth.api';
import { signup } from '@/redux/slices/auth.slice';

// constants
import { toastMessages, toastOptions } from '@/constants/toast';

type FormSignupType = {
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
};

const intitalFormSignup: FormSignupType = {
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
};

export default function SignupForm() {
    const dispatch = useAppDispatch();

    const router = useRouter();

    const [formSignup, setFormSignup] =
        useState<FormSignupType>(intitalFormSignup);

    const { email, phone, password, confirmPassword } = formSignup;

    const signupMutation = useMutation({
        mutationFn: (body: FormSignupType) => authApi.signup(body)
    });

    const { isError, error, isSuccess, data, isLoading } = signupMutation;

    // Handle change
    const handleChangeEmail = (e: FormEvent<HTMLInputElement>) => {
        setFormSignup({ ...formSignup, email: e.currentTarget.value });
    };

    const handleChangePassword = (e: FormEvent<HTMLInputElement>) => {
        setFormSignup({ ...formSignup, password: e.currentTarget.value });
    };

    const handleChangeConfirmPassword = (e: FormEvent<HTMLInputElement>) => {
        setFormSignup({
            ...formSignup,
            confirmPassword: e.currentTarget.value
        });
    };

    // Handle submit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        signupMutation.mutate(formSignup, {
            onSuccess: (res) => {
                toast.success(toastMessages.register, toastOptions);

                const {
                    user,
                    tokens: { accessToken, refreshToken }
                } = res.data.data;

                dispatch(
                    signup({
                        user,
                        accessToken,
                        refreshToken
                    })
                );

                router.push('/');
            },
            onError: (error: any) => {
                console.log(error?.response?.data);
            }
        });
    };

    return (
        <>
            <div className='mx-5'>
                <div className='me-5'>
                    <form
                        onSubmit={handleSubmit}
                        className='needs-validation me-5'
                        needs-validation='true'
                    >
                        <h2
                            className='my-5 text-center'
                            style={{
                                color: '#00ADB5',
                                fontWeight: 700
                            }}
                        >
                            SIGN UP
                        </h2>

                        {/* Form Signup */}
                        <div>
                            <TextBox
                                required
                                onChange={handleChangeEmail}
                                value={email}
                                placeholder='Email'
                                type='email'
                            />
                            <div className='mb-3'></div>
                            <TextBox
                                required
                                onChange={handleChangePassword}
                                value={password}
                                placeholder='Password'
                                type='password'
                            />
                            <div className='mb-3'></div>
                            <TextBox
                                required
                                onChange={handleChangeConfirmPassword}
                                value={confirmPassword}
                                placeholder='Confirm password'
                                type='password'
                            />
                        </div>

                        {/* Error message */}
                        <span style={{ color: 'red' }}>
                            {isError &&
                                (error as any).response.data.message +
                                    '. Please try again!'}
                        </span>

                        <div className='col-12 mt-5 text-center'>
                            <Button className='' type='submit'>
                                {isLoading ? 'Loading...' : 'Sign up'}
                            </Button>
                        </div>
                        <div className='row align-items-md-center mt-5'>
                            <div
                                className='col'
                                style={{
                                    height: 0,
                                    border: '1px #D2D1D1 solid'
                                }}
                            ></div>
                            <div
                                className='col-md-auto text-center'
                                style={{
                                    color: '#D2D1D1',
                                    wordWrap: 'break-word'
                                }}
                            >
                                OR
                            </div>
                            <div
                                className='col'
                                style={{
                                    height: 0,
                                    border: '1px #D2D1D1 solid'
                                }}
                            ></div>
                        </div>

                        <div className='row justify-content-center my-5'>
                            <p className='col-md-auto fst-italic text-center'>
                                Already have an account?
                            </p>
                            <Link
                                href='/login'
                                className='col-md-auto fst-italic text-center'
                                style={{ color: '#1A88F7' }}
                            >
                                Log in!
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
