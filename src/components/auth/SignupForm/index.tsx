'use client';

import Button from '@/components/common/Button';
import TextBox from '@/components/common/TextBox';
import Link from 'next/link';
import { FormEvent, FormEventHandler, useState } from 'react';

export default function SignupForm() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <>
            <div className='mx-5 pe-5'>
                <div className='me-5 pe-5'>
                    <form
                        className='needs-validation me-5 pe-5'
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
                        <div>
                            <TextBox
                                required
                                // onChange={(e) => setUserName(e.target.value)}
                                // value={username}
                                placeholder='User name'
                            ></TextBox>
                            <div className='valid-feedback'>Looks good!</div>
                        </div>
                        <TextBox
                            required
                            // onChange={(e) => setUserName(e.target.value)}
                            placeholder='Email'
                            type='email'
                        ></TextBox>
                        <TextBox
                            required
                            // onChange={(e) => setPhone(e.target.value)}
                            // value={phone}
                            placeholder='Phone number'
                            type='number'
                        ></TextBox>
                        <TextBox
                            required
                            // onChange={(e) => setPassword(e.target.value)}
                            // value={password}
                            placeholder='Password'
                            type='password'
                        ></TextBox>
                        <TextBox
                            required
                            placeholder='Confirm password'
                            type='password'
                        ></TextBox>

                        <div className='col-12 mt-5 text-center'>
                            <Button className='btn btn-primary' type='submit'>
                                Sign up
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
