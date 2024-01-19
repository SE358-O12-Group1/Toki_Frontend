import TextBox from '@/components/common/TextBox';
import Button from '@mui/material/Button';
import { useState, FocusEvent, Dispatch, SetStateAction } from 'react';

import VoucherType, { convertNumberToType } from '@/types/VoucherType';
import DropdownButton from '@/components/common/DropdownButton';
import { useMutation, useQueryClient } from 'react-query';
import discountApi, { DiscountRequestType } from '@/apis/discount.api';
import { toast } from 'react-toastify';
import { toastOptions } from '@/constants/toast';

export interface IsVoucherFormProps {
    voucher?: VoucherType;
    action: string;
    setAction: Dispatch<SetStateAction<string>>;
}

export default function AddVoucherForm({
    voucher,
    action,
    setAction
}: IsVoucherFormProps) {
    const queryClient = useQueryClient();

    const init: DiscountRequestType = {
        code: voucher ? voucher.code : '',
        value: voucher ? voucher.value : 0,
        type: voucher ? voucher.type : 0,
        is_active: voucher ? voucher.is_active : false,
        max_uses: voucher ? voucher.max_uses : 0,
        min_order_value: voucher ? voucher.min_order_value : 0
        // start_date: voucher ? voucher.start_date : '',
        // end_date: voucher ? voucher.end_date : ''
    };

    const [formValues, setFormValues] = useState(init);

    const { mutate: createDiscount } = useMutation({
        mutationFn: (body: DiscountRequestType) =>
            discountApi.createDiscount(body),
        onSuccess: (res) => {
            toast.success(res.data.message, toastOptions);
            queryClient.invalidateQueries('discounts');
            setAction('');
        }
    });

    const { mutate: updateDiscount } = useMutation({
        mutationFn: ({ id, body }: { id: string; body: DiscountRequestType }) =>
            discountApi.updateDiscount(id, body),
        onSuccess: (res) => {
            toast.success(res.data.message, toastOptions);
            queryClient.invalidateQueries('discounts');
            setAction('');
        }
    });

    const handleSubmit = () => {
        if (formValues.code === '') {
            toast.error('Please fill in code field', toastOptions);
            return;
        }

        if (formValues.value === 0) {
            toast.error('Please fill in value field', toastOptions);
            return;
        }

        if (formValues.is_active && formValues.max_uses === 0) {
            toast.error('Please fill in max uses field', toastOptions);
            return;
        }

        if (action === 'add') {
            createDiscount(formValues);
        }

        if (action === 'edit') {
            updateDiscount({
                id: (voucher as VoucherType)._id,
                body: formValues
            });
        }
    };

    const handleCodeChange = (e: FocusEvent<HTMLInputElement, Element>) => {
        setFormValues({ ...formValues, code: e.currentTarget.value });
    };

    const handleTypeChange = (type: number) => {
        setFormValues({ ...formValues, type, value: 0 });
    };

    const handleValueChange = (e: FocusEvent<HTMLInputElement, Element>) => {
        if (formValues.type === 0 && parseInt(e.target.value) > 100) {
            setFormValues({
                ...formValues,
                value: 100
            });
            return;
        }

        setFormValues({
            ...formValues,
            value: parseInt(e.target.value) || 0
        });
    };

    const handleMinimumOrderValueChange = (
        e: FocusEvent<HTMLInputElement, Element>
    ) => {
        setFormValues({
            ...formValues,
            min_order_value: parseInt(e.currentTarget.value) || 0
        });
    };

    const handleMaximumUsesChange = (
        e: FocusEvent<HTMLInputElement, Element>
    ) => {
        setFormValues({
            ...formValues,
            max_uses: parseInt(e.currentTarget.value) || 0
        });
    };

    const handleStatusChange = (status: number) => {
        setFormValues({
            ...formValues,
            is_active: status === 0 ? true : false
        });
    };

    // const handleStartDateChange = (
    //     e: FocusEvent<HTMLInputElement, Element>
    // ) => {
    //     setFormValues({ ...formValues, start_date: e.currentTarget.value });
    // };

    // const handleEndDateChange = (e: FocusEvent<HTMLInputElement, Element>) => {
    //     setFormValues({
    //         ...formValues,
    //         end_date: e.currentTarget.value
    //     });
    // };

    return (
        <div className='container p-4'>
            <span
                className='text-main mb-2 flex text-lg'
                style={{
                    fontWeight: 500
                }}
            >
                Add new Voucher
            </span>
            <form onSubmit={handleSubmit}>
                <div className='rounded-sm bg-gray-100 px-4 py-2'>
                    <span className='text-main flex text-lg'>
                        Voucher Information
                    </span>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Voucher Code
                            </span>
                        </div>
                        <div className='col-span-8'>
                            <TextBox
                                required={true}
                                placeholder='Enter voucher code'
                                value={formValues.code}
                                onChange={handleCodeChange}
                            ></TextBox>
                        </div>
                    </div>
                    <div
                        className='grid grid-cols-12'
                        style={{ marginTop: 25 }}
                    >
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Status
                            </span>
                        </div>
                        <div className='col-span-8'>
                            <DropdownButton
                                className='nowrap border-main col-span-1 mr-4 rounded-md p-2'
                                items={['Active', 'Inactive']}
                                value={
                                    formValues.is_active ? 'Active' : 'Inactive'
                                }
                                onSelect={handleStatusChange}
                            />
                        </div>
                    </div>
                    <div
                        className='grid grid-cols-12'
                        style={{ marginTop: 25 }}
                    >
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Type
                            </span>
                        </div>
                        <div className='col-span-8'>
                            <DropdownButton
                                className='nowrap border-main col-span-1 mr-4 rounded-md p-2'
                                items={['Percentage', 'Fixed']}
                                value={convertNumberToType(formValues.type)}
                                onSelect={handleTypeChange}
                            />
                        </div>
                    </div>
                    <div
                        className='grid grid-cols-12'
                        style={{ marginTop: 25 }}
                    >
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Value
                            </span>
                        </div>
                        <div className='col-span-8'>
                            <TextBox
                                required={true}
                                placeholder='Input'
                                value={formValues.value.toString()}
                                onChange={handleValueChange}
                            ></TextBox>
                        </div>
                    </div>
                    <div
                        className='grid grid-cols-12'
                        style={{ marginTop: 25 }}
                    >
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Minimum Order Price
                            </span>
                        </div>
                        <div className='col-span-8'>
                            <TextBox
                                required={true}
                                value={formValues.min_order_value.toString()}
                                onChange={handleMinimumOrderValueChange}
                            ></TextBox>
                        </div>
                    </div>
                    <div
                        className='grid grid-cols-12'
                        style={{ marginTop: 25 }}
                    >
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Max Uses
                            </span>
                        </div>
                        <div className='col-span-8'>
                            <TextBox
                                required={true}
                                placeholder='Input'
                                value={formValues.max_uses.toString()}
                                onChange={handleMaximumUsesChange}
                            ></TextBox>
                        </div>
                    </div>

                    {/* <div
                        className='grid grid-cols-12'
                        style={{ marginTop: 25 }}
                    >
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Start Date
                            </span>
                        </div>
                        <div className='col-span-8'>
                            <TextBox
                                required={true}
                                placeholder='Example: 2023-12-31T17:00:00.00'
                                value={formValues.start_date}
                                onChange={handleStartDateChange}
                                type=''
                            ></TextBox>
                        </div>
                    </div>
                    <div
                        className='grid grid-cols-12'
                        style={{ marginTop: 25 }}
                    >
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                End Date
                            </span>
                        </div>
                        <div className='col-span-8'>
                            <TextBox
                                required={true}
                                placeholder='Example: 2023-12-31T17:00:00.00'
                                value={formValues.end_date}
                                onChange={handleEndDateChange}
                            ></TextBox>
                        </div>
                    </div> */}
                </div>

                <div className='grid grid-cols-3' style={{ marginTop: 25 }}>
                    <div className='col-span-2'></div>
                    <div className='justify-content-end col-span-1 flex'>
                        <Button
                            className='text-md'
                            style={{
                                color: '#777',
                                border: '1px solid #d9d9d9',
                                paddingTop: 10,
                                paddingBottom: 10,
                                paddingLeft: 22,
                                paddingRight: 22,
                                marginRight: 20
                            }}
                            onClick={() => setAction('')}
                        >
                            Cancel
                        </Button>
                        <Button
                            className='text-md'
                            onClick={handleSubmit}
                            style={{
                                color: 'white',
                                backgroundColor: '#00ADB5',
                                paddingTop: 10,
                                paddingBottom: 10,
                                paddingLeft: 22,
                                paddingRight: 22
                            }}
                        >
                            Save and Publish
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}
