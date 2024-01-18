/* eslint-disable @next/next/no-img-element */
'use client';
import { MouseEvent, useState } from 'react';
import Link from 'next/link';
import Circle from '/public/assets/images/userprofilecircle.png';
import profileIcon from '/public/assets/images/profile.png';
import order from '/public/assets/images/orderbutton.png';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAppSelector } from '@/redux/hook';
import { useMutation } from 'react-query';
import authApi from '@/apis/auth.api';
import ChangePasswordType from '@/types/ChangePasswordType';
import { toast } from 'react-toastify';
import { toastOptions } from '@/constants/toast';

const initialChangePasswordState: ChangePasswordType = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
};

export default function ChangePasswordPage() {
    const { profile } = useAppSelector((state) => state.user);
    const [changePasswordState, setChangePasswordState] = useState(
        initialChangePasswordState
    );

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowCurrentPassword = () =>
        setShowCurrentPassword((show) => !show);
    const handleClickShowNewPassword = () =>
        setShowNewPassword((show) => !show);
    const handleClickShowConfirmPassword = () =>
        setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const { mutate: changePasswordMutation } = useMutation({
        mutationFn: (body: ChangePasswordType) => authApi.changePassword(body)
    });

    const handleChangeOldPassword = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setChangePasswordState({
            ...changePasswordState,
            oldPassword: event.target.value
        });
    };

    const handleChangeNewPassword = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setChangePasswordState({
            ...changePasswordState,
            newPassword: event.target.value
        });
    };

    const handleChangeConfirmPassword = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setChangePasswordState({
            ...changePasswordState,
            confirmPassword: event.target.value
        });
    };

    const handleChangePassword = () => {
        const { oldPassword, newPassword, confirmPassword } =
            changePasswordState;

        if (newPassword !== confirmPassword) {
            toast.error(
                'New password and confirm password are not the same',
                toastOptions
            );
            return;
        }

        if (oldPassword === newPassword) {
            toast.error(
                'New password must be different from old password',
                toastOptions
            );
            return;
        }

        if (newPassword.length < 8) {
            toast.error(
                'New password must be at least 8 characters long',
                toastOptions
            );
            return;
        }

        changePasswordMutation(changePasswordState, {
            onSuccess: (res) => {
                toast.success(res.data.message, toastOptions);
                setChangePasswordState(initialChangePasswordState);
                setShowCurrentPassword(false);
                setShowNewPassword(false);
                setShowConfirmPassword(false);
            },
            onError: (err: any) => {
                toast.error(err.response.data.message, toastOptions);
            }
        });
    };

    return (
        <>
            <div
                className='row mx-0 mt-3'
                style={{ backgroundColor: '#E2E2E2' }}
            >
                <div className='row' style={{ marginTop: 30 }}>
                    <div className='col d-flex ' style={{ paddingLeft: 180 }}>
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
                                className='rounded-full'
                                src={profile.avatar || Circle.src}
                                alt='avatar'
                                style={{
                                    maxWidth: '40px',
                                    maxHeight: '100%',
                                    objectFit: 'contain'
                                }}
                            />
                            <img
                                src={profileIcon.src}
                                alt=''
                                style={{ paddingTop: 30 }}
                            />
                            <img
                                style={{ paddingTop: 80 }}
                                src={order.src}
                                alt=''
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
                                <div
                                    style={{
                                        width: '7em',
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        textOverflow: 'ellipsis'
                                    }}
                                >
                                    {profile.name}
                                </div>
                            </div>
                            <div
                                style={{
                                    fontSize: 18,
                                    paddingTop: 28
                                }}
                            >
                                <div
                                    style={{
                                        fontWeight: 500
                                    }}
                                >
                                    My account
                                </div>
                                <div style={{ color: '#777777' }}>
                                    <Link
                                        href='/user/profile'
                                        style={{ color: '#777777' }}
                                    >
                                        Profile
                                    </Link>
                                </div>
                                <div style={{ color: '#00ADB5' }}>
                                    Change Password
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
                                    For your security, do not share your
                                    password with anyone else
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
                                        sx={{ m: 1, width: '100' }}
                                        variant='outlined'
                                    >
                                        <OutlinedInput
                                            value={
                                                changePasswordState.oldPassword
                                            }
                                            onChange={handleChangeOldPassword}
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
                                                        {!showCurrentPassword ? (
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
                                        sx={{ m: 1, width: '100' }}
                                        variant='outlined'
                                    >
                                        <OutlinedInput
                                            value={
                                                changePasswordState.newPassword
                                            }
                                            onChange={handleChangeNewPassword}
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
                                                        {!showNewPassword ? (
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
                                        sx={{ m: 1, width: '100' }}
                                        variant='outlined'
                                    >
                                        <OutlinedInput
                                            value={
                                                changePasswordState.confirmPassword
                                            }
                                            onChange={
                                                handleChangeConfirmPassword
                                            }
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
                                                        {!showConfirmPassword ? (
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
                                            onClick={handleChangePassword}
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
