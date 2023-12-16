import ProductRating from '@/components/productPage/components/ProductRatings';
import { IProduct } from '@/components/productPage/mockData';
import {
    formatCurrency,
    formatNumberToSocialStyle,
    rateSale
} from '@/utils/utils';
import Link from 'next/link';
import Rating from '/public/assets/images/Rating.png';

export interface IProductCardProps {
    product: IProduct;
    minHeight?: number | string;
}

export default function ProductCard(props: IProductCardProps) {
    const { product, minHeight } = props;
    return (
        <>
            <Link href={'/products/' + product._id}>
                <div
                    className='text-normal rounded-md border bg-white p-4'
                    style={{ minHeight: minHeight }}
                >
                    <img style={{ scale: 0.8 }} src={product.images[0]}></img>
                    <div className='text-left'>
                        <div className='text-lg'>{product.name}</div>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <ProductRating
                                    rating={product.ratings || 0}
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
            </Link>
        </>
    );
}
