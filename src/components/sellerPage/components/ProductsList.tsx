/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

// components
import Button from '@/components/common/Button';
import TextBox from '@/components/common/TextBox';
import AddEditProduct from './AddEditProduct';

// utils
import { formatCurrency, removeVietnamesePhonetics } from '@/utils/utils';

// types
import { ShopProductType } from '@/types/ProductType';

// api
import productApi from '@/apis/product.api';

// constants
import { toastOptions } from '@/constants/toast';
import ConfirmationModal from '@/components/common/ConfirmationModal';

export default function SellerProductsList() {
    const [products, setProducts] = useState<ShopProductType[]>([]);

    const queryClient = useQueryClient();

    const { isLoading } = useQuery({
        queryKey: 'shopProducts',
        queryFn: () => productApi.getShopProducts(),
        onSuccess: (res) => {
            setProducts(res.data.data);
        }
    });

    const { mutate: deleteProduct } = useMutation({
        mutationFn: (productId: string) => productApi.deleteProduct(productId),
        onSuccess: () => {
            queryClient.invalidateQueries('shopProducts');
        }
    });

    const [action, setAction] = useState<string>('');

    const [searchInput, setSearchInput] = useState('');

    const [editProduct, setEditProduct] = useState<ShopProductType>();

    const filteredProducts = useMemo(() => {
        const filterString = removeVietnamesePhonetics(
            searchInput.trim().toLowerCase()
        );

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
    }, [searchInput, products]);

    const handleDelete = (deleteId: string) => {
        deleteProduct(deleteId, {
            onSuccess: (res) => {
                toast.success(res.data.message, toastOptions);
            }
        });
    };

    const handleAdd = () => {
        setAction('add');
    };

    const handleEdit = (product: ShopProductType) => {
        setAction('edit');
        setEditProduct(product);
    };

    const [selectedIndex, setSelectedIndex] = useState<string | null>(null);
    const [isConfirmationOpen, setConfirmationOpen] = useState(false);

    const handleConfirm = () => {
        if (selectedIndex !== null) {
            handleDelete(selectedIndex);
            setSelectedIndex(null);
            // Close the modal
            setConfirmationOpen(false);
        }
    };

    const handleOpenModal = (index: string) => {
        console.log(index);
        setSelectedIndex(index);
        setConfirmationOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedIndex(null);
        setConfirmationOpen(false);
    };

    if (isLoading) return <div>Loading...</div>;

    if (!action)
        return (
            <div className='container p-4'>
                {isConfirmationOpen && (
                    <ConfirmationModal
                        isOpen={isConfirmationOpen}
                        onClose={handleCloseModal}
                        onConfirm={handleConfirm}
                    />
                )}
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
                        {/* <Button className='btn col-span-2'>Search</Button> */}
                    </div>
                </div>
                <div className='mt-4 grid grid-cols-6'>
                    <Button onClick={handleAdd} className='btn col-span-1'>
                        + Add new product
                    </Button>
                </div>

                <span className='text-main mt-4 flex text-xl'>
                    {filteredProducts.length}{' '}
                    {filteredProducts.length > 1 ? 'products' : 'product'}
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
                                                    <div
                                                        className='h-20 w-20 flex-shrink-0'
                                                        // href={`/products/${product._id}`}
                                                    >
                                                        <img
                                                            style={{
                                                                width: 80,
                                                                height: 80,
                                                                objectFit: 'scale-down',
                                                            }}
                                                            alt={product.name}
                                                            src={
                                                                product
                                                                    .images[0]
                                                            }
                                                        />
                                                    </div>
                                                    <div className='my-auto p-2'>
                                                        <div
                                                            // href={`/products/${product._id}`}
                                                            className='my-auto line-clamp-2 text-left font-semibold text-black'
                                                        >
                                                            {product.name}
                                                        </div>
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
                                                        handleEdit(product);
                                                    }}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    className='ml-2'
                                                    backgroundColor='#FFFFFF'
                                                    textColor='#FF0000'
                                                    onClick={() => {
                                                        handleOpenModal(
                                                            product._id
                                                        );
                                                    }}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className='container'>
                                    <div className='dashed-divider'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    else if (action === 'add')
        return (
            <AddEditProduct
                action={action}
                setAction={setAction}
            ></AddEditProduct>
        );
    else {
        return (
            <AddEditProduct
                product={editProduct}
                action={action}
                setAction={setAction}
            ></AddEditProduct>
        );
    }
}
