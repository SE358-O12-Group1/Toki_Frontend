'use client';
import Button from '@/components/common/Button';
import QuantityIncrementer from '@/components/productPage/components/QuantityIncrementer';
import {
    IProduct,
    IProductInCart,
    mockCartProducts,
    mockProducts
} from '@/components/productPage/mockData';
import { avatarPlaceholder } from '@/constants/common';
import { formatCurrency, generateNameId, rateSale } from '@/utils/utils';
import { IconButton } from '@mui/material';
import { produce } from 'immer';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import trashIcon from '/public/assets/images/trash.png';

export default function CartDetail() {
    const productsInCart = mockCartProducts;
    const [productsCheck, setProductsCheck] = useState(
        productsInCart.map((e) => {
            return {
                cartProduct: e,
                checked: false
            };
        })
    );

    const checkedPurchases: IProductInCart[] = [];

    const checkedPurchasesCount = checkedPurchases.length;

    const isAllChecked = useMemo(
        () => productsCheck.every((purchase) => purchase.checked),
        [productsCheck]
    );
    const totalCheckedPurchasePrice = useMemo(
        () =>
            checkedPurchases.reduce((result, current) => {
                console.log('HELOOOOOO');
                return result + current.product.price * current.quantity;
            }, 0),
        [checkedPurchases]
    );
    const totalCheckedPurchaseSavingPrice = useMemo(
        () =>
            checkedPurchases.reduce((result, current) => {
                console.log(
                    (current.product.normalPrice ||
                        current.product.price - current.product.price) *
                        current.quantity
                );
                return (
                    result +
                    (current.product.normalPrice ||
                        current.product.price - current.product.price) *
                        current.quantity
                );
            }, 0),
        [checkedPurchases]
    );

    const handleCheck =
        (purchaseIndex: number) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setProductsCheck(
                produce((draft) => {
                    draft[purchaseIndex].checked = event.target.checked;
                })
            );
        };

    const handleCheckAll = () => {
        setProductsCheck((prev) =>
            prev.map((purchase) => ({
                ...purchase,
                checked: !isAllChecked
            }))
        );
    };

    const handleTypeQuantity = (purchaseIndex: number) => (value: number) => {
        setProductsCheck(
            produce((draft) => {
                draft[purchaseIndex].cartProduct.quantity = value;
            })
        );
    };

    const handleQuantity = (
        purchaseIndex: number,
        value: number,
        enable: boolean
    ) => {
        if (enable) {
            // const purchase = productsCheck[purchaseIndex];
            // updatePurchaseMutation.mutate({
            //     product_id: purchase.product._id,
            //     buy_count: value
            // });
            setProductsCheck(
                produce((draft) => {
                    draft[purchaseIndex].cartProduct.quantity = value;
                })
            );
        }
    };

    const handleDelete = (purchaseIndex: number) => () => {
        //TODO
        setProductsCheck(productsCheck.slice(purchaseIndex, 1));
    };

    const handleDeleteManyPurchases = () => {
        //TODO
        // const purchasesIds = checkedPurchases.map((purchase) => purchase._id);
        // deletePurchasesMutation.mutate(purchasesIds);
        setProductsCheck([]);
    };

    const handlePlaceOrder = () => {
        //TODO
    };

    return (
        <div className='bg-neutral-100 py-4'>
            <div className='container'>
                {productsCheck && productsCheck.length > 0 ? (
                    <>
                        <div className='overflow-auto'>
                            <div className='min-w-[1000px]'>
                                <div className='grid grid-cols-12 rounded-sm bg-white px-9 py-5 text-sm capitalize text-gray-500 shadow'>
                                    <div className='col-span-6'>
                                        <div className='flex items-center'>
                                            <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                                                <input
                                                    type='checkbox'
                                                    className='accent-main h-5 w-5'
                                                    checked={true}
                                                    onChange={handleCheckAll}
                                                />
                                            </div>
                                            <div className='flex-grow text-black'>
                                                {'Select All'}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-6'>
                                        <div className='grid grid-cols-5 text-center'>
                                            <div className='col-span-2'>
                                                {'Price'}
                                            </div>
                                            <div className='col-span-1'>
                                                {'Quantity'}
                                            </div>
                                            <div className='col-span-1'>
                                                {'Total'}
                                            </div>
                                            <div className='col-span-1'>
                                                {'Delete'}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {productsCheck.length > 0 && (
                                    <div className='my-3 rounded-sm bg-white p-3 shadow'>
                                        {productsCheck.map(
                                            (purchase, index: number) => (
                                                <div
                                                    key={
                                                        purchase.cartProduct._id
                                                    }
                                                    className='grid grid-cols-12 items-center rounded-sm border border-gray-200 bg-white py-3 pl-4 text-center text-sm text-gray-500 first:mt-0'
                                                >
                                                    <div className='col-span-6'>
                                                        <div className='flex'>
                                                            <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                                                                <input
                                                                    type='checkbox'
                                                                    className='accent-main h-5 w-5'
                                                                    checked={
                                                                        purchase.checked
                                                                    }
                                                                    onChange={handleCheck(
                                                                        index
                                                                    )}
                                                                />
                                                            </div>
                                                            <div className='flex-grow'>
                                                                <div className='flex'>
                                                                    <Link
                                                                        className='h-20 w-20 flex-shrink-0'
                                                                        href={`${'/'}${generateNameId(
                                                                            {
                                                                                name: purchase
                                                                                    .cartProduct
                                                                                    .product
                                                                                    .name,
                                                                                id: purchase
                                                                                    .cartProduct
                                                                                    ._id
                                                                            }
                                                                        )}`}
                                                                    >
                                                                        <img
                                                                            alt={
                                                                                purchase
                                                                                    .cartProduct
                                                                                    .product
                                                                                    .name
                                                                            }
                                                                            src={
                                                                                purchase
                                                                                    .cartProduct
                                                                                    .product
                                                                                    .images[0]
                                                                            }
                                                                        />
                                                                    </Link>
                                                                    <div className='flex-grow p-2'>
                                                                        <Link
                                                                            href={`${'/'}${generateNameId(
                                                                                {
                                                                                    name: purchase
                                                                                        .cartProduct
                                                                                        .product
                                                                                        .name,
                                                                                    id: purchase
                                                                                        .cartProduct
                                                                                        .product
                                                                                        ._id
                                                                                }
                                                                            )}`}
                                                                            className='my-auto line-clamp-2 text-left font-semibold text-black'
                                                                        >
                                                                            {
                                                                                purchase
                                                                                    .cartProduct
                                                                                    .product
                                                                                    .name
                                                                            }
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-span-6'>
                                                        <div className='grid grid-cols-5 items-center'>
                                                            <div className='col-span-2'>
                                                                <div className='items-center justify-center'>
                                                                    <div className='text-main text-xl font-medium'>
                                                                        {formatCurrency(
                                                                            purchase
                                                                                .cartProduct
                                                                                .product
                                                                                .price
                                                                        )}{' '}
                                                                        ₫
                                                                    </div>
                                                                    {purchase
                                                                        .cartProduct
                                                                        .product
                                                                        .normalPrice && (
                                                                        <div className='font-light text-gray-400 line-through'>
                                                                            {formatCurrency(
                                                                                purchase
                                                                                    .cartProduct
                                                                                    .product
                                                                                    .normalPrice!
                                                                            )}{' '}
                                                                            ₫
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className='col-span-1'>
                                                                <QuantityIncrementer
                                                                    max={
                                                                        purchase
                                                                            .cartProduct
                                                                            .product
                                                                            .quantity
                                                                    }
                                                                    value={
                                                                        purchase
                                                                            .cartProduct
                                                                            .quantity
                                                                    }
                                                                    classNameWrapper='flex items-center'
                                                                    onIncrease={(
                                                                        value
                                                                    ) =>
                                                                        handleQuantity(
                                                                            index,
                                                                            value,
                                                                            value <=
                                                                                purchase
                                                                                    .cartProduct
                                                                                    .product
                                                                                    .quantity
                                                                        )
                                                                    }
                                                                    onDecrease={(
                                                                        value
                                                                    ) =>
                                                                        handleQuantity(
                                                                            index,
                                                                            value,
                                                                            value >=
                                                                                1
                                                                        )
                                                                    }
                                                                    onType={handleTypeQuantity(
                                                                        index
                                                                    )}
                                                                    onFocusOut={(
                                                                        value
                                                                    ) =>
                                                                        handleQuantity(
                                                                            index,
                                                                            value,
                                                                            value >=
                                                                                1 &&
                                                                                value <=
                                                                                    purchase
                                                                                        .cartProduct
                                                                                        .product
                                                                                        .quantity &&
                                                                                value !==
                                                                                    productsInCart[
                                                                                        index
                                                                                    ]
                                                                                        .quantity
                                                                        )
                                                                    }
                                                                    disabled={
                                                                        true
                                                                        // purchase.disabled
                                                                    }
                                                                />
                                                            </div>
                                                            <div className='col-span-1'>
                                                                <span className='text-main text-xl font-medium'>
                                                                    {formatCurrency(
                                                                        purchase
                                                                            .cartProduct
                                                                            .product
                                                                            .price *
                                                                            purchase
                                                                                .cartProduct
                                                                                .quantity
                                                                    )}
                                                                    ₫
                                                                </span>
                                                            </div>
                                                            <div className='col-span-1'>
                                                                <IconButton
                                                                    onClick={handleDelete(
                                                                        index
                                                                    )}
                                                                    className='hover:text-orange bg-none text-black transition-colors'
                                                                >
                                                                    <img
                                                                        src={
                                                                            trashIcon.src
                                                                        }
                                                                        alt=''
                                                                    />
                                                                </IconButton>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='sticky bottom-0 z-10 mt-1 flex flex-col rounded-sm border border-gray-100 bg-white px-5 py-4 shadow sm:flex-row sm:items-center'>
                            <div className='flex items-center'>
                                <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                                    <input
                                        type='checkbox'
                                        className='accent-main h-5 w-5'
                                        checked={true}
                                        onChange={handleCheckAll}
                                    />
                                </div>
                                <button
                                    className='mx-3 border-none bg-none'
                                    onClick={handleCheckAll}
                                >
                                    {'cart body.select all'} (
                                    {productsCheck.length})
                                </button>
                            </div>

                            <div className='flex flex-col sm:ml-auto sm:mt-0 sm:flex-row sm:items-center'>
                                <div>
                                    <div className='flex items-center sm:justify-end'>
                                        <div>
                                            {''} ({checkedPurchasesCount}{' '}
                                            {'cart body.item'}
                                            {checkedPurchasesCount > 1}
                                            ):
                                        </div>
                                        <div className='text-orange ml-2 text-2xl'>
                                            ₫
                                            {formatCurrency(
                                                totalCheckedPurchasePrice
                                            )}
                                        </div>
                                    </div>
                                    <div className='flex items-center text-sm sm:justify-end'>
                                        <div className='text-gray-500'>
                                            {'cart body.saved'}
                                        </div>
                                        <div className='text-orange ml-6'>
                                            ₫
                                            {formatCurrency(
                                                totalCheckedPurchaseSavingPrice
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    className='mt-5 flex h-10 w-52 items-center justify-center bg-red-500 text-sm uppercase text-white hover:bg-red-600 sm:ml-4 sm:mt-0'
                                    onClick={handlePlaceOrder}
                                >
                                    {'Check out'}
                                </Button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='w-full py-14 text-center'>
                        <img
                            src={avatarPlaceholder}
                            alt='No purchase'
                            className='inline-block h-24 w-24'
                        />
                        <div className='mt-5 font-bold leading-4 text-gray-500'>
                            {'cart body.empty cart'}
                        </div>
                        <Link
                            href={'/'}
                            className='bg-orange hover:bg-orange/80 mt-5 inline-block rounded-sm px-12 py-2 uppercase text-white transition-all'
                        >
                            {'cart body.go shopping'}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
