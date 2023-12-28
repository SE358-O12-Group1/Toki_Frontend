'use client';

import { produce } from 'immer';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

// Components
import Button from '@/components/common/Button';
import QuantityIncrementer from '@/components/productPage/components/QuantityIncrementer';
import EmptyCart from './EmptyCart';

// Utils
import { formatCurrency } from '@/utils/utils';
import trashIcon from '/public/assets/images/trash.png';

// Types
import { CartItemType } from '@/types/CartType';
import ProductType, { SellerType } from '@/types/ProductType';

// Redux
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { setCartItem, deleteFromCart } from '@/redux/slices/cart.slice';
import {
    getRelatedProducts,
    setDetailProduct
} from '@/redux/slices/product.slice';
import { toast } from 'react-toastify';
import { toastMessages, toastOptions } from '@/constants/toast';

export default function CartDetail() {
    useEffect(() => {
        document.title = 'TOKI | Cart';
    }, []);

    const router = useRouter();

    const dispatch = useAppDispatch();

    const { cart } = useAppSelector((state) => state.cart);

    const [productsCheck, setProductsCheck] = useState(
        cart.map((e) => {
            return {
                cartProduct: e,
                checked: e.checked
            };
        })
    );

    const checkedPurchases: CartItemType[] = useMemo(() => {
        const result: CartItemType[] = [];
        productsCheck.forEach((product) => {
            if (product.checked) result.push(product.cartProduct);
        });
        return result;
    }, [productsCheck]);

    const isAllChecked: boolean = useMemo(
        () => productsCheck.every((purchase) => purchase.checked),
        [productsCheck]
    );

    const totalCheckedPurchasePrice = useMemo(
        () =>
            checkedPurchases.reduce((result, current) => {
                return result + current.product.price * current.quantity;
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
            dispatch(
                setCartItem({
                    ...cart[purchaseIndex],
                    checked: event.target.checked
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
        cart.forEach((purchase) => {
            dispatch(
                setCartItem({
                    ...purchase,
                    checked: !isAllChecked
                })
            );
        });
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
            setProductsCheck(
                produce((draft) => {
                    draft[purchaseIndex].cartProduct.quantity = value;
                })
            );
            dispatch(
                setCartItem({
                    ...cart[purchaseIndex],
                    quantity: value
                })
            );
        }
    };

    const handleDelete = (purchaseIndex: number) => () => {
        toast.success(toastMessages.deleteFromCart, toastOptions);
        const temp = [
            ...productsCheck.slice(0, purchaseIndex),
            ...productsCheck.slice(purchaseIndex + 1)
        ];
        setProductsCheck(temp);
        dispatch(deleteFromCart(cart[purchaseIndex].product._id));
    };

    const handlePlaceOrder = () => {
        const checkoutList = checkedPurchases.map((purchase, index) => {
            return {
                product: {
                    id: purchase.product._id,
                    name: purchase.product.name,
                    price: purchase.product.price,
                    image: purchase.product.images[0]
                },
                seller: {
                    id: purchase.product.seller._id,
                    name: purchase.product.seller.name
                },
                quantity: purchase.quantity
                // variantIndex: productsCheck[index].cartProduct.variantId,
                // variantName:
                //     purchase.product.variants &&
                //     purchase.product.variants[selectedVariants[index] || 0]
            };
        });
        const encodedObject = encodeURIComponent(JSON.stringify(checkoutList));
        router.push(`/cart/checkout?data=${encodedObject}`);
        console.log(checkedPurchases);
    };

    const groupProductsByShops = () => {
        interface IProductGroup {
            seller: SellerType;
            products: number[];
        }

        const productGroups: IProductGroup[] = [];

        productsCheck.forEach((product, index) => {
            var temp = -1;

            productGroups.forEach((group, groupIndex) => {
                console.log(group.seller, product.cartProduct.product.seller);
                if (
                    group.seller._id === product.cartProduct.product.seller._id
                ) {
                    temp = groupIndex;
                    productGroups[groupIndex].products.push(index);
                }
            });

            if (temp === -1) {
                productGroups.push({
                    seller: product.cartProduct.product.seller,
                    products: [index]
                });
            }
        });
        return productGroups;
    };

    const handleClickProduct = (product: ProductType) => {
        dispatch(setDetailProduct(product));
        dispatch(getRelatedProducts(product.category._id));
        router.push(`/products/${product._id}`);
    };

    return (
        <div className='min-h-[70vh] bg-neutral-100 py-4'>
            <div className='container'>
                {productsCheck && productsCheck.length > 0 ? (
                    <>
                        <div className='overflow-auto'>
                            <div className='min-w-[1000px]'>
                                {/* Heading */}
                                <div className='grid grid-cols-12 rounded-sm bg-white py-4 pl-5 pr-3 text-sm capitalize text-gray-500'>
                                    <div className='col-span-6'>
                                        <div className='flex items-center'>
                                            <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                                                <input
                                                    type='checkbox'
                                                    className='accent-main h-5 w-5'
                                                    checked={isAllChecked}
                                                    onChange={handleCheckAll}
                                                />
                                            </div>

                                            <button
                                                className='border-none bg-none'
                                                onClick={handleCheckAll}
                                            >
                                                {'Select All'} (
                                                {productsCheck.length})
                                            </button>
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

                                {groupProductsByShops().map(
                                    (productsShop, index) => {
                                        return (
                                            <div key={index}>
                                                <div className='mt-3 flex bg-white py-4 pl-5 pr-3 capitalize text-white'>
                                                    <div className='bg-main rounded-xl px-4 py-2'>
                                                        {
                                                            productsShop.seller
                                                                .name
                                                        }
                                                    </div>
                                                </div>
                                                {productsShop.products.length >
                                                    0 && (
                                                    <div className='rounded-sm bg-white p-3'>
                                                        {productsShop.products.map(
                                                            (
                                                                product,
                                                                index
                                                            ) => (
                                                                <div
                                                                    key={index}
                                                                    className='grid grid-cols-12 items-center rounded-sm border border-gray-200 bg-white py-3 pl-4 text-center text-sm text-gray-500 first:mt-0'
                                                                >
                                                                    <div className='col-span-6'>
                                                                        <div className='flex'>
                                                                            <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                                                                                <input
                                                                                    type='checkbox'
                                                                                    className='accent-main h-5 w-5'
                                                                                    checked={
                                                                                        productsCheck[
                                                                                            product
                                                                                        ]
                                                                                            .checked
                                                                                    }
                                                                                    onChange={handleCheck(
                                                                                        product
                                                                                    )}
                                                                                />
                                                                            </div>
                                                                            <div className='flex-grow'>
                                                                                <div className='flex'>
                                                                                    <div
                                                                                        className='h-20 w-20 flex-shrink-0'
                                                                                        onClick={() =>
                                                                                            handleClickProduct(
                                                                                                productsCheck[
                                                                                                    product
                                                                                                ]
                                                                                                    .cartProduct
                                                                                                    .product
                                                                                            )
                                                                                        }
                                                                                    >
                                                                                        <img
                                                                                            alt={
                                                                                                productsCheck[
                                                                                                    product
                                                                                                ]
                                                                                                    .cartProduct
                                                                                                    .product
                                                                                                    .name
                                                                                            }
                                                                                            src={
                                                                                                productsCheck[
                                                                                                    product
                                                                                                ]
                                                                                                    .cartProduct
                                                                                                    .product
                                                                                                    .images[0]
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                    <div className='my-auto p-2'>
                                                                                        <div
                                                                                            className='my-auto line-clamp-2 text-left font-semibold text-black'
                                                                                            onClick={() =>
                                                                                                handleClickProduct(
                                                                                                    productsCheck[
                                                                                                        product
                                                                                                    ]
                                                                                                        .cartProduct
                                                                                                        .product
                                                                                                )
                                                                                            }
                                                                                        >
                                                                                            {
                                                                                                productsCheck[
                                                                                                    product
                                                                                                ]
                                                                                                    .cartProduct
                                                                                                    .product
                                                                                                    .name
                                                                                            }
                                                                                        </div>
                                                                                        {productsCheck[
                                                                                            product
                                                                                        ]
                                                                                            .cartProduct
                                                                                            .product
                                                                                            .variants && (
                                                                                            <div className='mt-2 flex text-left'>
                                                                                                {productsCheck[
                                                                                                    product
                                                                                                ]
                                                                                                    .cartProduct
                                                                                                    .variants &&
                                                                                                    productsCheck[
                                                                                                        product
                                                                                                    ].cartProduct.variants?.map(
                                                                                                        (
                                                                                                            variant,
                                                                                                            index
                                                                                                        ) => (
                                                                                                            <div
                                                                                                                key={
                                                                                                                    index
                                                                                                                }
                                                                                                                className='mr-2 rounded-full bg-gray-200 px-2 py-1 text-xs'
                                                                                                            >
                                                                                                                {
                                                                                                                    variant
                                                                                                                }
                                                                                                            </div>
                                                                                                        )
                                                                                                    )}
                                                                                            </div>
                                                                                        )}
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
                                                                                            productsCheck[
                                                                                                product
                                                                                            ]
                                                                                                .cartProduct
                                                                                                .product
                                                                                                .price
                                                                                        )}{' '}
                                                                                        ₫
                                                                                    </div>
                                                                                    {productsCheck[
                                                                                        product
                                                                                    ]
                                                                                        .cartProduct
                                                                                        .product
                                                                                        .normalPrice && (
                                                                                        <div className='font-light text-gray-400 line-through'>
                                                                                            {formatCurrency(
                                                                                                productsCheck[
                                                                                                    product
                                                                                                ]
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
                                                                                        productsCheck[
                                                                                            product
                                                                                        ]
                                                                                            .cartProduct
                                                                                            .product
                                                                                            .quantity
                                                                                    }
                                                                                    value={
                                                                                        productsCheck[
                                                                                            product
                                                                                        ]
                                                                                            .cartProduct
                                                                                            .quantity
                                                                                    }
                                                                                    classNameWrapper='flex items-center'
                                                                                    onIncrease={(
                                                                                        value
                                                                                    ) =>
                                                                                        handleQuantity(
                                                                                            product,
                                                                                            value,
                                                                                            value <=
                                                                                                productsCheck[
                                                                                                    product
                                                                                                ]
                                                                                                    .cartProduct
                                                                                                    .product
                                                                                                    .quantity
                                                                                        )
                                                                                    }
                                                                                    onDecrease={(
                                                                                        value
                                                                                    ) =>
                                                                                        handleQuantity(
                                                                                            product,
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
                                                                                                    productsCheck[
                                                                                                        product
                                                                                                    ]
                                                                                                        .cartProduct
                                                                                                        .product
                                                                                                        .quantity &&
                                                                                                value !==
                                                                                                    cart[
                                                                                                        index
                                                                                                    ]
                                                                                                        .quantity
                                                                                        )
                                                                                    }
                                                                                />
                                                                            </div>
                                                                            <div className='col-span-1'>
                                                                                <span className='text-main text-xl font-medium'>
                                                                                    {formatCurrency(
                                                                                        productsCheck[
                                                                                            product
                                                                                        ]
                                                                                            .cartProduct
                                                                                            .product
                                                                                            .price *
                                                                                            productsCheck[
                                                                                                product
                                                                                            ]
                                                                                                .cartProduct
                                                                                                .quantity
                                                                                    )}

                                                                                    ₫
                                                                                </span>
                                                                            </div>
                                                                            <div className='col-span-1'>
                                                                                <IconButton
                                                                                    onClick={handleDelete(
                                                                                        product
                                                                                    )}
                                                                                    className='hover:text-main bg-none text-black transition-colors'
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
                                        );
                                    }
                                )}
                            </div>
                        </div>

                        <div className='sticky bottom-0 z-10 mt-3 flex justify-between rounded-sm border border-gray-100 bg-white px-5 py-4 shadow'>
                            <div className='flex items-center'>
                                <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                                    <input
                                        type='checkbox'
                                        className='accent-main h-5 w-5'
                                        checked={isAllChecked}
                                        onChange={handleCheckAll}
                                    />
                                </div>
                                <button
                                    className='mx-3 border-none bg-none'
                                    onClick={handleCheckAll}
                                >
                                    {'Select All'} ({productsCheck.length})
                                </button>
                            </div>

                            <div className='flex items-center'>
                                <div
                                    className='flex'
                                    style={{
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {'Item(s): '}
                                    {checkedPurchases.length}
                                </div>
                                <div className='ml-10 mr-4'>{'Total:'}</div>
                                <div className='text-main mr-4 text-xl'>
                                    {formatCurrency(totalCheckedPurchasePrice)}₫
                                </div>
                                <Button
                                    className='h-10 w-52 bg-red-500 p-4 text-sm uppercase text-white'
                                    onClick={handlePlaceOrder}
                                    disable={checkedPurchases.length <= 0}
                                >
                                    {'Check out'}
                                </Button>
                            </div>
                        </div>
                    </>
                ) : (
                    <EmptyCart />
                )}
            </div>
        </div>
    );
}
