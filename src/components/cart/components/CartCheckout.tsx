/* eslint-disable @next/next/no-img-element */
'use client';
import { useQuery } from 'react-query';
import { FocusEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Icons
import locationIcon from '/public/assets/images/LocationMarker.png';

// Utils
import { formatCurrency } from '@/utils/utils';
import { groupProductsByShops } from '@/utils/product';

// Components
import TextBox from '@/components/common/TextBox';
import Bill from './Bill';
import Voucher from './Voucher';

// Types
import ProductType from '@/types/ProductType';

// Api
import userApi from '@/apis/user.api';
import { useAppSelector } from '@/redux/hook';

export default function CartCheckout() {
    const [voucher, setVoucher] = useState(0);
    const [codeDiscount, setCodeDiscount] = useState('');

    const [profile, setProfile] = useState({
        name: '',
        phone: '',
        address: ''
    });

    const { cart } = useAppSelector((state) => state.cart);

    const { isLoading } = useQuery({
        queryKey: 'profile',
        queryFn: () => userApi.getProfile(),
        onSuccess: (res) => {
            setProfile({
                name: res.data.data.name,
                phone: res.data.data.phone,
                address: res.data.data.address
            });
        },
        onError: (err) => console.log(err)
    });

    const router = useRouter();

    useEffect(() => {
        document.title = 'TOKI | Checkout';
    }, []);

    const productList = cart.filter((item) => item.checked);

    const totalPrice = productList.reduce(
        (result, p) => (result += p.product.price * p.quantity),
        0
    );

    const handleClickProduct = (product: ProductType) => {
        router.push(`/products/${product._id}`);
    };

    const handleChangeAddress = (e: FocusEvent<HTMLInputElement, Element>) => {
        setProfile({
            ...profile,
            address: e.target.value
        });
    };

    if (isLoading) return <div>loading...</div>;

    return (
        <div className='min-h-[70vh] bg-neutral-100 py-4'>
            {/* Address */}
            <div className='container rounded-sm bg-white p-4 capitalize text-gray-500'>
                <div className='flex items-center'>
                    <span className='text-main font-exl flex font-semibold '>
                        <img src={locationIcon.src} alt='' className='mr-4' />
                        Address
                    </span>
                </div>
                <div className='mt-4 grid grid-cols-2 items-center'>
                    <div className='font-exl col-span-1'>
                        <p>
                            <span className='font-semibold'>Name:</span>{' '}
                            <span className='lowercase'>{profile.name}</span>
                        </p>
                        <p>
                            <span className='font-semibold'>Phone Number:</span>{' '}
                            {profile.phone}
                        </p>
                    </div>

                    <div className='col-span-1 flex text-gray-600'>
                        <TextBox
                            onChange={handleChangeAddress}
                            value={profile.address}
                            placeholder='Please enter address to receive order'
                        />

                        {/* <IconButton
                            onClick={handleEditAddress}
                            className='hover:text-main bg-none text-black transition-colors'
                        >
                            <img src={editIcon.src} alt='' />
                        </IconButton> */}
                    </div>
                </div>
            </div>

            {/* Heading */}
            <div className='container sticky top-0 mt-4 rounded-sm bg-white p-4'>
                <div className=' grid grid-cols-12 items-center rounded-sm  bg-white py-3 pl-4 pr-3 text-sm'>
                    <div className='col-span-6'>Products Ordered</div>
                    <div className='col-span-6'>
                        <div className='grid grid-cols-8 items-center'>
                            <div className='col-span-3 mx-auto text-sm text-gray-600'>
                                Unit Price
                            </div>
                            <div className='col-span-1 mx-auto text-sm text-gray-600'>
                                Quantity
                            </div>
                            <div className='col-span-3 mx-auto text-sm text-gray-600'>
                                Total
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products */}
            {groupProductsByShops(productList).map((productsShop) => {
                return (
                    <div
                        key={productsShop.seller._id}
                        className='container mt-4 rounded-sm bg-white px-4'
                    >
                        <div className='mt-3 flex bg-white py-4 pl-5 pr-3 capitalize text-white'>
                            <div className='bg-main rounded-xl px-4 py-2'>
                                {productsShop.seller.name}
                            </div>
                        </div>
                        {productsShop.products.length > 0 && (
                            <div className='rounded-sm bg-white p-3'>
                                {productsShop.products.map((product, index) => (
                                    <div key={index}>
                                        <div className='grid grid-cols-12 items-center rounded-sm bg-white pl-4 text-center text-sm text-gray-500 first:mt-0'>
                                            <div className='col-span-6'>
                                                <div className='flex'>
                                                    <div className='flex-grow'>
                                                        <div className='flex'>
                                                            <button
                                                                className='h-20 w-20 flex-shrink-0 cursor-pointer'
                                                                onClick={() =>
                                                                    handleClickProduct(
                                                                        productList[
                                                                            product
                                                                        ]
                                                                            .product
                                                                    )
                                                                }
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
                                                                            .images[0]
                                                                    }
                                                                />
                                                            </button>
                                                            <div className='my-auto p-2'>
                                                                <button
                                                                    onClick={() =>
                                                                        handleClickProduct(
                                                                            productList[
                                                                                product
                                                                            ]
                                                                                .product
                                                                        )
                                                                    }
                                                                    className='my-auto line-clamp-2 cursor-pointer text-left font-semibold text-black'
                                                                >
                                                                    {
                                                                        productList[
                                                                            product
                                                                        ]
                                                                            .product
                                                                            .name
                                                                    }
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-6'>
                                                <div className='grid grid-cols-8 items-center'>
                                                    <div className='text-main col-span-3 text-center text-xl font-medium'>
                                                        {formatCurrency(
                                                            productList[product]
                                                                .product.price
                                                        )}{' '}
                                                        ₫
                                                    </div>
                                                    <div className='text-md col-span-1 font-medium'>
                                                        {
                                                            productList[product]
                                                                .quantity
                                                        }
                                                    </div>
                                                    <div className='text-main col-span-3 text-center text-xl font-medium'>
                                                        {formatCurrency(
                                                            productList[product]
                                                                .product.price *
                                                                productList[
                                                                    product
                                                                ].quantity
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
                    </div>
                );
            })}

            {/* Voucher */}
            <Voucher
                totalPrice={totalPrice}
                setVoucher={setVoucher}
                codeDiscount={codeDiscount}
                setCodeDiscount={setCodeDiscount}
            />

            {/* Bill */}
            <Bill
                totalPrice={totalPrice}
                voucher={voucher}
                productList={productList}
                address={profile.address}
                codeDiscount={codeDiscount}
            />
        </div>
    );
}
