'use client';

import { useQueries } from 'react-query';
import { MouseEvent, ReactNode, useEffect, useState } from 'react';

import Bank from '/public/assets/images/Bank.png';

// components
import ProductCard from './product';
import CategoryCard from './components/CategoryCard';

// types
import ProductType from '@/types/ProductType';
import CategoryType from '@/types/CategoryType';

// apis
import categoryApi from '@/apis/category.api';
import productApi from '@/apis/product.api';
import { setProducts } from '@/redux/slices/product.slice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { mockCategories, mockProducts } from '../productPage/mockData';
import { removeVietnamesePhonetics } from '@/utils/utils';

export interface ILandingPageProps {
    filterQuery?: string;
}

export default function LandingPage({ filterQuery }: ILandingPageProps) {
    const dispatch = useAppDispatch();

    const { products } = useAppSelector((state) => state.product);

    const [categoryFilter, setCategoryFilter] = useState<String>();

    const [
        { data: categoryData },
        { data: productData, isSuccess: isGetAllProductsSuccess }
    ] = useQueries([
        {
            queryKey: 'categories',
            queryFn: () => categoryApi.getAllCategories()
        },
        {
            queryKey: 'products',
            queryFn: () => productApi.getAllProducts()
        }
    ]);

    const categories: CategoryType[] = categoryData?.data.data;
    // const products: ProductType[] = productData?.data.data;

    useEffect(() => {
        if (isGetAllProductsSuccess) {
            dispatch(setProducts(productData?.data.data));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productData, products]);

    let filteredProducts = products;

    if (filterQuery) {
        const filterString = removeVietnamesePhonetics(filterQuery.trim());
        filteredProducts = filteredProducts.filter(
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
    }
    if (categoryFilter) {
        filteredProducts = filteredProducts.filter((product) =>
            product.category.name.includes(categoryFilter.trim())
        );
    }

    return (
        <>
            <div className='grid min-h-[70vh] grid-cols-12 bg-gray-200 px-5 py-3'>
                <div className='col-span-3 mb-5'>
                    <div className='col offset-1 ms-5 rounded-md border bg-white shadow-md'>
                        <div className=' font-weight-bold mt-3  text-center'>
                            CATEGORY
                        </div>
                        {categories &&
                            categories.map((category, index) => {
                                return (
                                    <CategoryCard
                                        key={index}
                                        category={category}
                                        onClick={() => {
                                            setCategoryFilter(category.name);
                                        }}
                                    />
                                );
                            })}
                    </div>

                    <div className='col offset-1 ms-5 mt-3 rounded-md border bg-white shadow-md'>
                        <button
                            type='button'
                            className='btn'
                            style={{ minWidth: 280 }}
                        >
                            <div className='row my-1 ms-1'>
                                <div className='d-flex'>
                                    <img src={Bank.src} />
                                    <div className='mt- ms-3 mt-1'>
                                        Start selling with Toki
                                    </div>
                                </div>
                            </div>
                        </button>
                        <div />
                    </div>
                </div>
                {products && products.length > 0 ? (
                    <div className='col-span-9 mb-5 me-5 px-5'>
                        {getProductGrid(filteredProducts)}
                    </div>
                ) : (
                    <div className='container col-span-9 mb-5 me-5 px-5 text-center'>
                        Danh sách sản phẩm trống
                    </div>
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
            <div className='row mb-4' key={index}>
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
            </div>
        );
        index += 4;
    }
    return result;
}
