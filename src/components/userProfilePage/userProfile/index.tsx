'use client';

import Link from 'next/link';
import Header from '@/components/common/MainLayout/Header';
import Circle from '/public/assets/images/userprofilecircle.png';
import profile from '/public/assets/images/profile.png';
import order from '/public/assets/images/orderbutton.png';
import bigCircle from '/public/assets/images/bigprofilecircle.png';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export interface IUserProfilePage {}

export default function UserProfilePage(props: IUserProfilePage) {
    return (
        <>
            <div
                className='row mx-0 mt-3'
                style={{ backgroundColor: '#E2E2E2' }}
            >
                <div className='row' style={{ marginTop: 30 }}>
                    <div
                        className='col d-flex '
                        style={{ marginInlineStart: 170 }}
                    >
                        <div
                            className='col-2 '
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginTop: 40
                            }}
                        >
                            <img
                                className='mb-5'
                                style={{ scale: 1.3 }}
                                src={Circle.src}
                            />
                            <img
                                className='mb-5 mt-2'
                                style={{ scale: 1.3 }}
                                src={profile.src}
                            />
                            <img
                                style={{ scale: 1.3, marginTop: 50 }}
                                src={order.src}
                            />
                        </div>
                        <div className='col ms-3'>
                            <div
                                className='text'
                                style={{
                                    fontSize: 26,
                                    color: '#00ADB5',
                                    fontWeight: 700,
                                    marginTop: 40,
                                    display: 'flex'
                                }}
                            >
                                Username
                            </div>
                            <div
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
                                    <Link
                                        href='/user/changepassword'
                                        style={{ color: '#777777' }}
                                    >
                                        Change Password
                                    </Link>
                                </div>
                                <div
                                    style={{
                                        fontWeight: 500,
                                        marginTop: 25
                                    }}
                                >
                                    <Link
                                        href='/user/history'
                                        style={{ color: '#777777' }}
                                    >
                                        My Orders
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className='col-8'
                        style={{
                            marginInlineEnd: 110,
                            backgroundColor: '#ffffff',
                            borderRadius: 15
                        }}
                    >
                        <div className='row '>
                            <div className='row'>
                                <div
                                    className='text mt-3'
                                    style={{
                                        fontSize: 35,
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
                                            border: '1px solid #000',
                                            margin: 20
                                        }}
                                    ></hr>
                                </div>
                            </div>
                            <div
                                className='col-2'
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginLeft: 80,
                                    marginTop: 110
                                }}
                            >
                                <img
                                    className='mb-4'
                                    src={bigCircle.src}
                                    style={{ scale: 1.2 }}
                                />
                                <Button
                                    size='large'
                                    variant='outlined'
                                    style={{
                                        textTransform: 'none',
                                        color: 'black',
                                        borderColor: '#D2D1D1',
                                        marginTop: 20
                                    }}
                                >
                                    New photo
                                </Button>
                            </div>
                            <div
                                className='col-2'
                                style={{
                                    fontWeight: 600,
                                    textAlign: 'right',
                                    fontSize: 20,
                                    marginTop: 30
                                }}
                            >
                                <div className='row d-flex space-y-7'>
                                    <div className='mb-4 mt-4'>Username</div>
                                    <div className='mb-4'>Name</div>
                                    <div className='mb-4'>Email</div>
                                    <div className='mb-4'>Phone Number</div>
                                    <div className='mb-4'>Address</div>
                                </div>
                            </div>
                            <div className='col'>
                                <div
                                    className='row mb-5 me-4'
                                    style={{ marginTop: 25 }}
                                >
                                    <TextField
                                        size='medium'
                                        style={{
                                            width: '10',
                                            marginTop: 15,
                                            fontSize: 20,
                                            textTransform: 'none'
                                        }}
                                    >
                                        {' '}
                                    </TextField>
                                    <TextField
                                        size='medium'
                                        style={{
                                            width: '100',
                                            marginTop: 25
                                        }}
                                    >
                                        {' '}
                                    </TextField>
                                    <TextField
                                        size='medium'
                                        style={{
                                            width: '100',
                                            marginTop: 25
                                        }}
                                    >
                                        {' '}
                                    </TextField>
                                    <TextField
                                        size='medium'
                                        style={{
                                            width: '100',
                                            marginTop: 25
                                        }}
                                    >
                                        {' '}
                                    </TextField>
                                    <TextField
                                        size='medium'
                                        style={{
                                            width: '100',
                                            marginTop: 25
                                        }}
                                    >
                                        {' '}
                                    </TextField>
                                </div>
                                <div
                                    className='container'
                                    style={{
                                        textAlign: 'right'
                                    }}
                                >
                                    <Button
                                        size='large'
                                        variant='outlined'
                                        style={{
                                            background: '#00ADB5',
                                            color: 'white',
                                            minWidth: 280,
                                            alignItems: 'center',
                                            marginRight: 22,
                                            textTransform: 'none',
                                            marginBottom: 50,
                                            fontSize: 20
                                        }}
                                    >
                                        Save change
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row' style={{ minHeight: 55 }}></div>
            </div>
        </>
    );
}
