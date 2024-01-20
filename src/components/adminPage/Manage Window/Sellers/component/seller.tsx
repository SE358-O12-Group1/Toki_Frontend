/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';

import Circle from '/public/assets/images/Ellipse.png';
import Bin from '/public/assets/images/Bin.png';

import UserType from '@/types/UserType';
import { useMutation, useQueryClient } from 'react-query';
import userApi from '@/apis/user.api';
import { toast } from 'react-toastify';
import { toastOptions } from '@/constants/toast';
import ConfirmationModal from '@/components/adminPage/Modal/ConfirmationModal';

export interface IUserItemProps {
    seller: UserType;
}

export const Seller = ({ seller }: IUserItemProps) => {
    const queryClient = useQueryClient();

    const { mutate: updateUserStatus } = useMutation({
        mutationFn: ({ id, body }: { id: string; body: UserType }) =>
            userApi.updateUser(id, body),
        onSuccess: () => {
            toast.success('Update user status successfully', toastOptions);
            queryClient.invalidateQueries('sellers');
        }
    });

    const [isConfirmationOpen, setConfirmationOpen] = useState(false);
    const handleConfirm = () => {
        updateUserStatus({
            id: seller._id,
            body: {
                ...seller,
                status: seller.status === 1 ? 0 : 1
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
                    user={seller}
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
                                seller.avatar ||
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
                    {seller.name}
                </div>
                <div className='col-3 text-center'>
                    {seller.phone || 'No phone number'}
                </div>
                {/* <div className='col-2 text-center'>{
                    seller.role === 0 ? 'Admin' : 'seller'
                }</div> */}
                <div className='col-3 text-center'>
                    {seller.verified ? 'Yes' : 'No'}
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
                            seller.status === 1
                                ? 'rounded-full bg-green-400 px-4 py-1 text-white hover:bg-green-500'
                                : 'rounded-full bg-red-400 px-4 py-1 text-white hover:bg-red-500'
                        }
                        onClick={handleOpenModal}
                    >
                        {seller.status === 1 ? 'Active' : 'Inactive'}
                    </div>
                </div>
            </div>
        </div>
    );
};
