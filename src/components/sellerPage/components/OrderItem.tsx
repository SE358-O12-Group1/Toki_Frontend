/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// components
import DropdownButton from '@/components/common/DropdownButton';
import Button from '@/components/common/Button';

// types
// import ProductType from '@/types/ProductType';
import { OrderType } from '@/types/OrderType';

// utils
import { formatCurrency } from '@/utils/utils';
import {
    ORDER_STATUS,
    convertStatusToValue,
    covertStatusToName
} from '@/constants/orderStatus';
import { useMutation, useQueryClient } from 'react-query';
import orderApi from '@/apis/order.api';
import { toast } from 'react-toastify';
import { toastOptions } from '@/constants/toast';

export interface IOrderItemProps {
    order: OrderType;
    isEditable: boolean;
    isUserOrder?: boolean;
}
export default function OrderItem({
    order,
    isEditable,
    isUserOrder
}: IOrderItemProps) {
    // const [status, setStatus] = useState(order.status);

    const queryClient = useQueryClient();

    const [status, setStatus] = useState<number>(order.order_lines[0]?.status);

    const { mutate: updateOrderStatus } = useMutation({
        mutationFn: ({
            orderLineIds,
            status
        }: {
            orderLineIds: string[];
            status: number;
        }) => orderApi.updateOrderStatus({ orderLineIds, status }),
        onSuccess: () => {
            queryClient.invalidateQueries('shopOrders');
        }
    });

    const handleUpdate = () => {
        const orderLineIds = order.order_lines.map(
            (orderLine) => orderLine._id
        );

        updateOrderStatus({
            orderLineIds,
            status
        });

        toast.success('Update order status successfully', toastOptions);
    };

    const [isExpanded, setIsExpanded] = useState(false);

    const handleChangeStatus = (index: number) => {
        const temp = getStatusOpstions(status);
        setStatus(convertStatusToValue(temp[index]));
    };

    // const handleClickProduct = (product: ProductType) => {
    //     dispatch(setDetailProduct(product));
    //     dispatch(getRelatedProducts(product.category._id));
    //     router.push(`/products/${product._id}`);
    // };

    if (order.order_lines.length === 0)
        return <div className='text-base'>Empty</div>;

    return (
        <div className='mb-4 rounded-md border'>
            <div className='container rounded-md bg-gray-100 px-4 py-2 capitalize text-gray-500'>
                <div className='mt-2 grid grid-cols-4 items-center'>
                    <div className='text-md col-span-1'>
                        {isUserOrder ? (
                            <p>
                                <span className='font-semibold'>Shop:</span>{' '}
                                <span className=''>
                                    {order.seller?.name || 'No name'}
                                </span>
                            </p>
                        ) : (
                            <p>
                                <span className='font-semibold'>Name:</span>{' '}
                                <span className=''>
                                    {order.user.name || 'No name'}
                                </span>
                            </p>
                        )}
                        <p className='text-main flex items-center font-semibold'>
                            <span className='mr-2'>Total:</span>
                            {formatCurrency(
                                order.order_lines.reduce(
                                    (acc, order) => acc + order.sub_total,
                                    0
                                )
                            )}{' '}
                            đ
                        </p>
                    </div>

                    <div className='text-md col-span-2 text-gray-600'>
                        <p>
                            <span className='font-semibold'>Phone Number:</span>{' '}
                            {order.user.phone || 'None'}
                        </p>
                        <p>
                            <span className='font-semibold'>Address:</span>{' '}
                            {order.delivery_address}
                        </p>
                    </div>
                    {isEditable ? (
                        <div className='text-md col-span-1 grid grid-cols-2 items-center pr-4 text-gray-600'>
                            <DropdownButton
                                className='nowrap border-main col-span-1 mr-4 rounded-md p-2'
                                items={getStatusOpstions(status)}
                                value={covertStatusToName(status)}
                                onSelect={handleChangeStatus}
                            />
                            <Button
                                className='col-span-1 ml-4'
                                onClick={handleUpdate}
                                // disable={order.status === status}
                            >
                                Update
                            </Button>
                        </div>
                    ) : (
                        <div className='bg-main col-span-1 rounded-md px-4 pr-4 text-center text-lg text-white'>
                            {/* {covertStatusToName(status)} */}
                        </div>
                    )}
                </div>
            </div>

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
                                                // onClick={() =>
                                                //     handleClickProduct(
                                                //         order.order_lines[0]
                                                //             .product
                                                //     )
                                                // }
                                            >
                                                <img
                                                    alt={
                                                        order.order_lines[0]
                                                            .product.name
                                                    }
                                                    src={
                                                        order.order_lines[0]
                                                            .product.images[0]
                                                    }
                                                />
                                            </button>
                                            <div className='my-auto p-2'>
                                                <button
                                                    // onClick={() =>
                                                    //     handleClickProduct(
                                                    //         order.order_lines[0]
                                                    //             .product
                                                    //     )
                                                    // }
                                                    className='my-auto line-clamp-2 text-left font-semibold text-black'
                                                >
                                                    {
                                                        order.order_lines[0]
                                                            .product.name
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
                                            order.order_lines[0].product.price
                                        )}{' '}
                                        ₫
                                    </div>
                                    <div className=' text-md col-span-2 font-medium'>
                                        {order.order_lines[0].quantity}
                                    </div>
                                    <div className='text-main col-span-2 text-center text-xl font-medium'>
                                        {formatCurrency(
                                            order.order_lines[0].product.price *
                                                order.order_lines[0].quantity
                                        )}
                                        ₫
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {order.order_lines.length > 0 && isExpanded && (
                    <div className='rounded-md bg-white p-3'>
                        {order.order_lines.map((product: any, index: any) => (
                            <div key={index}>
                                <div className='grid grid-cols-12 items-center rounded-sm bg-white pl-4 pr-3  text-center text-sm text-gray-500 first:mt-0'>
                                    <div className='col-span-6'>
                                        <div className='flex'>
                                            <div className='flex-grow'>
                                                <div className='flex'>
                                                    <button
                                                        className='h-20 w-20 flex-shrink-0'
                                                        // onClick={() =>
                                                        //     handleClickProduct(
                                                        //         product.product
                                                        //     )
                                                        // }
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
                                                            // onClick={() =>
                                                            //     handleClickProduct(
                                                            //         product.product
                                                            //     )
                                                            // }
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
                {order.order_lines.length > 1 && (
                    <button
                        className='text-md full-width-div flex justify-center bg-gray-200 p-2 text-center'
                        onClick={() => {
                            setIsExpanded(!isExpanded);
                        }}
                    >
                        {isExpanded ? 'Hide ⋀' : 'See more ⋁'}
                    </button>
                )}
            </div>
        </div>
    );
}

function getStatusOpstions(currentStatus: number): string[] {
    const current = covertStatusToName(currentStatus);
    switch (currentStatus) {
        case ORDER_STATUS.BEING_PREPARED.value:
            return [
                current,
                ORDER_STATUS.TO_SHIP.name,
                ORDER_STATUS.CANCELLED.name
            ];
        case ORDER_STATUS.TO_SHIP.value:
            return [current, ORDER_STATUS.TO_RECEIVE.name];
        case ORDER_STATUS.TO_RECEIVE.value:
            return [current, ORDER_STATUS.COMPLETED.name];
        default:
            return [current];
    }

    return Object.values(ORDER_STATUS).map((status) => status.name);
}
