/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/navigation';

import ProductRating from '@/components/productPage/components/ProductRatings';

import ProductType from '@/types/ProductType';
import {
    formatCurrency,
    formatNumberToSocialStyle,
    rateSale
} from '@/utils/utils';
import { useState } from 'react';
import ConfirmationModal from '@/components/common/ConfirmationModal';

export interface IProductCardProps {
    product: ProductType;
    minHeight?: number | string;
}

export default function ProductCard({ product, minHeight }: IProductCardProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${product._id}`);
    };

    const [isConfirmationOpen, setConfirmationOpen] = useState(false);
    const handleConfirm = () => {
        handleDelete();
        // Close the modal
        setConfirmationOpen(false);
    };

    const handleOpenModal = () => {
        setConfirmationOpen(true);
    };

    const handleCloseModal = () => {
        setConfirmationOpen(false);
    };
    function handleDelete(): void {
        console.log(product._id);
    }

    return (
        <div className=''>
            {isConfirmationOpen && (
                <ConfirmationModal
                    isOpen={isConfirmationOpen}
                    onClose={handleCloseModal}
                    onConfirm={handleConfirm}
                />
            )}
            <button onClick={handleClick}>
                <div
                    className='text-normal rounded-md border bg-white p-4'
                    style={{ minHeight: minHeight }}
                >
                    <img
                        alt=''
                        style={{ scale: 0.8 }}
                        src={
                            product.images[0] ||
                            'https://sieuthikhan.com/images/thumbs/default-image_450.png'
                        }
                    />
                    <div className='text-left'>
                        <div className='text-lg'>{product.name}</div>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <ProductRating
                                    rating={product.rating || 0}
                                    activeClassname='fill-yellow text-yellow h-4 w-4'
                                    nonActiveClassname='fill-gray-300 text-gray-300 h-4 w-4'
                                />
                            </div>
                            <div className='mx-4 h-4 w-[1px] bg-gray-300'></div>
                            <div className='text-sm font-light text-gray-400'>
                                <span>
                                    {formatNumberToSocialStyle(
                                        product.sold_quantity
                                    )}{' '}
                                    sold
                                </span>
                            </div>
                        </div>
                        <div className='text-main text-xl font-medium'>
                            {formatCurrency(product.price)} ₫
                        </div>
                        {product.normalPrice && (
                            <div className='flex items-center'>
                                <div className='bg-main text-yellow rounded-sm px-1 py-[2px] text-xs font-semibold uppercase'>
                                    {'-'}
                                    {rateSale(
                                        product.normalPrice,
                                        product.price
                                    )}
                                </div>
                                <div className='ml-3 font-light text-gray-400 line-through'>
                                    {formatCurrency(product.normalPrice!)} ₫
                                </div>
                            </div>
                        )}
                        <div className='me-2 text-end text-sm font-light text-gray-400'>
                            {product.seller.name}
                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
}
