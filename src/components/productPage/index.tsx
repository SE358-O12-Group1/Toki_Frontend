'use client';

import DOMPurify from 'isomorphic-dompurify';
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import {
    formatCurrency,
    formatNumberToSocialStyle,
    rateSale
} from '@/utils/utils';
import { IProduct, mockProduct } from './mockData';
import QuantityIncrementer from './components/QuantityIncrementer';
import ProductRating from './components/ProductRatings';

import ShopIcon from '/public/assets/images/shop_icon.png';
import ProductCard from '../landing/product';

export interface ProductDetailProps {
    productId: string | number;
}
export default function ProductDetailPage(props: ProductDetailProps) {
    const { productId } = props;
    const [buyCount, setBuyCount] = useState(1);
    const [selectedChip, setSelectedChip] = useState('');

    const handleChipClick = (chipValue: string) => {
        setSelectedChip(chipValue);
        // Do something with the selected value
    };

    const [currentIndexImages, setCurrentIndexImages] = useState([0, 5]);
    const [activeImage, setActiveImage] = useState('');

    const product = mockProduct;

    const imageRef = useRef<HTMLImageElement>(null);
    const currentImages = useMemo(
        () => (product ? product?.images.slice(...currentIndexImages) : []),
        [product, currentIndexImages]
    );

    // const queryConfig: ProductListConfig = {
    //     limit: '20',
    //     page: '1',
    //     category: product?.category._id
    // };

    // const { data: productsData } = useQuery({
    //     queryKey: ['products', queryConfig],
    //     queryFn: () => {
    //         return productApi.getProducts(queryConfig);
    //     },
    //     enabled: Boolean(product),
    //     staleTime: 3 * 60 * 1000
    // });

    // const addToCartMutation = useMutation(purchaseApi.addToCart);

    useEffect(() => {
        if (product && product.images.length > 0) {
            setActiveImage(product.images[0]);
        }
    }, [product]);

    const next = () => {
        if (currentIndexImages[1] < (product as IProduct).images.length) {
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

    const addToCart = () => {};

    const buyNow = async () => {};

    if (!product) {
        return null;
    }

    return (
        <>
            <div className='bg-gray-200 py-6'>
                <div className='container '>
                    <div className='rounded-md bg-white p-4 shadow'>
                        <div className='grid grid-cols-12 gap-9'>
                            <div className='col-span-5'>
                                <div
                                    className='relative w-full cursor-zoom-in overflow-hidden rounded-md pt-[100%] shadow'
                                    onMouseMove={handleZoom}
                                    onMouseLeave={handleRemoveZoom}
                                >
                                    <img
                                        src={activeImage}
                                        alt={product.name}
                                        className='absolute left-0 top-0 h-full w-full bg-white object-cover'
                                        ref={imageRef}
                                    />
                                </div>
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
                                    {currentImages.map((img) => {
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
                                                    alt={product.name}
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
                                <div className='grid grid-cols-3 items-center justify-start p-4'>
                                    <div className='col-span-1 px-5'>
                                        <img
                                            // Do mình ko có avt người dùng hay của shop nên chỗ nè để cái ảnh shop như này luôn
                                            src={ShopIcon.src}
                                            alt={product.seller.name}
                                            className='bg-white object-cover'
                                        />
                                    </div>
                                    <div className='col-span-2'>
                                        <div className='font-medium capitalize'>
                                            {product.seller.name}
                                        </div>
                                        <span className=''>
                                            {product.seller.email}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-7'>
                                <h1 className='text-xl font-medium uppercase'>
                                    {product.name}
                                </h1>
                                <div className='mt-8 flex items-center'>
                                    <div className='flex items-center'>
                                        <span className='border-b-yellow mr-1 border-b'>
                                            {product.ratings}
                                        </span>
                                        <ProductRating
                                            rating={product.ratings || 0}
                                            activeClassname='fill-yellow text-yellow h-4 w-4'
                                            nonActiveClassname='fill-gray-300 text-gray-300 h-4 w-4'
                                        />
                                    </div>
                                    <div className='mx-4 h-4 w-[1px] bg-gray-300'></div>
                                    <div>
                                        <span>
                                            {formatNumberToSocialStyle(
                                                product.sold_quantity
                                            )}{' '}
                                            SOLD
                                        </span>
                                    </div>
                                </div>

                                <div className='text-main ml-3 mt-6 text-3xl font-medium'>
                                    {formatCurrency(product.price)} ₫
                                </div>
                                {product.normalPrice && (
                                    <div className='mt-6 flex items-center'>
                                        <div className='bg-main text-yellow ml-4 rounded-sm px-1 py-[2px] text-xs font-semibold uppercase'>
                                            {'-'}
                                            {rateSale(
                                                product.normalPrice,
                                                product.price
                                            )}
                                        </div>
                                        <div className='ml-3 text-gray-500 line-through'>
                                            {formatCurrency(
                                                product.normalPrice!
                                            )}{' '}
                                            ₫
                                        </div>
                                    </div>
                                )}

                                <div className='mt-8 flex items-center'>
                                    <div className='mr-10 font-medium capitalize'>
                                        {'Variants'}
                                    </div>
                                    <div className='flex'>
                                        {product.variants?.map((chip) => (
                                            <div
                                                key={chip}
                                                className={`radio-button hover:bg-main/5 mr-2 flex h-12 items-center justify-center rounded-md px-4 capitalize ${
                                                    selectedChip === chip
                                                        ? 'border-main'
                                                        : 'border'
                                                }`}
                                                onClick={() =>
                                                    handleChipClick(chip)
                                                }
                                            >
                                                {chip}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='mt-8 flex items-center'>
                                    <div className='font-medium capitalize'>
                                        {'Quantity'}
                                    </div>
                                    <QuantityIncrementer
                                        onDecrease={handleBuyCountChange}
                                        onIncrease={handleBuyCountChange}
                                        onType={handleBuyCountChange}
                                        value={buyCount}
                                        max={product.quantity}
                                    />
                                </div>

                                <div className='mt-8 flex items-center'>
                                    <button
                                        onClick={addToCart}
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

                <div className='mt-8'>
                    <div className='container '>
                        <div className='mt-8 rounded-md bg-white p-4  shadow'>
                            <div className='p-4 text-lg font-medium capitalize text-slate-700'>
                                {'Description'}
                            </div>
                            <div className='mx-4 mb-4 text-sm leading-loose'>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(
                                            product.description
                                        )
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {product.relatedProducts ? (
                    <div className='mt-8'>
                        <div className='container'>
                            <div className='uppercase text-gray-400'>
                                {'Related products'}
                            </div>
                            {getProductGrid(product.relatedProducts!)}
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </>
    );

    function getProductGrid(products: IProduct[]) {
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
                            ></ProductCard>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className='col'>
                        {index + 1 < len ? (
                            <ProductCard
                                minHeight={'100%'}
                                product={products[index + 1]}
                            ></ProductCard>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className='col'>
                        {index + 2 < len ? (
                            <ProductCard
                                minHeight={'100%'}
                                product={products[index + 2]}
                            ></ProductCard>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className='col'>
                        {index + 3 < len ? (
                            <ProductCard
                                minHeight={'100%'}
                                product={products[index + 3]}
                            ></ProductCard>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className='col'>
                        {index + 4 < len ? (
                            <ProductCard
                                minHeight={'100%'}
                                product={products[index + 4]}
                            ></ProductCard>
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
}
