/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from 'react-query';

import Circle from '/public/assets/images/Ellipse.png';
import ConfirmationModal from '@/components/adminPage/Modal/ConfirmationModal';

import UserType from '@/types/UserType';
import userApi from '@/apis/user.api';
import { toastOptions } from '@/constants/toast';

export interface IUserItemProps {
    user: UserType;
}

export const User = ({ user }: IUserItemProps) => {
    const queryClient = useQueryClient();

    const { mutate: updateUserStatus } = useMutation({
        mutationFn: ({ id, body }: { id: string; body: UserType }) =>
            userApi.updateUser(id, body),
        onSuccess: () => {
            toast.success('Update user status successfully', toastOptions);
            queryClient.invalidateQueries('users');
        }
    });

    const [isConfirmationOpen, setConfirmationOpen] = useState(false);
    const handleConfirm = () => {
        updateUserStatus({
            id: user._id,
            body: {
                ...user,
                status: user.status === 1 ? 0 : 1
            }
        });
        setConfirmationOpen(false);
    };

    const handleOpenModal = () => {
        setConfirmationOpen(true);
    };

    const handleCloseModal = () => {
        setConfirmationOpen(false);
    };

    return (
        <div className=''>
            {isConfirmationOpen && (
                <ConfirmationModal
                    isOpen={isConfirmationOpen}
                    onClose={handleCloseModal}
                    onConfirm={handleConfirm}
                    user={user}
                />
            )}
            <div
                className='col d-flex'
                style={{
                    borderLeft: '2px solid #EEEEEE',
                    marginLeft: 30,
                    marginRight: 30,
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                    alignItems: 'center',
                    borderBottom: '2px solid #EEEEEE',
                    borderRight: '2px solid #EEEEEE'
                }}
            >
                <div
                    className='col-4 flex items-center'
                    style={{ fontWeight: 600 }}
                >
                    <div className='mr-4 '>
                        <img
                            src={
                                user.avatar ||
                                'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg'
                            }
                            alt='avatar'
                            style={{
                                maxWidth: '40px',
                                maxHeight: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                    {user.name}
                </div>
                <div className='col-3 text-center'>
                    {user.phone || 'No phone number'}
                </div>
                {/* <div className='col-2 text-center'>{
                    user.role === 0 ? 'Admin' : 'User'
                }</div> */}
                <div className='col-3 text-center'>
                    {user.verified ? 'Yes' : 'No'}
                </div>
                {/* <div className='col-2'>
                    <Link href='' style={{ textDecoration: 'underline' }}>
                        View activity history
                    </Link>
                </div> */}
                <div
                    className='col-2 mx-auto flex cursor-pointer items-center justify-center rounded text-center'
                    // onClick={handleOpenModal}
                >
                    {/* <img className='mx-auto' src={Bin.src} alt='' /> */}
                    <div
                        className={
                            user.status === 1
                                ? 'rounded-full bg-green-400 px-4 py-1 text-white hover:bg-green-500'
                                : 'rounded-full bg-red-400 px-4 py-1 text-white hover:bg-red-500'
                        }
                        onClick={handleOpenModal}
                    >
                        {user.status === 1 ? 'Active' : 'Inactive'}
                    </div>
                </div>
            </div>
        </div>
    );
};
