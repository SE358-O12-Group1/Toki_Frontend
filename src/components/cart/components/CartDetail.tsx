'use client';
import Button from '@/components/common/Button';
import QuantityIncrementer from '@/components/productPage/components/QuantityIncrementer';
import {
    IProduct,
    IProductInCart,
    IUSer,
    mockCartProducts,
    mockProducts
} from '@/components/productPage/mockData';
import { avatarPlaceholder, emptyCart } from '@/constants/common';
import { formatCurrency, generateNameId, rateSale } from '@/utils/utils';
import { IconButton } from '@mui/material';
import { produce } from 'immer';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import trashIcon from '/public/assets/images/trash.png';
import DropdownButton from '@/components/common/DropdownButton';
import { useRouter } from 'next/navigation';

export default function CartDetail() {
    const productsInCart = mockCartProducts;

    /// mockCartProducts là danh sách, mỗi phần tử gồm
    ///     thông tin sản phẩm
    ///     số lượng
    ///     variants

    /// Cái ông Long cần làm là lấy được cái dữ liệu trên rồi gán vô *productsInCart* với 1 trong 2 cái này:
    //      lưu lại số lượng và variant khi chỉnh sửa cart để nhưng lần vào sau thông tin vẫn được lưu
    //      không lưu, mỗi lần vào cart thì variant nếu có sẽ là variant đầu tiên, số lượng là 1
    // Khi user làm này kia xong rồi thì họ chọn checkout, chuyển sang trang checkout, trang đó lấy thẳng thông tin từ trang này qua, không cần đọc từ db (Xem hàm handlePlaceOrder)

    const [productsCheck, setProductsCheck] = useState(
        productsInCart.map((e) => {
            return {
                cartProduct: e,
                checked: false
            };
        })
    );
    const checkedPurchases: IProductInCart[] = useMemo(() => {
        const result: IProductInCart[] = [];
        productsCheck.forEach((product) => {
            if (product.checked) result.push(product.cartProduct);
        });
        return result;
    }, [productsCheck]);

    const selectedVariants: number[] = useMemo(() => {
        const result: number[] = [];
        productsCheck.forEach((product) => {
            if (product.checked)
                result.push(product.cartProduct.variantId || 0);
        });
        return result;
    }, [productsCheck]);

    const checkedPurchasesCount = checkedPurchases.length;

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
        const temp = [
            ...productsCheck.slice(0, purchaseIndex),
            ...productsCheck.slice(purchaseIndex + 1)
        ];
        setProductsCheck(temp);
    };
    const router = useRouter();

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
                quantity: purchase.quantity,
                variantIndex: productsCheck[index].cartProduct.variantId,
                variantName:
                    purchase.product.variants &&
                    purchase.product.variants[selectedVariants[index] || 0]
            };
        });
        const encodedObject = encodeURIComponent(JSON.stringify(checkoutList));
        router.push(`/cart/checkout?data=${encodedObject}`);
        console.log(checkedPurchases);
    };

    const groupProductsByShops = () => {
        interface IProductGroup {
            seller: IUSer;
            products: number[];
        }
        const productGroups: IProductGroup[] = [];
        productsCheck.forEach((product, index) => {
            var temp = -1;
            productGroups.forEach((group, groupIndex) => {
                if (group.seller == product.cartProduct.product.seller) {
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

    return (
        <div className='min-h-[70vh] bg-neutral-100 py-4'>
            <div className='container'>
                {productsCheck && productsCheck.length > 0 ? (
                    <>
                        <div className='overflow-auto'>
                            <div className='min-w-[1000px]'>
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

                                {groupProductsByShops().map((productsShop) => {
                                    return (
                                        <>
                                            <div key={productsShop.seller._id}>
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
                                                                index: number
                                                            ) => (
                                                                <div
                                                                    key={
                                                                        productsCheck[
                                                                            product
                                                                        ]
                                                                            .cartProduct
                                                                            ._id
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
                                                                                    <Link
                                                                                        className='h-20 w-20 flex-shrink-0'
                                                                                        href={`${'/'}${generateNameId(
                                                                                            {
                                                                                                name: productsCheck[
                                                                                                    product
                                                                                                ]
                                                                                                    .cartProduct
                                                                                                    .product
                                                                                                    .name,
                                                                                                id: productsCheck[
                                                                                                    product
                                                                                                ].cartProduct._id.toString()
                                                                                            }
                                                                                        )}`}
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
                                                                                    </Link>
                                                                                    <div className='my-auto p-2'>
                                                                                        <Link
                                                                                            href={`${'/'}${generateNameId(
                                                                                                {
                                                                                                    name: productsCheck[
                                                                                                        product
                                                                                                    ]
                                                                                                        .cartProduct
                                                                                                        .product
                                                                                                        .name,
                                                                                                    id: productsCheck[
                                                                                                        product
                                                                                                    ]
                                                                                                        .cartProduct
                                                                                                        .product
                                                                                                        ._id
                                                                                                }
                                                                                            )}`}
                                                                                            className='my-auto line-clamp-2 text-left font-semibold text-black'
                                                                                        >
                                                                                            {
                                                                                                productsCheck[
                                                                                                    product
                                                                                                ]
                                                                                                    .cartProduct
                                                                                                    .product
                                                                                                    .name
                                                                                            }
                                                                                        </Link>
                                                                                        {productsCheck[
                                                                                            product
                                                                                        ]
                                                                                            .cartProduct
                                                                                            .product
                                                                                            .variants && (
                                                                                            <div className='flex text-left'>
                                                                                                <div className='mr-1'>
                                                                                                    Variants:
                                                                                                </div>
                                                                                                <DropdownButton
                                                                                                    items={
                                                                                                        productsCheck[
                                                                                                            product
                                                                                                        ]
                                                                                                            .cartProduct
                                                                                                            .product
                                                                                                            .variants!
                                                                                                    }
                                                                                                    value={
                                                                                                        productsCheck[
                                                                                                            product
                                                                                                        ]
                                                                                                            .cartProduct
                                                                                                            .product
                                                                                                            .variants![
                                                                                                            productsCheck[
                                                                                                                product
                                                                                                            ]
                                                                                                                .cartProduct
                                                                                                                .variantId ||
                                                                                                                0
                                                                                                        ]
                                                                                                    }
                                                                                                    onSelect={function (
                                                                                                        selectedItem: number
                                                                                                    ): void {
                                                                                                        selectedVariants[
                                                                                                            product
                                                                                                        ] =
                                                                                                            selectedItem;
                                                                                                    }}
                                                                                                ></DropdownButton>
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
                                                                                                    productsInCart[
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
                                        </>
                                    );
                                })}
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
                                    {checkedPurchasesCount}
                                </div>
                                <div className='ml-10 mr-4'>{'Total:'}</div>
                                <div className='text-main mr-4 text-xl'>
                                    {formatCurrency(totalCheckedPurchasePrice)}₫
                                </div>
                                <Button
                                    className='h-10 w-52 bg-red-500 p-4 text-sm uppercase text-white'
                                    onClick={handlePlaceOrder}
                                    disable={checkedPurchasesCount <= 0}
                                >
                                    {'Check out'}
                                </Button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='w-full py-14 text-center'>
                        <img
                            src={emptyCart}
                            alt='No purchase'
                            className='inline-block h-24 w-24'
                        />
                        <div className='mt-5 font-bold leading-4 text-gray-500'>
                            {'Empty Cart'}
                        </div>
                        <Link
                            href={'/'}
                            className='bg-main hover:bg-main/80 mt-5 inline-block rounded-2xl px-12 py-2 uppercase text-white transition-all'
                        >
                            {'Go shopping'}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
