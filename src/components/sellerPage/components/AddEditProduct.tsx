import Button from '@/components/common/Button';
import DropdownButton from '@/components/common/DropdownButton';
import TextBox from '@/components/common/TextBox';
import InputNumber from '@/components/productPage/components/InputNumber';
import { mockCategories } from '@/components/productPage/mockData';
import ProductType from '@/types/ProductType';
import { useRouter } from 'next/navigation';
import { useState, FocusEvent, useMemo, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';

export interface IAddEditProductProps {
    product?: ProductType;
}

type AddEditProductType = {
    name: string;
    categoryId: string;
    images: string[];
    description: string;
    price: number;
    stock: number;
};

export default function AddEditProduct({ product }: IAddEditProductProps) {
    const init: AddEditProductType = {
        name: product ? product.name : '',
        categoryId: product ? product.category._id : '',
        images: product ? product.images : [],
        description: product ? product.description : '',
        price: product ? product.price : 0,
        stock: product ? product.quantity : 0
    };
    const router = useRouter();
    const isEditing: boolean = product != null;
    const categories = mockCategories;
    const [formValues, setFormValues] = useState(init);
    const [imageValues, setImageValues] = useState(
        product ? product.images : ['']
    );

    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        if (imageValues.every((e) => e.length < 1)) {
            toast.warn('There must be at least one product image.');
        }

        // TODO
        if (isEditing) {
            // EDIT product
        } else {
            // CREATE product
        }
    }

    const handleNameChange = (e: FocusEvent<HTMLInputElement, Element>) => {
        setFormValues({ ...formValues, name: e.currentTarget.value });
    };

    const imagesField = useMemo(() => {
        return imageValues.map((image, index) => (
            <div className='text-md mb-2 flex'>
                <TextBox
                    value={image}
                    placeholder='Image link'
                    onChange={(e) => {
                        imageValues[index] = e.currentTarget.value;
                        setImageValues([...imageValues]);
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

    function handlePriceChange(e: ChangeEvent<HTMLInputElement>): void {
        setFormValues({ ...formValues, price: parseFloat(e.target.value) });
    }

    function handleStockChange(e: ChangeEvent<HTMLInputElement>): void {
        setFormValues({ ...formValues, stock: parseFloat(e.target.value) });
    }

    return (
        <div className='container p-4'>
            <span className='text-main mb-2 flex text-lg'>
                {isEditing ? 'Edit product' : 'Add new product'}
            </span>
            <form onSubmit={handleSubmit}>
                <div className='rounded-sm bg-gray-100 px-4 py-2'>
                    <span className='text-main flex text-lg'>
                        Basic Information
                    </span>
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
                    <div className='mt-2 grid grid-cols-12'>
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Category
                            </span>
                        </div>
                        <div className='col-span-8 flex'>
                            {/* <TextBox required={true}></TextBox> */}
                            <DropdownButton
                                className='text-md full-width-div'
                                value={
                                    init.categoryId
                                        ? categories.find(
                                              (e) => e._id == init.categoryId
                                          )?.name
                                        : categories[0].name
                                }
                                items={categories.map((e) => e.name)}
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
                                        setImageValues([...imageValues, '']);
                                    }
                                }}
                            >
                                More
                            </Button>
                        </div>
                    </div>
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
                    <div className='grid grid-cols-12'>
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md flex items-center justify-end'>
                                Price
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
                            onClick={(e) => {
                                e.preventDefault();
                                router.back();
                            }}
                        >
                            Cancel
                        </Button>
                        <Button className='text-md my-4'>
                            Save and Publish
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}
