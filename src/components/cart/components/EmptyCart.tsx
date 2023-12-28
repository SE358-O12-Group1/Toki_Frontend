import { emptyCart } from '@/constants/common';
import Link from 'next/link';

export default function EmptyCart() {
    return (
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
    );
}
