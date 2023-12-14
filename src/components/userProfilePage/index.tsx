'use client';

import Link from 'next/link';
import Header from '@/components/common/MainLayout/Header';
import Circle from '/public/assets/images/userprofilecircle.png';
import profile from '/public/assets/images/profile.png';
import order from '/public/assets/images/orderbutton.png';

export interface IUserProfilePage {}

export default function UserProfilePage(props: IUserProfilePage) {
    return (
        <>
            <Header></Header>
            <div className='row mt-4' style={{ backgroundColor: '#E2E2E2' }}>
                <div className='row d-flex mt-5'>
                    <div
                        className='col d-flex '
                        style={{ marginInlineStart: 170 }}
                    >
                        <div
                            className='col-2'
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <img
                                className='mb-5 mt-3'
                                style={{ scale: 1.3 }}
                                src={Circle.src}
                            />
                            <img
                                className='mb-5 mt-2'
                                style={{ scale: 1.3 }}
                                src={profile.src}
                            />
                            <img
                                style={{ scale: 1.3, marginTop: 80 }}
                                src={order.src}
                            />
                        </div>
                        <div className='col ms-3'>
                            <div
                                className='text  mt-3'
                                style={{
                                    fontSize: 26,
                                    color: '#00ADB5',
                                    fontWeight: 700
                                }}
                            >
                                Username
                            </div>
                            <div
                                className='col'
                                style={{
                                    fontSize: 18,
                                    marginTop: 52
                                }}
                            >
                                <div
                                    className='mb-2'
                                    style={{
                                        fontWeight: 500
                                    }}
                                >
                                    My account
                                </div>
                                <div
                                    className='mb-2'
                                    style={{ color: '#00ADB5' }}
                                >
                                    Profile
                                </div>
                                <div
                                    className='mb-2'
                                    style={{ color: '#777777' }}
                                >
                                    Address
                                </div>
                                <div
                                    className='mb-2'
                                    style={{ color: '#777777' }}
                                >
                                    Change Password
                                </div>
                                <div
                                    style={{
                                        fontWeight: 500,
                                        marginTop: 25
                                    }}
                                >
                                    My Orders
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className='col-8 ms-auto'
                        style={{
                            marginInlineEnd: 120,
                            backgroundColor: '#ffffff',
                            borderRadius: 15
                        }}
                    >
                        <div className='row'>
                            <div
                                className='text  mt-3'
                                style={{
                                    fontSize: 30,
                                    fontWeight: 700,
                                    marginInlineStart: 20
                                }}
                            >
                                User profile
                            </div>
                            <div>
                                {' '}
                                <hr
                                    style={{
                                        display: 'block',
                                        height: 1,
                                        border: 0,
                                        borderTop: 1,
                                        borderTopColor: '#D9D9D9',
                                        margin: 1,
                                        padding: 0
                                    }}
                                ></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
