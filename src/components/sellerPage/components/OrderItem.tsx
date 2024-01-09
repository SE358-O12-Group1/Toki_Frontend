'use client';
import { IOrder, ORDER_STATUS } from '@/components/productPage/mockData';

import DropdownButton from '@/components/common/DropdownButton';
import Button from '@/components/common/Button';
import { formatCurrency } from '@/utils/utils';
import ProductType from '@/types/ProductType';
import {
    getRelatedProducts,
    setDetailProduct
} from '@/redux/slices/product.slice';
import { useAppDispatch } from '@/redux/hook';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const statuses = [
    'ALL',
    ORDER_STATUS.BEING_PREPARED,
    ORDER_STATUS.CANCELLED,
    ORDER_STATUS.COMPLETED,
    ORDER_STATUS.TO_RECEIVE,
    ORDER_STATUS.TO_SHIP
];

export interface IOrderItemProps {
    order: IOrder;
}
export default function OrderItem({ order }: IOrderItemProps) {
    function handleUpdate() {
        // TODO
    }

    const dispatch = useAppDispatch();
    const router = useRouter();

    const [isExpanded, setIsExpanded] = useState(false);

    const handleClickProduct = (product: ProductType) => {
        dispatch(setDetailProduct(product));
        dispatch(getRelatedProducts(product.category._id));
        router.push(`/products/${product._id}`);
    };

    return (
        <div className='mb-4 rounded-md border'>
            {/* Address */}
            <div className='container rounded-md bg-gray-100 px-4 py-2 capitalize text-gray-500'>
                <div className='mt-2 grid grid-cols-4 items-center'>
                    <div className='text-md col-span-1'>
                        <p>
                            <span className='font-semibold'>Name:</span>{' '}
                            <span className=''>{order.user.name}</span>
                        </p>
                        <p className='text-main font-semibold '>
                            <span className=''>Total:</span>{' '}
                            {formatCurrency(order.total)} đ
                        </p>
                    </div>

                    <div className='text-md col-span-2 text-gray-600'>
                        <p>
                            <span className='font-semibold'>Phone Number:</span>{' '}
                            {order.user.phone || 'None'}
                        </p>
                        <p>
                            <span className='font-semibold'>Address:</span>{' '}
                            {order.address}
                        </p>
                    </div>

                    <div className='text-md col-span-1 flex grid grid-cols-2 items-center pr-4 text-gray-600'>
                        <DropdownButton
                            className='nowrap border-main col-span-1 mr-4 rounded-md p-2'
                            items={getStatusOpstions(order.status)}
                            value={order.status.toUpperCase()}
                            onSelect={function (selectedItem: number): void {}}
                        ></DropdownButton>

                        <Button
                            className='col-span-1 ml-4'
                            onClick={() => {
                                handleUpdate();
                            }}
                        >
                            Update
                        </Button>
                    </div>
                </div>
            </div>

            {/* Heading */}
            <div className='container sticky top-0 rounded-md bg-white px-4 py-0'>
                <div className=' grid grid-cols-12 items-center rounded-sm  bg-white py-3 pl-4 pr-3 text-sm'>
                    <div className='col-span-6'>Products Ordered</div>
                    <div className='col-span-6'>
                        <div className='grid grid-cols-6 items-center'>
                            <div className='col-span-2 mx-auto text-sm text-gray-600'>
                                Price
                            </div>
                            <div className='col-span-2 mx-auto text-sm text-gray-600'>
                                Quantity
                            </div>
                            <div className='col-span-2 mx-auto text-sm text-gray-600'>
                                Total
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rounded-md'>
                {!isExpanded && (
                    <div className='rounded-md bg-white p-3'>
                        <div className='grid grid-cols-12 items-center rounded-sm bg-white pl-4 pr-3  text-center text-sm text-gray-500 first:mt-0'>
                            <div className='col-span-6'>
                                <div className='flex'>
                                    <div className='flex-grow'>
                                        <div className='flex'>
                                            <button
                                                className='h-20 w-20 flex-shrink-0'
                                                onClick={() =>
                                                    handleClickProduct(
                                                        order.orders[0].product
                                                    )
                                                }
                                            >
                                                <img
                                                    alt={
                                                        order.orders[0].product
                                                            .name
                                                    }
                                                    src={
                                                        order.orders[0].product
                                                            .images[0]
                                                    }
                                                />
                                            </button>
                                            <div className='my-auto p-2'>
                                                <button
                                                    onClick={() =>
                                                        handleClickProduct(
                                                            order.orders[0]
                                                                .product
                                                        )
                                                    }
                                                    className='my-auto line-clamp-2 text-left font-semibold text-black'
                                                >
                                                    {
                                                        order.orders[0].product
                                                            .name
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-6'>
                                <div className='grid grid-cols-6 items-center'>
                                    <div className='text-main col-span-2 text-center text-xl font-medium'>
                                        {formatCurrency(
                                            order.orders[0].product.price
                                        )}{' '}
                                        ₫
                                    </div>
                                    <div className=' text-md col-span-2 font-medium'>
                                        {order.orders[0].quantity}
                                    </div>
                                    <div className='text-main col-span-2 text-center text-xl font-medium'>
                                        {formatCurrency(
                                            order.orders[0].product.price *
                                                order.orders[0].quantity
                                        )}
                                        ₫
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {order.orders.length > 0 && isExpanded && (
                    <div className='rounded-md bg-white p-3'>
                        {order.orders.map((product, index) => (
                            <div key={index}>
                                <div className='grid grid-cols-12 items-center rounded-sm bg-white pl-4 pr-3  text-center text-sm text-gray-500 first:mt-0'>
                                    <div className='col-span-6'>
                                        <div className='flex'>
                                            <div className='flex-grow'>
                                                <div className='flex'>
                                                    <button
                                                        className='h-20 w-20 flex-shrink-0'
                                                        onClick={() =>
                                                            handleClickProduct(
                                                                product.product
                                                            )
                                                        }
                                                    >
                                                        <img
                                                            alt={
                                                                product.product
                                                                    .name
                                                            }
                                                            src={
                                                                product.product
                                                                    .images[0]
                                                            }
                                                        />
                                                    </button>
                                                    <div className='my-auto p-2'>
                                                        <button
                                                            onClick={() =>
                                                                handleClickProduct(
                                                                    product.product
                                                                )
                                                            }
                                                            className='my-auto line-clamp-2 text-left font-semibold text-black'
                                                        >
                                                            {
                                                                product.product
                                                                    .name
                                                            }
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-6'>
                                        <div className='grid grid-cols-6 items-center'>
                                            <div className='text-main col-span-2 text-center text-xl font-medium'>
                                                {formatCurrency(
                                                    product.product.price
                                                )}{' '}
                                                ₫
                                            </div>
                                            <div className=' text-md col-span-2 font-medium'>
                                                {product.quantity}
                                            </div>
                                            <div className='text-main col-span-2 text-center text-xl font-medium'>
                                                {formatCurrency(
                                                    product.product.price *
                                                        product.quantity
                                                )}
                                                ₫
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='container'>
                                    <div className='dashed-divider'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <button
                    className='text-md full-width-div flex justify-center bg-gray-200 p-2 text-center'
                    onClick={() => {
                        setIsExpanded(!isExpanded);
                    }}
                >
                    {isExpanded ? 'Hide ⋀' : 'See more ⋁'}
                </button>
            </div>
        </div>
    );
}

function getStatusOpstions(currentStatus: string): string[] {
    if (currentStatus == ORDER_STATUS.BEING_PREPARED) {
        return [
            ORDER_STATUS.TO_SHIP.toUpperCase(),
            ORDER_STATUS.CANCELLED.toUpperCase()
        ];
    }
    if (currentStatus == ORDER_STATUS.TO_RECEIVE) {
        return [
            ORDER_STATUS.COMPLETED.toUpperCase(),
            ORDER_STATUS.CANCELLED.toUpperCase()
        ];
    }
    if (currentStatus == ORDER_STATUS.TO_SHIP) {
        return [
            ORDER_STATUS.TO_RECEIVE.toUpperCase(),
            ORDER_STATUS.CANCELLED.toUpperCase()
        ];
    }
    return [];
}
