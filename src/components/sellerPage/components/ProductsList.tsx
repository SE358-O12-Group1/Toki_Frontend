'use client';

import Button from '@/components/common/Button';
import TextBox from '@/components/common/TextBox';
import { mockProducts } from '@/components/productPage/mockData';
import ProductType from '@/types/ProductType';
import { formatCurrency, removeVietnamesePhonetics } from '@/utils/utils';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import AddEditProduct from './AddEditProduct';

export default function SellerProductsList() {
    const [searchInput, setSearchInput] = useState('');
    const [selectedProduct, setSelectedProduct] = useState<ProductType>();

    const filteredProducts = useMemo(() => {
        const products = mockProducts;
        const filterString = removeVietnamesePhonetics(searchInput.trim());
        console.log(removeVietnamesePhonetics(products[0].name));

        return products.filter(
            (product) =>
                removeVietnamesePhonetics(product.name.toLowerCase()).includes(
                    filterString
                ) ||
                removeVietnamesePhonetics(
                    product.category.name.toLowerCase()
                ).includes(filterString) ||
                removeVietnamesePhonetics(
                    product.seller.name.toLowerCase()
                ).includes(filterString)
        );
    }, [searchInput]);

    function handleDelete(index: number) {
        // TODO
    }

    function handleEdit(index: number) {
        setSelectedProduct(filteredProducts[index]);
    }
    if (!selectedProduct)
        return (
            <div className='container p-4'>
                <div className='grid grid-cols-3'>
                    <div className='col-span-2 flex'>
                        <TextBox
                            className='col-span-6 mr-4'
                            placeholder='Product Name'
                            onChange={(e) => {
                                setSearchInput(e.target.value);
                            }}
                            value={searchInput}
                        ></TextBox>
                        <Button className='btn col-span-2'>Search</Button>
                    </div>
                </div>
                <div className='mt-4 grid grid-cols-6'>
                    <Button className='btn col-span-1'>
                        + Add new product
                    </Button>
                </div>

                <span className='text-main mt-4 flex text-xl'>
                    {filteredProducts.length} Products
                </span>
                <div className='container mt-6 border px-0'>
                    <div className='rounded-sm bg-white '>
                        <div className='container rounded-sm px-0'>
                            <div className=' grid grid-cols-12 items-center rounded-sm  bg-gray-100 py-3 pl-4 pr-3 text-sm'>
                                <div className='col-span-6'>Product</div>
                                <div className='col-span-6'>
                                    <div className='grid grid-cols-8 items-center'>
                                        <div className='col-span-2 mx-auto text-sm text-gray-600'>
                                            Price
                                        </div>
                                        <div className='col-span-2 mx-auto text-sm text-gray-600'>
                                            Stock
                                        </div>
                                        <div className='col-span-2 mx-auto text-sm text-gray-600'>
                                            Sale
                                        </div>
                                        <div className='col-span-2 mx-auto text-sm text-gray-600'>
                                            Option
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {filteredProducts.map((product, index) => (
                            <div key={index}>
                                <div className='grid grid-cols-12 items-center rounded-sm bg-white pr-3 text-center text-sm text-gray-500 first:mt-4'>
                                    <div className='col-span-6'>
                                        <div className='flex pl-4'>
                                            <div className='flex-grow'>
                                                <div className='flex'>
                                                    <Link
                                                        className='h-20 w-20 flex-shrink-0'
                                                        href={`/products/${product._id}`}
                                                    >
                                                        <img
                                                            alt={product.name}
                                                            src={
                                                                product.images[0]
                                                            }
                                                        />
                                                    </Link>
                                                    <div className='my-auto p-2'>
                                                        <Link
                                                            href={`/products/${product._id}`}
                                                            className='my-auto line-clamp-2 text-left font-semibold text-black'
                                                        >
                                                            {product.name}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-span-6 '>
                                        <div className='grid grid-cols-8 items-center text-lg'>
                                            <div className='text-main col-span-2 text-center text-xl font-medium'>
                                                {formatCurrency(product.price)}₫
                                            </div>
                                            <div className='col-span-2 text-center'>
                                                {product.quantity}
                                            </div>
                                            <div className='col-span-2 text-center'>
                                                {product.sold_quantity}
                                            </div>
                                            <div className='col-span-2 flex text-center'>
                                                <Button
                                                    className=''
                                                    backgroundColor='#FFFFFF'
                                                    textColor='#00adb5'
                                                    onClick={() => {
                                                        handleEdit(index);
                                                    }}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    className='ml-2'
                                                    backgroundColor='#FFFFFF'
                                                    textColor='#FF0000'
                                                    onClick={() => {
                                                        handleDelete(index);
                                                    }}
                                                >
                                                    Delete
                                                </Button>
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
                </div>
            </div>
        );
    else return <AddEditProduct product={selectedProduct}></AddEditProduct>;
}
