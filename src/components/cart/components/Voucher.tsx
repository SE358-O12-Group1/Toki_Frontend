import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { Dispatch, FocusEvent, SetStateAction, useState } from 'react';

import voucherIcon from '/public/assets/images/ticket.png';

import Button from '@/components/common/Button';
import TextBox from '@/components/common/TextBox';

import { toastOptions } from '@/constants/toast';

import discountApi from '@/apis/discount.api';

interface IProps {
    totalPrice: number;
    codeDiscount: string;
    setVoucher: Dispatch<SetStateAction<number>>;
    setCodeDiscount: Dispatch<SetStateAction<string>>;
}

export default function Voucher({
    totalPrice,
    codeDiscount,
    setVoucher,
    setCodeDiscount
}: IProps) {
    const applyDiscountMutation = useMutation({
        mutationKey: 'discount',
        mutationFn: ({
            code_discount,
            order_value
        }: {
            code_discount: string;
            order_value: number;
        }) =>
            discountApi.applyDiscount(code_discount, {
                order_value
            })
    });

    const handleChangeCodeDiscounnt = (
        e: FocusEvent<HTMLInputElement, Element>
    ) => {
        setCodeDiscount(e.target.value);
    };

    const handleApplyDiscount = () => {
        if (codeDiscount === '') {
            toast.error('Please enter voucher to apply', toastOptions);
            return;
        }
        applyDiscountMutation.mutate(
            {
                code_discount: codeDiscount,
                order_value: totalPrice
            },
            {
                onSuccess: (res) => {
                    toast.success(res.data.message, toastOptions);
                    const { type, value } = res.data.data;
                    switch (type) {
                        case 'percentage':
                            setVoucher((totalPrice * value) / 100);
                            break;
                        case 'fixed':
                            setVoucher(value);
                            break;
                    }
                },
                onError: (err: any) => {
                    toast.error(err.response.data.message, toastOptions);
                    setCodeDiscount('');
                }
            }
        );
    };

    return (
        <div className='container mt-4 grid grid-cols-2 rounded-sm bg-white p-4 capitalize text-gray-500'>
            <div className='col-span-1 mt-2 flex flex-grow items-center'>
                <span className='text-main font-exl flex font-semibold '>
                    <img src={voucherIcon.src} alt='' className='mr-4' />
                    TOKI Voucher
                </span>
            </div>
            <div className='col-span-1 flex'>
                <TextBox
                    placeholder='Enter voucher'
                    value={codeDiscount}
                    onChange={handleChangeCodeDiscounnt}
                ></TextBox>
                <Button
                    onClick={handleApplyDiscount}
                    className='ml-3 text-sm uppercase text-white'
                >
                    {'Apply'}
                </Button>
            </div>
        </div>
    );
}
