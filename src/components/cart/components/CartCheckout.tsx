'use client';
import IconButton from '@mui/material/IconButton';
import { useSearchParams } from 'next/navigation';
import editIcon from '/public/assets/images/edit_ic.png';
import locationIcon from '/public/assets/images/LocationMarker.png';
import voucherIcon from '/public/assets/images/ticket.png';
import { formatCurrency, generateNameId } from '@/utils/utils';
import Link from 'next/link';
import TextBox from '@/components/common/TextBox';
import Button from '@/components/common/Button';
import { useEffect, useState } from 'react';

export default function CartCheckout() {
    useEffect(() => {
        document.title = 'TOKI | Checkout';
    }, []);
    const handlePlaceOrder = () => {
        //TODO
    };
    const [voucher, setVoucher] = useState(0);
    const [address, setAddress] = useState('');
    const userAddress = {
        name: 'TAKAUser',
        phone: '0123456789',
        address: 'Khu phố 6, Thủ Đức, Thành phố Hồ Chí Minh'
    };
    const data = useSearchParams();
    const productList: {
        product: {
            id: string;
            name: string;
            price: number;
            image: string;
        };
        seller: {
            id: string;
            name: string;
        };
        quantity: number;
        variantIndex: number;
        variantName: string;
    }[] = data ? JSON.parse(data.get('data') || '') : null;

    const totalPrice = productList.reduce(
        (result, p) => (result += p.product.price * p.quantity),
        0
    );

    const groupProductsByShops = () => {
        interface IProductGroup {
            seller: {
                id: string;
                name: string;
            };
            products: number[];
        }
        const productGroups: IProductGroup[] = [];
        productList.forEach((product, index) => {
            var temp = -1;
            productGroups.forEach((group, groupIndex) => {
                if (group.seller.id == product.seller.id) {
                    temp = groupIndex;
                    productGroups[groupIndex].products.push(index);
                }
            });
            if (temp === -1) {
                productGroups.push({
                    seller: product.seller,
                    products: [index]
                });
            }
        });
        console.log(productGroups);
        return productGroups;
    };

    return (
        <div className='min-h-[70vh] bg-neutral-100 py-4'>
            <div className='container rounded-sm bg-white p-4 capitalize text-gray-500'>
                <div className='flex items-center'>
                    <span className='text-main font-exl flex font-semibold '>
                        <img src={locationIcon.src} alt='' className='mr-4' />
                        Address
                    </span>
                </div>
                <div className='mt-2 grid grid-cols-2 items-center'>
                    <div className='font-exl col-span-1 font-semibold'>
                        {userAddress.name} {userAddress.phone}
                    </div>
                    <div className='col-span-1 flex text-gray-600'>
                        <TextBox
                            value={userAddress.address}
                            onChange={(e) => setAddress(e.target.value)}
                        ></TextBox>

                        <IconButton className='hover:text-main bg-none text-black transition-colors'>
                            <img src={editIcon.src} alt='' />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className='container sticky top-0 mt-4 rounded-sm bg-white p-4'>
                <div className=' grid grid-cols-12 items-center rounded-sm  bg-white py-3 pl-4 pr-3 text-sm'>
                    <div className='col-span-6'>Products Ordered</div>
                    <div className='col-span-6'>
                        <div className='grid grid-cols-8 items-center'>
                            <div className='col-span-3 mx-auto text-sm text-gray-600'>
                                Variation
                            </div>
                            <div className='col-span-2 mx-auto text-sm text-gray-600'>
                                Unit Price
                            </div>
                            <div className='col-span-1 mx-auto text-sm text-gray-600'>
                                Quantity
                            </div>
                            <div className='col-span-2 mx-auto text-sm text-gray-600'>
                                Total
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {groupProductsByShops().map((productsShop) => {
                return (
                    <>
                        <div
                            key={productsShop.seller.id}
                            className='container mt-4 rounded-sm bg-white px-4'
                        >
                            <div className='mt-3 flex bg-white py-4 pl-5 pr-3 capitalize text-white'>
                                <div className='bg-main rounded-xl px-4 py-2'>
                                    {productsShop.seller.name}
                                </div>
                            </div>
                            {productsShop.products.length > 0 && (
                                <div className='rounded-sm bg-white p-3'>
                                    {productsShop.products.map(
                                        (product, index) => (
                                            <div key={index}>
                                                <div className='grid grid-cols-12 items-center rounded-sm bg-white pl-4 text-center text-sm text-gray-500 first:mt-0'>
                                                    <div className='col-span-6'>
                                                        <div className='flex'>
                                                            <div className='flex-grow'>
                                                                <div className='flex'>
                                                                    <Link
                                                                        className='h-20 w-20 flex-shrink-0'
                                                                        href={`${'/'}${generateNameId(
                                                                            {
                                                                                name: productList[
                                                                                    product
                                                                                ]
                                                                                    .product
                                                                                    .name,
                                                                                id: productList[
                                                                                    product
                                                                                ].product.id.toString()
                                                                            }
                                                                        )}`}
                                                                    >
                                                                        <img
                                                                            alt={
                                                                                productList[
                                                                                    product
                                                                                ]
                                                                                    .product
                                                                                    .name
                                                                            }
                                                                            src={
                                                                                productList[
                                                                                    product
                                                                                ]
                                                                                    .product
                                                                                    .image
                                                                            }
                                                                        />
                                                                    </Link>
                                                                    <div className='my-auto p-2'>
                                                                        <Link
                                                                            href={`${'/'}${generateNameId(
                                                                                {
                                                                                    name: productList[
                                                                                        product
                                                                                    ]
                                                                                        .product
                                                                                        .name,
                                                                                    id: productList[
                                                                                        product
                                                                                    ]
                                                                                        .product
                                                                                        .id
                                                                                }
                                                                            )}`}
                                                                            className='my-auto line-clamp-2 text-left font-semibold text-black'
                                                                        >
                                                                            {
                                                                                productList[
                                                                                    product
                                                                                ]
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
                                                        <div className='grid grid-cols-8 items-center'>
                                                            <div className=' text-md col-span-3 font-medium'>
                                                                {
                                                                    productList[
                                                                        product
                                                                    ]
                                                                        .variantName
                                                                }
                                                            </div>
                                                            <div className='text-main col-span-2 text-center text-xl font-medium'>
                                                                {formatCurrency(
                                                                    productList[
                                                                        product
                                                                    ].product
                                                                        .price
                                                                )}{' '}
                                                                ₫
                                                            </div>
                                                            <div className=' text-md col-span-1 font-medium'>
                                                                {
                                                                    productList[
                                                                        product
                                                                    ].quantity
                                                                }
                                                            </div>
                                                            <div className='text-main col-span-2 text-center text-xl font-medium'>
                                                                {formatCurrency(
                                                                    productList[
                                                                        product
                                                                    ].product
                                                                        .price *
                                                                        productList[
                                                                            product
                                                                        ]
                                                                            .quantity
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
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                    </>
                );
            })}

            <div className='container mt-4 grid grid-cols-2 rounded-sm bg-white p-4 capitalize text-gray-500'>
                <div className='col-span-1 mt-2 flex flex-grow items-center'>
                    <span className='text-main font-exl flex font-semibold '>
                        <img src={voucherIcon.src} alt='' className='mr-4' />
                        TOKI Voucher
                    </span>
                </div>
                <div className='col-span-1 flex'>
                    <TextBox placeholder='Enter voucher'></TextBox>
                    <Button className='ml-3 px-4 text-sm uppercase text-white'>
                        {'Apply'}
                    </Button>
                </div>
            </div>

            <div className='container mt-4 grid grid-cols-3 rounded-sm bg-white p-4'>
                <div className='col-span-1 '></div>
                <div className='col-span-1 '></div>
                <div className='col-span-1'>
                    <div className='flex items-center'>
                        <span className='text-sm text-gray-400'>
                            Product cost
                        </span>
                        <span className='ml-auto text-lg'>
                            {formatCurrency(totalPrice)} đ
                        </span>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-sm text-gray-400'>Discount</span>
                        {voucher > 0 ? (
                            <span className='ml-auto text-lg'>
                                -{formatCurrency(totalPrice * voucher)} đ
                            </span>
                        ) : (
                            <span className='ml-auto text-lg'>0 đ</span>
                        )}
                    </div>
                    <div className='text-main mt-2 flex items-center font-semibold'>
                        <span className=''>Total payment</span>
                        <span className=' ml-auto text-xl'>
                            {formatCurrency(totalPrice - totalPrice * voucher)}{' '}
                            đ
                        </span>
                    </div>
                    <div className='dashed-divider'></div>
                    <Button
                        className='ml-auto px-4 text-lg uppercase text-white'
                        onClick={handlePlaceOrder}
                    >
                        {'Place Order'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
