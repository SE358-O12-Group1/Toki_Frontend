import TextBox from '@/components/common/TextBox';
import Button from '@mui/material/Button';
import InputNumber from '@/components/productPage/components/InputNumber';
import { ArrowBackIosNew } from '@mui/icons-material';
import { useState, FocusEvent } from 'react';

import VoucherType from '@/types/VoucherType';

export interface IsVoucherFormProps {
    voucher?: VoucherType
}

type AddEditVoucherType = {
    code: string;
    value: number;
    minimum_order_price: number;
    public_date: string;
    expiration_date: string;
};

export default function AddVoucherForm({voucher} : IsVoucherFormProps) {
    const init: AddEditVoucherType = {
        code: voucher ? voucher.code : '',
        value: voucher ? voucher.value : 0,
        minimum_order_price: voucher ? voucher.min_order_value : 0,
        public_date: voucher ? voucher.start_date : '',
        expiration_date: voucher ? voucher.end_date : '',
    }

    const [formValues, setFormValues] = useState(init);
    const [isAddVoucher, setIsAddVoucher] = useState(false)

    const handleSubmit = () => {

    }

    const handleNameChange = (e: FocusEvent<HTMLInputElement, Element>) => {
        setFormValues({...formValues, code: e.currentTarget.value})
    }

    const handleDiscountChange = (e: FocusEvent<HTMLInputElement, Element>) => {
        setFormValues({...formValues, value: parseInt(e.currentTarget.value)})
    }

    const handleMinimumPriceChange = (e: FocusEvent<HTMLInputElement, Element>) => {
        setFormValues({...formValues, minimum_order_price: parseInt(e.currentTarget.value)})
    }

    const handlePublicDateChange = (e: FocusEvent<HTMLInputElement, Element>) => {
        setFormValues({...formValues, public_date: e.currentTarget.value})
    }

    const handleExpirationDateChange = (e: FocusEvent<HTMLInputElement, Element>) => {
        setFormValues({...formValues, expiration_date: e.currentTarget.value})
    }

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
                                Voucher Name
                            </span>
                        </div>
                        <div className='col-span-8'>
                            <TextBox
                                required={true}
                                placeholder='Voucher name'
                                value={formValues.code}
                                onChange={handleNameChange}
                            ></TextBox>
                        </div>
                    </div>
                    <div className='grid grid-cols-12' style={{marginTop: 25}}>
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Discount
                            </span>
                        </div>
                        <div className='col-span-8'>
                            <InputNumber
                                required={true}
                                placeholder='Input'
                                value={formValues.value}
                                onChange={handleDiscountChange}
                            ></InputNumber>
                        </div>
                    </div>
                    <div className='grid grid-cols-12' style={{marginTop: 25}}>
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Minimum Order Price
                            </span>
                        </div>
                        <div className='col-span-8'>
                            <InputNumber
                                required={true}
                                placeholder='Input'
                                value={formValues.minimum_order_price}
                                onChange={handleMinimumPriceChange}
                            ></InputNumber>
                        </div>
                    </div>
                    <div className='grid grid-cols-12' style={{marginTop: 25}}>
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Public Date
                            </span>
                        </div>
                        <div className='col-span-8'>
                            <TextBox
                                required={true}
                                placeholder='Input'
                                value={formValues.public_date}
                                onChange={handlePublicDateChange}
                            ></TextBox>
                        </div>
                    </div>
                    <div className='grid grid-cols-12' style={{marginTop: 25}}>
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Expiration Date
                            </span>
                        </div>
                        <div className='col-span-8'>
                            <TextBox
                                required={true}
                                placeholder='Input'
                                value={formValues.expiration_date}
                                onChange={handleExpirationDateChange}
                            ></TextBox>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-3' style={{marginTop: 25}}>
                    <div className='col-span-2'></div>
                    <div className='col-span-1 flex justify-content-end'>
                        <Button className='text-md'
                            style={{
                                color: '#777',
                                border: '1px solid #d9d9d9',
                                paddingTop: 10,
                                paddingBottom: 10,
                                paddingLeft: 22,
                                paddingRight: 22,
                                marginRight: 20,
                            }}
                        >
                            Cancel
                        </Button>
                        <Button className='text-md'
                            style={{
                                color: 'white',
                                backgroundColor: '#00ADB5',
                                paddingTop: 10,
                                paddingBottom: 10,
                                paddingLeft: 22,
                                paddingRight: 22,
                            }}
                        >
                            Save and Publish
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}