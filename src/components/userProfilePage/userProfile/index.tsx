'use client';

import Link from 'next/link';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ChangeEvent, useState } from 'react';

import Circle from '/public/assets/images/userprofilecircle.png';
import profileIcon from '/public/assets/images/profile.png';
import order from '/public/assets/images/orderbutton.png';
import bigCircle from '/public/assets/images/bigprofilecircle.png';

import { useMutation, useQuery, useQueryClient } from 'react-query';
import userApi from '@/apis/user.api';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import UserType, { ProfileType } from '@/types/UserType';
import { toastOptions } from '@/constants/toast';
import { setProfile } from '@/redux/slices/user.slice';

const initialProfileState: ProfileType = {
    name: '',
    email: '',
    phone: '',
    address: '',
    avatar: ''
};

export default function UserProfilePage() {
    const dispatch = useAppDispatch();

    const queryClient = useQueryClient();

    const { user } = useAppSelector((state) => state.auth);

    const { data, isLoading } = useQuery({
        queryKey: ['profile'],
        queryFn: () => userApi.getProfile(),
        onSuccess: (res) => {
            const { data } = res.data;
            dispatch(setProfile(data));
            setProfileState({
                name: data.name,
                email: data.email,
                phone: data.phone,
                address: data.address,
                avatar: data.avatar
            });
        }
    });

    const profileData: UserType = data?.data.data;

    const { mutate: updateUserMutation } = useMutation({
        mutationKey: ['profile'],
        mutationFn: ({ userId, body }: { userId: string; body: ProfileType }) =>
            userApi.updateUser(userId, body),
        onSuccess: () => {
            queryClient.invalidateQueries('profile');
        }
    });

    const [profileState, setProfileState] =
        useState<ProfileType>(initialProfileState);

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setProfileState((prev) => ({
            ...prev,
            name: e.target.value
        }));
    };

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setProfileState((prev) => ({
            ...prev,
            email: e.target.value
        }));
    };

    const handleChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
        setProfileState((prev) => ({
            ...prev,
            phone: e.target.value
        }));
    };

    const handleChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
        setProfileState((prev) => ({
            ...prev,
            address: e.target.value
        }));
    };

    const handleSaveProfile = () => {
        updateUserMutation(
            {
                userId: user._id,
                body: profileState
            },
            {
                onSuccess: (res) => {
                    toast.success(res.data.message, toastOptions);
                },
                onError: (err: any) => {
                    console.log(err);
                }
            }
        );
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <div className='row mt-3' style={{ backgroundColor: '#E2E2E2' }}>
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
                                src={profileData?.avatar || Circle.src}
                                style={{
                                    maxWidth: '40px',
                                    maxHeight: '100%',
                                    objectFit: 'contain'
                                }}
                            />
                            <img
                                src={profileIcon.src}
                                style={{ paddingTop: 30 }}
                            />
                            <img style={{ paddingTop: 80 }} src={order.src} />
                        </div>
                        <div className='col' style={{ paddingLeft: 20 }}>
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
                                    {profileData?.name}
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
                                <div style={{ color: '#00ADB5' }}>Profile</div>
                                <div style={{ color: '#777777' }}>
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
                                    src={profileState.avatar || bigCircle.src}
                                    style={{
                                        scale: 1.2,
                                        maxWidth: '150px',
                                        maxHeight: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                                <Button
                                    size='large'
                                    variant='outlined'
                                    style={{
                                        textTransform: 'none',
                                        color: 'black',
                                        borderColor: '#D2D1D1',
                                        marginTop: 50
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
                                    marginTop: 60
                                }}
                            >
                                <div className='row d-flex space-y-7'>
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
                                            width: '100',
                                            marginTop: 25
                                        }}
                                        value={profileState.name}
                                        onChange={handleChangeName}
                                    />
                                    <TextField
                                        size='medium'
                                        style={{
                                            width: '100',
                                            marginTop: 25
                                        }}
                                        value={profileState.email}
                                        onChange={handleChangeEmail}
                                    />
                                    <TextField
                                        size='medium'
                                        style={{
                                            width: '100',
                                            marginTop: 25
                                        }}
                                        value={profileState.phone}
                                        onChange={handleChangePhoneNumber}
                                    />
                                    <TextField
                                        size='medium'
                                        style={{
                                            width: '100',
                                            marginTop: 25
                                        }}
                                        value={profileState.address}
                                        onChange={handleChangeAddress}
                                    />
                                </div>

                                <div
                                    className='container'
                                    style={{
                                        textAlign: 'right'
                                    }}
                                >
                                    <Button
                                        onClick={handleSaveProfile}
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
                                        Save changes
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
