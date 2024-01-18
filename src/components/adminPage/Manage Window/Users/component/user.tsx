'use client';
import React, { useState } from 'react';
import Circle from '/public/assets/images/Ellipse.png';
import Link from 'next/link';
import Bin from '/public/assets/images/Bin.png';
import ConfirmationModal from '@/components/common/ConfirmationModal';
import UserType from '@/types/UserType';

export interface IUserItemProps {
    user: UserType;
}

export const User = ({ user }: IUserItemProps) => {
    const [isConfirmationOpen, setConfirmationOpen] = useState(false);
    const handleConfirm = () => {
        handleDelete();
        // Close the modal
        setConfirmationOpen(false);
    };

    const handleOpenModal = () => {
        setConfirmationOpen(true);
    };

    const handleCloseModal = () => {
        setConfirmationOpen(false);
    };
    function handleDelete(): void {
        console.log(user._id);
    }

    return (
        <div className=''>
            {isConfirmationOpen && (
                <ConfirmationModal
                    isOpen={isConfirmationOpen}
                    onClose={handleCloseModal}
                    onConfirm={handleConfirm}
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
                    <div className='mr-4'>
                        <img src={Circle.src} />
                    </div>
                    {user.name}
                </div>
                <div className='col-3'>{user.phone}</div>
                <div className='col-2 text-center'>{user.role}</div>
                <div className='col-2 text-center'>{user.verified}</div>
                {/* <div className='col-2'>
                    <Link href='' style={{ textDecoration: 'underline' }}>
                        View activity history
                    </Link>
                </div> */}
                <div
                    className='col-1 mx-auto cursor-pointer'
                    onClick={handleOpenModal}
                >
                    <img className='mx-auto' src={Bin.src} />
                </div>
            </div>
        </div>
    );
};
