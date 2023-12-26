'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/common/MainLayout/Header';
import Circle from '/public/assets/images/userprofilecircle.png';
import profile from '/public/assets/images/profile.png';
import order from '/public/assets/images/orderbutton.png';
import OderedProduct from '@/components/userProfilePage/myOrders/ProductsOrdered';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ProductsOrdered from '@/components/userProfilePage/myOrders/ProductsOrdered';

export interface IMyOrdersForm {}

export default function UserProfilePage(props: IMyOrdersForm) {
    const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
    const [showNewPassword, setShowNewPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handleClickShowCurrentPassword = () =>
        setShowCurrentPassword((show) => !show);
    const handleClickShowNewPassword = () =>
        setShowNewPassword((show) => !show);
    const handleClickShowConfirmPassword = () =>
        setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };
    return (
        <>
            <div className='row mt-3' style={{ backgroundColor: '#E2E2E2' }}>
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
                                    style={{ color: '#777777' }}
                                >
                                    <Link
                                        href='/user/profile'
                                        style={{ color: '#777777' }}
                                    >
                                        Profile
                                    </Link>
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
                                        marginTop: 25,
                                        color: '#00ADB5'
                                    }}
                                >
                                    My Orders
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-8' style={{ marginInlineEnd: 110 }}>
                        <div
                            className='col-12 d-flex'
                            style={{
                                backgroundColor: '#ffffff',
                                borderRadius: 10,
                                fontSize: 18,
                                fontWeight: 500,
                                maxHeight: 60
                            }}
                        >
                            <div
                                className='text col-2'
                                style={{
                                    marginInlineStart: 15,
                                    color: '#00ADB5',
                                    marginTop: 10,
                                    marginBottom: 8,
                                    marginInlineEnd: 5
                                }}
                            >
                                Confirming
                            </div>
                            <div
                                className='text col-2 text-center'
                                style={{
                                    color: '#808089',
                                    marginTop: 10,
                                    marginBottom: 8,
                                    marginInlineEnd: 5
                                }}
                            >
                                Preparing
                            </div>
                            <div
                                className='text col-2 text-center'
                                style={{
                                    color: '#808089',
                                    marginTop: 10,
                                    marginBottom: 8,
                                    marginInlineEnd: 5
                                }}
                            >
                                Delivering
                            </div>
                            <div
                                className='text col-2 text-center'
                                style={{
                                    color: '#808089',
                                    marginTop: 10,
                                    marginBottom: 8,
                                    marginInlineEnd: 5
                                }}
                            >
                                Completed
                            </div>
                            <div
                                className='text col-2 text-center'
                                style={{
                                    color: '#808089',
                                    marginTop: 10,
                                    marginBottom: 8,
                                    marginInlineEnd: 5
                                }}
                            >
                                Cancelled
                            </div>
                            <div
                                className='text col-2 text-center'
                                style={{
                                    color: '#808089',
                                    marginTop: 10,
                                    marginBottom: 8
                                }}
                            >
                                Refund
                            </div>
                        </div>
                        <ProductsOrdered></ProductsOrdered>
                        <ProductsOrdered></ProductsOrdered>
                        <ProductsOrdered></ProductsOrdered>
                        <ProductsOrdered></ProductsOrdered>
                    </div>
                </div>
                <div className='row' style={{ minHeight: 74 }}></div>
            </div>
        </>
    );
}
