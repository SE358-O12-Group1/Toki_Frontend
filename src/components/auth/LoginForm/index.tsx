'use client';

import Link from 'next/link';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { useRouter } from 'next/navigation';
import { FocusEvent, FormEvent, useState } from 'react';

// components
import Button from '@/components/common/Button';
import TextBox from '@/components/common/TextBox';

// apis
import authApi from '@/apis/auth.api';
import { useAppDispatch } from '@/redux/hook';
import { login } from '@/redux/slices/auth.slice';

// constants
import { toastMessages, toastOptions } from '@/constants/toast';

type FormLoginType = {
    email: string;
    password: string;
};

const intitalFormLogin: FormLoginType = {
    email: '',
    password: ''
};

export default function LoginForm() {
    const dispatch = useAppDispatch();

    const router = useRouter();

    const [formLogin, setFormLogin] = useState<FormLoginType>(intitalFormLogin);

    const { email, password } = formLogin;

    const loginMutation = useMutation({
        mutationFn: (body: FormLoginType) => authApi.login(body)
    });

    const { isError, error, isSuccess, data, isLoading } = loginMutation;

    // Handle change
    const handleChangeEmail = (e: FocusEvent<HTMLInputElement, Element>) => {
        setFormLogin({ ...formLogin, email: e.currentTarget.value });
    };

    const handleChangePassword = (e: FocusEvent<HTMLInputElement, Element>) => {
        setFormLogin({ ...formLogin, password: e.currentTarget.value });
    };

    // Handle submit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        loginMutation.mutate(formLogin, {
            onSuccess: (res) => {
                toast.success(toastMessages.login, toastOptions);

                const {
                    user,
                    tokens: { accessToken, refreshToken }
                } = res.data.data;

                dispatch(
                    login({
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
                            LOGIN
                        </h2>
                        <div className='mb-3'>
                            <TextBox
                                value={email}
                                required
                                onChange={handleChangeEmail}
                                placeholder='Email/ Phone number/ User name'
                            ></TextBox>
                            <div className='valid-feedback'>Looks good!</div>
                        </div>
                        <TextBox
                            value={password}
                            required
                            onChange={handleChangePassword}
                            placeholder='Password'
                            type='password'
                        ></TextBox>

                        {/* Error message */}
                        <span style={{ color: 'red' }}>
                            {isError &&
                                (error as any).response.data.message +
                                    '. Please try again!'}
                        </span>

                        <div className='col-12 mt-5 text-center'>
                            <Button className='btn btn-primary' type='submit'>
                                {isLoading ? 'Loading...' : 'Submit'}
                            </Button>
                        </div>
                        <p
                            className='fst-italic mx-auto my-5 text-center'
                            style={{ color: '#1A88F7' }}
                        >
                            Forgot Password?
                        </p>
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
                                New to TOKI?
                            </p>
                            <Link
                                href='/signup'
                                className='col-md-auto fst-italic text-center'
                                style={{ color: '#1A88F7' }}
                            >
                                Sign up!
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
