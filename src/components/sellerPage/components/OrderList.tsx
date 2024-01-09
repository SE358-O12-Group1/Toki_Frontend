'use client';

import Button from '@/components/common/Button';
import TextBox from '@/components/common/TextBox';
import { ORDER_STATUS, mockOrders } from '@/components/productPage/mockData';
import { removeVietnamesePhonetics } from '@/utils/utils';
import { useMemo, useState } from 'react';
import OrderItem from './OrderItem';

export default function SellerOrderList() {
    const [searchInput, setSearchInput] = useState('');

    const statuses = [
        'ALL',
        ORDER_STATUS.BEING_PREPARED,
        ORDER_STATUS.CANCELLED,
        ORDER_STATUS.COMPLETED,
        ORDER_STATUS.TO_RECEIVE,
        ORDER_STATUS.TO_SHIP
    ];

    const initialChip = statuses[0];

    const [selectedStatus, setSelectedStatus] = useState<string>(initialChip);

    const handleChipClick = (chipValue: string) => {
        setSelectedStatus(chipValue);
    };

    const filteredOrders = useMemo(() => {
        const orders = mockOrders;
        const filterString = removeVietnamesePhonetics(searchInput.trim());

        return orders.filter(
            (order) =>
                (selectedStatus == 'ALL' || order.status == selectedStatus) &&
                (removeVietnamesePhonetics(
                    order.user.name.toLowerCase()
                ).includes(filterString) ||
                    order.orders.some((order) =>
                        removeVietnamesePhonetics(
                            order.product.name.toLowerCase()
                        ).includes(filterString)
                    ) ||
                    order.orders.some((order) =>
                        removeVietnamesePhonetics(
                            order.product.category.name.toLowerCase()
                        ).includes(filterString)
                    ))
        );
    }, [searchInput, selectedStatus]);

    function handleDelete(index: number) {
        // TODO
    }

    return (
        <div className='container p-4'>
            <div className='grid grid-cols-3'>
                <div className='col-span-2 flex'>
                    <TextBox
                        className='col-span-6 mr-4'
                        placeholder='Product Name'
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                        }}
                        value={searchInput}
                    ></TextBox>
                    <Button className='btn col-span-2'>Search</Button>
                </div>
            </div>
            <span className='text-main mt-4 flex text-xl'>
                {filteredOrders.length} Orders
            </span>
            <div className='mt-4 grid grid-cols-6'>
                <div className='flex'>
                    {statuses.map((chip) => (
                        <div
                            key={chip}
                            className={`hover:bg-main/5 text-md text-nowrap mr-2 flex h-12 items-center justify-center rounded-md px-4 capitalize
                            ${
                                selectedStatus === chip
                                    ? 'border-main'
                                    : 'border'
                            }`}
                            onClick={() => handleChipClick(chip)}
                        >
                            {chip}
                        </div>
                    ))}
                </div>
            </div>
            <div className='container mt-6 px-0'>
                <div className='rounded-sm bg-white '>
                    {filteredOrders.map((order, index) => (
                        <OrderItem order={order} key={index}></OrderItem>
                    ))}
                    {/* {filteredProducts.map((product, index) => (
                        <div key={index}>
                            <div className='grid grid-cols-12 items-center rounded-sm bg-white pr-3 text-center text-sm text-gray-500 first:mt-4'>
                                <div className='col-span-6'>
                                    <div className='flex pl-4'>
                                        <div className='flex-grow'>
                                            <div className='flex'>
                                                <Link
                                                    className='h-20 w-20 flex-shrink-0'
                                                    href={`/products/${product._id}`}
                                                >
                                                    <img
                                                        alt={product.name}
                                                        src={product.images[0]}
                                                    />
                                                </Link>
                                                <div className='my-auto p-2'>
                                                    <Link
                                                        href={`/products/${product._id}`}
                                                        className='my-auto line-clamp-2 text-left font-semibold text-black'
                                                    >
                                                        {product.name}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-6 '>
                                    <div className='grid grid-cols-8 items-center text-lg'>
                                        <div className='text-main col-span-2 text-center text-xl font-medium'>
                                            {formatCurrency(product.price)}₫
                                        </div>
                                        <div className='col-span-2 text-center'>
                                            {product.quantity}
                                        </div>
                                        <div className='col-span-2 text-center'>
                                            {product.sold_quantity}
                                        </div>
                                        <div className='col-span-2 flex text-center'>
                                            <Button
                                                className=''
                                                backgroundColor='#FFFFFF'
                                                textColor='#00adb5'
                                                onClick={() => {
                                                    handleEdit(index);
                                                }}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                className='ml-2'
                                                backgroundColor='#FFFFFF'
                                                textColor='#FF0000'
                                                onClick={() => {
                                                    handleDelete(index);
                                                }}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <div className='dashed-divider'></div>
                            </div>
                        </div>
                    ))}*/}
                </div>
            </div>
        </div>
    );
}
