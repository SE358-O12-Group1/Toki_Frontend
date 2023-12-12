'use client';

import Button from '@/components/common/Button';
import TextBox from '@/components/common/TextBox';
import Link from 'next/link';
import { FormEventHandler, useState } from 'react';

export default function LoginForm() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    let handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        //TODO: call sign up api
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
                        <div>
                            <TextBox
                                value={username}
                                required
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder='Email/ Phone number/ User name'
                            ></TextBox>
                            <div className='valid-feedback'>Looks good!</div>
                        </div>
                        <TextBox
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                            type='password'
                        ></TextBox>

                        <div className='col-12 mt-5 text-center'>
                            <Button className='btn btn-primary' type='submit'>
                                Log in
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
