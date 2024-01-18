import React, { useState } from 'react';
import { mockVoucher } from '../mockVoucher';
import VoucherType from '@/types/VoucherType';
import VoucherStatus from './status';

export interface IsVoucherProps {
    voucher: VoucherType
    onVoucherEdit: Function
    onIsEdit: Function
}

export const Voucher = ({ voucher, onVoucherEdit, onIsEdit }: IsVoucherProps) => {
    const [isEdit, setIsEdit] = useState(false)

    const handleEdit = () => {
        onVoucherEdit(voucher)
        onIsEdit(true)
        console.log(voucher)
    }

    const handleDelete = (index: number) => {
        
    }

    return (
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
                className='col-span-3' 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <img 
                    src={voucher.image} 
                    style={{
                        width: 60,
                        height: 60,
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />
                <div style={{ paddingLeft: 10, fontWeight: 600 }}>
                    {voucher.name}
                </div>
            </div>
            <div className='col-span-2 text-center'>
                {voucher.discount}
            </div>
            <div className='col-span-2 text-center'>
                {voucher.minimumprice}
            </div>
            <div className='col-span-2 text-center'>
                {voucher.used}
            </div>
            <div className='col-span-2 text-center'>
                <VoucherStatus status={voucher.status}></VoucherStatus>
                <div>{voucher.startdate}-{voucher.enddate}</div>
            </div>
            <div className='col-span-1 text-center'>
                <div 
                    onClick={handleEdit}
                    style={{
                        fontSize: 14,
                        color: '#00ADB5',
                        cursor: 'pointer',
                    }}
                >Edit</div>
                <div
                    onClick={() => handleDelete(parseInt(voucher._id))}
                    style={{
                        fontSize: 14,
                        color: '#00ADB5',
                        cursor: 'pointer'
                    }}
                >Delete</div>
            </div>
        </div>
    )
}