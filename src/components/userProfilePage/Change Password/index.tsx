'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/common/MainLayout/Header';
import Circle from '/public/assets/images/userprofilecircle.png';
import profile from '/public/assets/images/profile.png';
import order from '/public/assets/images/orderbutton.png';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export interface IUserProfilePage {}

export default function UserProfilePage(props: IUserProfilePage) {
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
            <Header></Header>
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
                                        href='/userprofile'
                                        style={{ color: '#777777' }}
                                    >
                                        Profile
                                    </Link>
                                </div>
                                <div
                                    className='mb-2'
                                    style={{ color: '#00ADB5' }}
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
                                    Change password
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
                                <div
                                    className='text mt-3'
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 500,
                                        marginInlineStart: 20,
                                        color: '#777777'
                                    }}
                                >
                                    For your account's security, do not share
                                    your password with anyone else
                                </div>
                            </div>
                            <div
                                className='col-4'
                                style={{
                                    fontWeight: 600,
                                    textAlign: 'right',
                                    fontSize: 20,
                                    marginTop: 30
                                }}
                            >
                                <div
                                    className='row d-flex space-y-7'
                                    style={{ color: '#777777' }}
                                >
                                    <div className='mb-4 mt-4'>
                                        Current Password
                                    </div>
                                    <div className='mb-4'>New Password</div>
                                    <div className='mb-4'>Confirm Password</div>
                                </div>
                            </div>
                            <div className='col-7 '>
                                <div
                                    className='row mb-5 space-y-5'
                                    style={{
                                        marginTop: 40,
                                        marginInlineEnd: 100
                                    }}
                                >
                                    <FormControl
                                        sx={{ m: 1, width: '25ch' }}
                                        variant='outlined'
                                    >
                                        <OutlinedInput
                                            id='outlined-adornment-password'
                                            type={
                                                showCurrentPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            endAdornment={
                                                <InputAdornment position='end'>
                                                    <IconButton
                                                        aria-label='toggle password visibility'
                                                        onClick={
                                                            handleClickShowCurrentPassword
                                                        }
                                                        onMouseDown={
                                                            handleMouseDownPassword
                                                        }
                                                        edge='end'
                                                    >
                                                        {showCurrentPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                            <Visibility />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>

                                    <FormControl
                                        sx={{ m: 1, width: '25ch' }}
                                        variant='outlined'
                                    >
                                        <OutlinedInput
                                            id='outlined-adornment-password'
                                            type={
                                                showNewPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            endAdornment={
                                                <InputAdornment position='end'>
                                                    <IconButton
                                                        aria-label='toggle password visibility'
                                                        onClick={
                                                            handleClickShowNewPassword
                                                        }
                                                        onMouseDown={
                                                            handleMouseDownPassword
                                                        }
                                                        edge='end'
                                                    >
                                                        {showNewPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                            <Visibility />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>

                                    <FormControl
                                        sx={{ m: 1, width: '25ch' }}
                                        variant='outlined'
                                    >
                                        <OutlinedInput
                                            id='outlined-adornment-password'
                                            type={
                                                showConfirmPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            endAdornment={
                                                <InputAdornment position='end'>
                                                    <IconButton
                                                        aria-label='toggle password visibility'
                                                        onClick={
                                                            handleClickShowConfirmPassword
                                                        }
                                                        onMouseDown={
                                                            handleMouseDownPassword
                                                        }
                                                        edge='end'
                                                    >
                                                        {showConfirmPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                            <Visibility />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
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
                                                minWidth: 150,
                                                alignItems: 'center',
                                                textTransform: 'none',
                                                marginBottom: 50,
                                                fontSize: 20,
                                                marginTop: 20
                                            }}
                                        >
                                            Confirm
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row' style={{ minHeight: 74 }}></div>
            </div>
        </>
    );
}
