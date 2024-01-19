/* eslint-disable @next/next/no-img-element */
'use client';

import { useParams, useRouter } from 'next/navigation';
import DOMPurify from 'isomorphic-dompurify';
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';

import {
    formatCurrency,
    formatNumberToSocialStyle,
    rateSale
} from '@/utils/utils';

// components
import ProductCard from '../landing/product';
import QuantityIncrementer from './components/QuantityIncrementer';
import ProductRating from './components/ProductRatings';
import ShopIcon from '/public/assets/images/shop_icon.png';

// redux
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { addToCart } from '@/redux/slices/cart.slice';

// types
import ProductType, { initialProduct } from '@/types/ProductType';
import { toastMessages, toastOptions } from '@/constants/toast';

// apis
import productApi from '@/apis/product.api';

export default function ProductDetailPage() {
    const { id } = useParams();

    const [detailProduct, setDetailProduct] =
        useState<ProductType>(initialProduct);

    const { user } = useAppSelector((state) => state.auth);

    const { isLoading } = useQuery({
        queryKey: ['product', id],
        queryFn: () => productApi.getProductById(id as string),
        onSuccess: (data) => {
            setDetailProduct(data.data.data);
        }
    });

    const dispatch = useAppDispatch();

    const router = useRouter();

    const [buyCount, setBuyCount] = useState(1);

    const [currentIndexImages, setCurrentIndexImages] = useState([0, 5]);
    const [activeImage, setActiveImage] = useState('');

    const imageRef = useRef<HTMLImageElement>(null);

    const currentImages = useMemo(
        () =>
            detailProduct
                ? detailProduct.images.slice(...currentIndexImages)
                : [],
        [detailProduct, currentIndexImages]
    );

    useEffect(() => {
        if (detailProduct && detailProduct.images.length > 0) {
            setActiveImage(detailProduct.images[0]);
        }
    }, [detailProduct]);

    const next = () => {
        if (currentIndexImages[1] < detailProduct.images.length) {
            setCurrentIndexImages((prev) => [prev[0] + 1, prev[1] + 1]);
        }
    };

    const prev = () => {
        if (currentIndexImages[0] > 0) {
            setCurrentIndexImages((prev) => [prev[0] - 1, prev[1] - 1]);
        }
    };

    const chooseActive = (img: string) => {
        setActiveImage(img);
    };

    const handleZoom = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const image = imageRef.current as HTMLImageElement;
        const { naturalHeight, naturalWidth } = image;
        const offsetX = event.pageX - (rect.x + window.scrollX);
        const offsetY = event.pageY - (rect.y + window.scrollY);

        const top = offsetY * (1 - naturalHeight / rect.height);
        const left = offsetX * (1 - naturalWidth / rect.width);
        image.style.width = naturalWidth + 'px';
        image.style.height = naturalHeight + 'px';
        image.style.maxWidth = 'unset';
        image.style.top = top + 'px';
        image.style.left = left + 'px';
    };

    const handleRemoveZoom = () => {
        imageRef.current?.removeAttribute('style');
    };

    const handleBuyCountChange = (value: number) => {
        setBuyCount(value);
    };

    const handleAddToCart = () => {
        if (user._id === '') {
            toast.info('Please login to add to cart', toastOptions);
            router.push('/login');
            return;
        }
        dispatch(
            addToCart({
                product: detailProduct,
                quantity: buyCount,
                checked: false
            })
        );
        toast.success(toastMessages.addToCart, toastOptions);
    };

    const buyNow = async () => {
        if (user._id === '') {
            toast.info('Please login to add to cart', toastOptions);
            router.push('/login');
            return;
        }
        dispatch(
            addToCart({
                product: detailProduct,
                quantity: buyCount,
                checked: true
            })
        );
        toast.success(toastMessages.addToCart, toastOptions);
        router.push('/cart');
    };

    if (isLoading) {
        return <></>;
    }

    return (
        <>
            <div className='bg-gray-200 py-6'>
                <div className='container'>
                    <div className='rounded-md bg-white p-4 shadow'>
                        <div className='grid grid-cols-12 gap-9'>
                            <div className='col-span-5'>
                                {/* Active Image */}
                                <div
                                    className='relative w-full cursor-zoom-in overflow-hidden rounded-md pt-[100%] shadow'
                                    onMouseMove={handleZoom}
                                    onMouseLeave={handleRemoveZoom}
                                >
                                    <img
                                        src={activeImage}
                                        alt={detailProduct.name}
                                        className='absolute left-0 top-0 h-full w-full bg-white object-cover'
                                        ref={imageRef}
                                    />
                                </div>

                                {/* Images */}
                                <div className='relative mt-4 grid grid-cols-5 gap-1'>
                                    <button
                                        className='absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white'
                                        onClick={prev}
                                    >
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth={1.5}
                                            stroke='currentColor'
                                            className='h-5 w-5'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M15.75 19.5L8.25 12l7.5-7.5'
                                            />
                                        </svg>
                                    </button>
                                    {currentImages.map((img: any) => {
                                        const isActive = img === activeImage;
                                        return (
                                            <div
                                                className='relative w-full pt-[100%]'
                                                key={img}
                                                onMouseEnter={() =>
                                                    chooseActive(img)
                                                }
                                            >
                                                <img
                                                    src={img}
                                                    alt={detailProduct.name}
                                                    className='absolute left-0 top-0 h-full w-full cursor-pointer rounded-md bg-white  object-cover'
                                                />
                                                {isActive && (
                                                    <div className='border-main absolute inset-0 rounded-md border-2' />
                                                )}
                                            </div>
                                        );
                                    })}
                                    <button
                                        className='absolute right-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white'
                                        onClick={next}
                                    >
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            strokeWidth={1.5}
                                            stroke='currentColor'
                                            className='h-5 w-5'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                d='M8.25 4.5l7.5 7.5-7.5 7.5'
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/* Shop */}
                                <div className='grid grid-cols-3 items-center justify-start p-4'>
                                    <div className='col-span-1 px-5'>
                                        <img
                                            // Do mình ko có avt người dùng hay của shop nên chỗ nè để cái ảnh shop như này luôn
                                            src={
                                                detailProduct.seller?.avatar ||
                                                ShopIcon.src
                                            }
                                            alt={detailProduct.seller?.name}
                                            className='bg-white object-cover'
                                        />
                                    </div>
                                    <div className='col-span-2'>
                                        <div className='font-medium capitalize'>
                                            {detailProduct.seller.name}
                                        </div>
                                        <span className=''>
                                            {detailProduct.seller.email}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='col-span-7'>
                                {/* Name */}
                                <h1 className='text-xl font-medium uppercase'>
                                    {detailProduct.name}
                                </h1>

                                {/* Rating and Sold Quantity */}
                                <div className='mt-8 flex items-center'>
                                    {/* Rating */}
                                    <div className='flex items-center'>
                                        <span className='border-b-yellow mr-1 border-b'>
                                            {detailProduct.rating}
                                        </span>
                                        <ProductRating
                                            rating={detailProduct.rating || 0}
                                            activeClassname='fill-yellow text-yellow h-4 w-4'
                                            nonActiveClassname='fill-gray-300 text-gray-300 h-4 w-4'
                                        />
                                    </div>

                                    <div className='mx-4 h-4 w-[1px] bg-gray-300' />

                                    {/* Sold Quantity */}
                                    <div>
                                        <span>
                                            {formatNumberToSocialStyle(
                                                detailProduct.sold_quantity
                                            )}{' '}
                                            SOLD
                                        </span>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className='text-main ml-3 mt-6 text-3xl font-medium'>
                                    {formatCurrency(detailProduct.price)} ₫
                                </div>

                                {/* Normal Price */}
                                {detailProduct.normalPrice && (
                                    <div className='mt-6 flex items-center'>
                                        <div className='bg-main text-yellow ml-4 rounded-sm px-1 py-[2px] text-xs font-semibold uppercase'>
                                            {'-'}
                                            {rateSale(
                                                detailProduct.normalPrice,
                                                detailProduct.price
                                            )}
                                        </div>
                                        <div className='ml-3 text-gray-500 line-through'>
                                            {formatCurrency(
                                                detailProduct.normalPrice!
                                            )}{' '}
                                            ₫
                                        </div>
                                    </div>
                                )}

                                {/* Quantity */}
                                <div className='mt-8 flex items-center'>
                                    <div className='font-medium capitalize'>
                                        {'Quantity'}
                                    </div>
                                    <QuantityIncrementer
                                        onDecrease={handleBuyCountChange}
                                        onIncrease={handleBuyCountChange}
                                        onType={handleBuyCountChange}
                                        value={buyCount}
                                        max={detailProduct.quantity}
                                    />
                                    <div className='ml-4'>
                                        {detailProduct.quantity} in stock
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className='mt-8 flex items-center'>
                                    <button
                                        onClick={handleAddToCart}
                                        className='border-main text-main hover:bg-main/5 flex h-12 items-center justify-center rounded-md px-5 capitalize shadow-sm'
                                    >
                                        <svg
                                            enableBackground='new 0 0 15 15'
                                            viewBox='0 0 15 15'
                                            x={0}
                                            y={0}
                                            className='stroke-main text-main mr-[10px] h-5 w-5 fill-current'
                                        >
                                            <g>
                                                <g>
                                                    <polyline
                                                        fill='none'
                                                        points='.5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        strokeMiterlimit={10}
                                                    />
                                                    <circle
                                                        cx={6}
                                                        cy='13.5'
                                                        r={1}
                                                        stroke='none'
                                                    />
                                                    <circle
                                                        cx='11.5'
                                                        cy='13.5'
                                                        r={1}
                                                        stroke='none'
                                                    />
                                                </g>
                                                <line
                                                    fill='none'
                                                    strokeLinecap='round'
                                                    strokeMiterlimit={10}
                                                    x1='7.5'
                                                    x2='10.5'
                                                    y1={7}
                                                    y2={7}
                                                />
                                                <line
                                                    fill='none'
                                                    strokeLinecap='round'
                                                    strokeMiterlimit={10}
                                                    x1={9}
                                                    x2={9}
                                                    y1='8.5'
                                                    y2='5.5'
                                                />
                                            </g>
                                        </svg>
                                        {'Add to cart'}
                                    </button>
                                    <button
                                        className='fkex bg-main hover:bg-yellow/90 ml-4 h-12 min-w-[5rem] items-center justify-center rounded-md px-5 capitalize text-white shadow-sm outline-none'
                                        onClick={buyNow}
                                    >
                                        {'Buy now'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className='mt-8'>
                    <div className='container '>
                        <div className='mt-8 rounded-md bg-white p-4  shadow'>
                            <div className='p-4 text-lg font-medium capitalize text-slate-700'>
                                {'Description'}
                            </div>
                            <div className='mx-4 mb-4 text-justify text-sm leading-loose'>
                                <pre
                                    style={{
                                        font: 'inherit'
                                    }}
                                    className=''
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(
                                            detailProduct.description
                                        )
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {detailProduct.relatedProducts ? (
                    <div className='mt-8'>
                        <div className='container'>
                            <div className='uppercase text-gray-400'>
                                {'Related products'}
                            </div>
                            {getProductGrid(detailProduct.relatedProducts)}
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

function getProductGrid(products: ProductType[]) {
    let result: ReactNode[] = [];
    let index = 0;
    const len = products.length;
    while (index < len) {
        result.push(
            <div className='row mb-3' key={index}>
                <div className='col'>
                    {index < len ? (
                        <ProductCard
                            minHeight={'100%'}
                            product={products[index]}
                        />
                    ) : (
                        <></>
                    )}
                </div>
                <div className='col'>
                    {index + 1 < len ? (
                        <ProductCard
                            minHeight={'100%'}
                            product={products[index + 1]}
                        />
                    ) : (
                        <></>
                    )}
                </div>
                <div className='col'>
                    {index + 2 < len ? (
                        <ProductCard
                            minHeight={'100%'}
                            product={products[index + 2]}
                        />
                    ) : (
                        <></>
                    )}
                </div>
                <div className='col'>
                    {index + 3 < len ? (
                        <ProductCard
                            minHeight={'100%'}
                            product={products[index + 3]}
                        />
                    ) : (
                        <></>
                    )}
                </div>
                <div className='col'>
                    {index + 4 < len ? (
                        <ProductCard
                            minHeight={'100%'}
                            product={products[index + 4]}
                        />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        );
        index += 5;
    }
    return result;
}
