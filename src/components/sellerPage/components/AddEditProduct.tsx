import {
    useState,
    FocusEvent,
    useMemo,
    ChangeEvent,
    SetStateAction,
    Dispatch
} from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

// apis
import categoryApi from '@/apis/category.api';
import productApi, { ProductRequestType } from '@/apis/product.api';

// components
import Button from '@/components/common/Button';
import DropdownButton from '@/components/common/DropdownButton';
import TextBox from '@/components/common/TextBox';
import InputNumber from '@/components/productPage/components/InputNumber';

// constants
import { toastOptions } from '@/constants/toast';

// types
import { ShopProductType } from '@/types/ProductType';
import { mockCategories } from '@/components/productPage/mockData';

export interface IAddEditProductProps {
    product?: ShopProductType;
    action: string;
    setAction: Dispatch<SetStateAction<string>>;
}

type AddEditProductType = {
    name: string;
    categoryId: string;
    images: string[];
    description: string;
    normalPrice: number;
    price: number;
    stock: number;
};

export default function AddEditProduct({
    product,
    action,
    setAction
}: IAddEditProductProps) {
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery({
        queryKey: 'category',
        queryFn: () => categoryApi.getAllCategories()
    });

    const { mutate: addProduct } = useMutation({
        mutationFn: (body: ProductRequestType) =>
            productApi.createProduct(body),
        onSuccess: () => {
            queryClient.invalidateQueries('shopProducts');
        }
    });

    const { mutate: editProduct } = useMutation({
        mutationFn: ({ id, body }: { id: string; body: ProductRequestType }) =>
            productApi.updateProduct(id, body),
        onSuccess: () => {
            queryClient.invalidateQueries('shopProducts');
        }
    });

    const categories = data?.data.data;

    const init: AddEditProductType = {
        name: product ? product.name : '',
        categoryId: product ? product.category._id : '',
        images: product ? product.images : [],
        description: product ? product.description : '',
        normalPrice: product ? product.normalPrice : 0,
        price: product ? product.price : 0,
        stock: product ? product.quantity : 0
    };

    const [formValues, setFormValues] = useState(init);

    const [imageValues, setImageValues] = useState(
        product ? product.images : ['']
    );

    const handleNameChange = (e: FocusEvent<HTMLInputElement, Element>) => {
        setFormValues({ ...formValues, name: e.currentTarget.value });
    };

    const imagesField = useMemo(() => {
        return imageValues.map((image, index) => (
            <div className='text-md mb-2 flex' key={index}>
                <TextBox
                    value={image}
                    placeholder='Image link'
                    onChange={(e) => {
                        imageValues[index] = e.currentTarget.value;
                        setImageValues([...imageValues]);
                        setFormValues({
                            ...formValues,
                            images: imageValues
                        });
                    }}
                ></TextBox>
            </div>
        ));
    }, [imageValues]);

    function handleDescriptionChange(
        e: ChangeEvent<HTMLTextAreaElement>
    ): void {
        setFormValues({ ...formValues, description: e.currentTarget.value });
    }

    function handleNormalPriceChange(e: ChangeEvent<HTMLInputElement>): void {
        setFormValues({
            ...formValues,
            normalPrice: parseFloat(e.target.value) || 0
        });
    }

    function handlePriceChange(e: ChangeEvent<HTMLInputElement>): void {
        setFormValues({
            ...formValues,
            price: parseFloat(e.target.value) || 0
        });
    }

    function handleStockChange(e: ChangeEvent<HTMLInputElement>): void {
        setFormValues({
            ...formValues,
            stock: parseFloat(e.target.value) || 0
        });
    }

    const handleSave = () => {
        if (
            formValues.name === '' ||
            formValues.categoryId === '' ||
            formValues.normalPrice === 0 ||
            formValues.price === 0 ||
            formValues.stock === 0
        ) {
            toast.error('Please fill in all fields', toastOptions);
            return;
        }

        if (action === 'add') {
            addProduct(
                {
                    name: formValues.name,
                    description: formValues.description,
                    normalPrice: formValues.normalPrice,
                    price: formValues.price,
                    quantity: formValues.stock,
                    images: imageValues,
                    category: formValues.categoryId,
                    reviews: [],
                    relatedProducts: []
                },
                {
                    onSuccess: (res) => {
                        toast.success(res.data.message, toastOptions);
                        setAction('');
                    }
                }
            );
        }

        if (action === 'edit') {
            editProduct(
                {
                    id: product?._id || '',
                    body: {
                        name: formValues.name,
                        description: formValues.description,
                        normalPrice: formValues.normalPrice,
                        price: formValues.price,
                        quantity: formValues.stock,
                        images: imageValues,
                        category: formValues.categoryId,
                        reviews: [],
                        relatedProducts: []
                    }
                },
                {
                    onSuccess: (res) => {
                        toast.success(res.data.message, toastOptions);
                        setAction('');
                    }
                }
            );
        }
    };

    if (isLoading) return <div>Loading...</div>;

    console.log('formValues', formValues);

    return (
        <div className='container p-4'>
            <span className='text-main mb-2 flex text-lg'>
                {action === 'edit' ? 'Edit product' : 'Add new product'}
            </span>
            <div>
                <div className='rounded-sm bg-gray-100 px-4 py-2'>
                    <span className='text-main flex text-lg'>
                        Basic Information
                    </span>

                    {/* Name */}
                    <div className='grid grid-cols-12'>
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Name
                            </span>
                        </div>
                        <div className='col-span-8'>
                            <TextBox
                                required={true}
                                placeholder='Product name'
                                onChange={handleNameChange}
                                value={formValues.name}
                            ></TextBox>
                        </div>
                    </div>

                    {/* Category */}
                    <div className='mt-2 grid grid-cols-12'>
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Category
                            </span>
                        </div>
                        <div className='col-span-2 flex items-center'>
                            {/* <TextBox required={true}></TextBox> */}
                            <DropdownButton
                                className='text-md full-width-div border-1 border-main mx-auto rounded-md px-4 py-2'
                                value={
                                    categories.find(
                                        (e: any) =>
                                            e._id === formValues.categoryId
                                    )?.name || 'Select category'
                                }
                                items={categories.map((e: any) => e.name)}
                                onSelect={function (
                                    selectedItem: number
                                ): void {
                                    setFormValues({
                                        ...formValues,
                                        categoryId: categories[selectedItem]._id
                                    });
                                }}
                            ></DropdownButton>
                        </div>
                    </div>

                    {/* Images */}
                    <div className='mt-2 grid grid-cols-12'>
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md mt-2 flex justify-end'>
                                Images
                            </span>
                        </div>
                        <div className='col-span-7'>{...imagesField}</div>
                        <div className='col-span-1'>
                            <Button
                                className='text-md ml-2'
                                textColor='#777777'
                                backgroundColor='#FFFFFF'
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (
                                        imageValues.every((e) => e.length > 0)
                                    ) {
                                        console.log(imageValues);
                                        setImageValues([...imageValues, '']);
                                    }
                                }}
                            >
                                More
                            </Button>
                        </div>
                    </div>

                    {/* Description */}
                    <div className='grid grid-cols-12'>
                        <div className='col-span-3 grid pr-4 pt-1'>
                            <span className='text-md flex items-start justify-end'>
                                Description
                            </span>
                        </div>
                        <div className='col-span-8'>
                            <textarea
                                placeholder='Product Description'
                                className='text-md full-width-div flex p-1'
                                name=''
                                id=''
                                value={formValues.description}
                                rows={5}
                                onChange={handleDescriptionChange}
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className='mt-3 rounded-sm bg-gray-100 px-4 py-2'>
                    <span className='text-main flex text-lg'>
                        Sale Information
                    </span>

                    {/* Normal price */}
                    <div className='grid grid-cols-12'>
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Product price
                            </span>
                        </div>
                        <div className='col-span-4 flex items-center'>
                            <InputNumber
                                placeholder='Product Price'
                                className='text-md p-0 '
                                required
                                value={formValues.normalPrice}
                                onChange={handleNormalPriceChange}
                            ></InputNumber>
                            <span className='text-md ml-4 flex items-center justify-end'>
                                VND
                            </span>
                        </div>
                    </div>

                    {/* Price */}
                    <div className='mt-2 grid grid-cols-12'>
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Sale Price
                            </span>
                        </div>
                        <div className='col-span-4 flex'>
                            <InputNumber
                                placeholder='Product Price'
                                className='text-md p-0 '
                                required
                                value={formValues.price}
                                onChange={handlePriceChange}
                            ></InputNumber>
                            <span className='text-md ml-4 flex items-center justify-end'>
                                VND
                            </span>
                        </div>
                    </div>

                    {/* Stock */}
                    <div className='mt-2 grid grid-cols-12'>
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Stock
                            </span>
                        </div>
                        <div className='col-span-4'>
                            <InputNumber
                                placeholder='Quantity in stock'
                                required
                                value={formValues.stock}
                                className='text-md p-0 '
                                onChange={handleStockChange}
                            ></InputNumber>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-3'>
                    <div className='col-span-2'></div>
                    <div className='col-span-1 flex'>
                        <Button
                            className='text-md m-4 '
                            textColor='#777777'
                            backgroundColor='#FFFFFF'
                            onClick={() => setAction('')}
                        >
                            Cancel
                        </Button>
                        <Button onClick={handleSave} className='text-md my-4'>
                            Save and Publish
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
