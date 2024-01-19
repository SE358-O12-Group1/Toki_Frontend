'use client';
/* eslint-disable @next/next/no-img-element */

import ConfirmationModal from '@/components/common/ConfirmationModal';
// import { mockVoucher } from '../mockVoucher';
// import VoucherStatus from './status';
import { useState } from 'react';
import VoucherType from '@/types/VoucherType';
import { useMutation, useQueryClient } from 'react-query';
import discountApi from '@/apis/discount.api';
import { toast } from 'react-toastify';
import { toastOptions } from '@/constants/toast';
import { formatCurrency } from '@/utils/utils';

export interface IProps {
    voucher: VoucherType;
    handleEdit: (voucher: VoucherType) => void;
}

export const Voucher = ({ voucher, handleEdit }: IProps) => {
    const queryClient = useQueryClient();

    const { mutate: deleteDiscount } = useMutation({
        mutationFn: (deleteId: string) => discountApi.deleteDiscount(deleteId),
        onSuccess: (res) => {
            toast.success(res.data.message, toastOptions);
            queryClient.invalidateQueries('discounts');
        }
    });

    const handleDelete = () => {
        deleteDiscount(voucher._id);
    };

    const handleEditVoucher = () => {
        handleEdit(voucher);
    };

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

    return (
        <div>
            {isConfirmationOpen && (
                <ConfirmationModal
                    isOpen={isConfirmationOpen}
                    onClose={handleCloseModal}
                    onConfirm={handleConfirm}
                />
            )}

            <div
                className='grid grid-cols-12'
                style={{
                    borderLeft: '2px solid #EEEEEE',
                    marginLeft: 30,
                    marginRight: 30,
                    paddingLeft: 20,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingRight: 20,
                    alignItems: 'center',
                    borderBottom: '2px solid #EEEEEE',
                    borderRight: '2px solid #EEEEEE'
                }}
            >
                <div
                    className='col-span-2'
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <div style={{ paddingLeft: 10, fontWeight: 600 }}>
                        {voucher.is_active ? (
                            <div style={{ color: '#00ADB5' }}>
                                <p>Active</p>
                            </div>
                        ) : (
                            <div style={{ color: '#F94144' }}>
                                <p>Inactive</p>
                            </div>
                        )}
                        {voucher.code}
                    </div>
                </div>
                <div className='col-span-2 text-center'>
                    {formatCurrency(voucher.value)}
                    {voucher.type === 0 ? '%' : ' VND'}
                </div>
                <div className='col-span-3 text-center'>
                    {formatCurrency(voucher.min_order_value)} VND
                </div>
                <div className='col-span-1 text-center'>
                    {voucher.uses_count}
                </div>
                <div className='col-span-2 text-center'>{voucher.max_uses}</div>
                {/* <div className='col-span-3 text-center'>
                    <p>start: {voucher.start_date.substring(0, 19)}</p>
                    <p>end: {voucher.end_date.substring(0, 19)}</p>
                </div> */}
                <div className='col-span-2 flex flex-col items-center text-center'>
                    <div
                        onClick={handleEditVoucher}
                        style={{
                            fontSize: 16,
                            color: '#00ADB5',
                            cursor: 'pointer',
                            marginBottom: 10,
                            backgroundColor: '#EEEEEE',
                            borderRadius: 5,
                            width: 80
                        }}
                    >
                        Edit
                    </div>
                    <div
                        onClick={handleOpenModal}
                        style={{
                            fontSize: 16,
                            width: 80,
                            color: '#00ADB5',
                            cursor: 'pointer',
                            backgroundColor: '#EEEEEE',
                            borderRadius: 5
                        }}
                    >
                        Delete
                    </div>
                </div>
            </div>
        </div>
    );
};
