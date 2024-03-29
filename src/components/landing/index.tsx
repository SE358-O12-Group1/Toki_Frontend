/* eslint-disable @next/next/no-img-element */
'use client';

import { useMutation, useQueries } from 'react-query';
import { useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';

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
import { removeVietnamesePhonetics } from '@/utils/utils';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import userApi from '@/apis/user.api';
import UserType from '@/types/UserType';
import { updateUser } from '@/redux/slices/auth.slice';
import { toast } from 'react-toastify';
import { toastOptions } from '@/constants/toast';
import ConfirmationModal from './modals/ConfirmationModal';
import DropdownButton from '../common/DropdownButton';
import Button from '../common/Button';

export interface ILandingPageProps {
    filterQuery?: string;
}

export default function LandingPage({ filterQuery }: ILandingPageProps) {
    const dispatch = useAppDispatch();

    const priceFilterOptions = [
        'None',
        'Price: Ascending',
        'Price: Descending'
    ];
    const [priceFilter, setPriceFilter] = useState('None');
    const [isFilterPopular, setFilterPopular] = useState(false);

    const {
        user: auth,
        accessToken,
        refreshToken
    } = useAppSelector((state) => state.auth);

    const router = useRouter();

    const [categoryFilter, setCategoryFilter] = useState<String>();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [
        { data: categoryData },
        { data: productData },
        { data: profileData }
    ] = useQueries([
        {
            queryKey: 'categories',
            queryFn: () => categoryApi.getAllCategories()
        },
        {
            queryKey: 'products',
            queryFn: () => productApi.getAllProducts()
        },
        {
            queryKey: 'profile',
            queryFn: () => userApi.getProfile()
        }
    ]);

    const { mutate: updateToSeller } = useMutation({
        mutationFn: ({
            id,
            body
        }: {
            id: string;
            body: {
                role: number;
            };
        }) => userApi.updateUser(id, body),
        onSuccess: () => {
            dispatch(
                updateUser({
                    user: {
                        ...auth,
                        role: 1
                    },
                    accessToken: accessToken,
                    refreshToken: refreshToken
                })
            );
            toast.success('Update to seller successfully', toastOptions);
            router.push('/seller');
        }
    });

    const categories: CategoryType[] = categoryData?.data.data;
    const products: ProductType[] = productData?.data.data;
    const profile: UserType = profileData?.data.data;

    let filteredProducts = products;

    if (filterQuery) {
        const filterString = removeVietnamesePhonetics(
            filterQuery.trim().toLowerCase()
        );
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
    if (priceFilter !== 'None')
        filteredProducts.sort((a, b) =>
            priceFilter === priceFilterOptions[1]
                ? a.price - b.price
                : -(a.price - b.price)
        );
    if (isFilterPopular)
        filteredProducts.sort((a, b) => -(a.sold_quantity - b.sold_quantity));

    const handleOpenModal = () => {
        if (auth._id === '') {
            router.push('/login');
            toast.info('Please login first', {
                ...toastOptions,
                autoClose: 5000
            });
            return;
        }

        if (profile.verified === false) {
            router.push('/user/profile');
            toast.info(
                'Please fill your profile first to verify your account',
                { ...toastOptions, autoClose: 5000 }
            );
            return;
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleUpdateToSeller = () => {
        updateToSeller({
            id: auth._id,
            body: {
                role: 1
            }
        });
    };

    return (
        <>
            <div className='grid min-h-[70vh] grid-cols-12 bg-gray-200 px-5 py-3'>
                <div className='col-span-3'>
                    {auth.role === 2 ? (
                        <div className='col offset-1 mb-2 ms-5 rounded-md border bg-white shadow-md'>
                            <button
                                type='button'
                                className='btn full-width-div'
                                style={{ minWidth: 280 }}
                                onClick={handleOpenModal}
                            >
                                <div className='row my-1 ms-1'>
                                    <div className='d-flex full-width-div'>
                                        <img src={Bank.src} alt='' />
                                        <div className='ms-3 mt-1'>
                                            Start selling with Toki
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <div />
                        </div>
                    ) : (
                        <></>
                    )}
                    {auth.role === 1 ? (
                        <div className='col offset-1 mb-2 ms-5 rounded-md border bg-white shadow-md'>
                            <button
                                type='button'
                                className='btn full-width-div'
                                onClick={() => {
                                    router.push('/seller');
                                }}
                            >
                                <div className='row my-1 ms-1'>
                                    <div className='d-flex full-width-div'>
                                        <img src={Bank.src} alt='' />
                                        <div className='text-main mx-auto ms-3 mt-1'>
                                            Seller Center
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <div />
                        </div>
                    ) : (
                        <></>
                    )}

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
                </div>
                {products && products.length > 0 ? (
                    <div className='col-span-9 mb-5 me-5 px-5'>
                        <div className='container mb-2 flex items-center justify-end rounded-md bg-white p-4 shadow-md'>
                            <div className=' mr-4'>Filter:</div>
                            <div className='mr-4'>
                                <Button
                                    className='border-main'
                                    textColor={
                                        isFilterPopular ? '#FFFFFF' : '#00adb5'
                                    }
                                    backgroundColor={
                                        isFilterPopular ? '#00adb5' : '#FFFFFF'
                                    }
                                    onClick={() => {
                                        setPriceFilter(priceFilterOptions[0]);
                                        setFilterPopular(!isFilterPopular);
                                    }}
                                >
                                    Most popular
                                </Button>
                            </div>
                            <div className=''>
                                {isFilterPopular || (
                                    <DropdownButton
                                        className='border-1 text-main border-main rounded-lg p-2'
                                        items={priceFilterOptions}
                                        value={priceFilter}
                                        onSelect={function (
                                            selectedItem: number
                                        ): void {
                                            setPriceFilter(
                                                priceFilterOptions[selectedItem]
                                            );
                                            setFilterPopular(false);
                                        }}
                                    ></DropdownButton>
                                )}
                            </div>
                        </div>
                        {getProductGrid(filteredProducts)}
                    </div>
                ) : (
                    <div className='container col-span-9 mb-5 me-5 px-5 text-center'>
                        Danh sách sản phẩm trống
                    </div>
                )}
            </div>

            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleUpdateToSeller}
            />
        </>
    );
}

function getProductGrid(products: ProductType[]) {
    if (products.length <= 0)
        return (
            <div className='container col-span-9 mb-5 me-5 px-5 text-center'>
                Danh sách sản phẩm trống
            </div>
        );
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
