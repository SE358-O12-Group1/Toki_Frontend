import { useState, FocusEvent, useMemo, SetStateAction, Dispatch } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

// apis
import categoryApi, { CategoryRequestType } from '@/apis/category.api';

// components
import Button from '@/components/common/Button';
import TextBox from '@/components/common/TextBox';

// constants
import { toastOptions } from '@/constants/toast';

// types
import CategoryType from '@/types/CategoryType';

export interface IAddEditCategoryProps {
    category?: CategoryType;
    action: string;
    setAction: Dispatch<SetStateAction<string>>;
}

type AddEditCategoryType = {
    name: string;
    image: string;
};

export default function AddEditCategory({
    category,
    action,
    setAction
}: IAddEditCategoryProps) {
    const queryClient = useQueryClient();

    const { mutate: addCategory } = useMutation({
        mutationFn: (body: CategoryRequestType) =>
            categoryApi.createCategory(body),
        onSuccess: () => {
            queryClient.invalidateQueries('categories');
        }
    });

    const { mutate: editCategory } = useMutation({
        mutationFn: ({ id, body }: { id: string; body: CategoryRequestType }) =>
            categoryApi.updateCategory(id, body),
        onSuccess: () => {
            queryClient.invalidateQueries('categories');
        }
    });

    const init: AddEditCategoryType = {
        name: category ? category.name : '',
        image: category ? category.image : ''
    };

    const [formValues, setFormValues] = useState(init);

    const [imageValue, setImageValue] = useState(
        category ? category.image : ''
    );

    const handleNameChange = (e: FocusEvent<HTMLInputElement, Element>) => {
        setFormValues({ ...formValues, name: e.currentTarget.value });
    };

    const imageField = useMemo(() => {
        return (
            <div className='text-md mb-2 flex'>
                <TextBox
                    value={imageValue}
                    placeholder='Image link'
                    onChange={(e) => setImageValue(e.currentTarget.value)}
                ></TextBox>
            </div>
        );
    }, [imageValue]);

    const handleSave = () => {
        if (formValues.name === '' || imageValue === '') {
            toast.error('Please fill in all fields', toastOptions);
            return;
        }

        if (action === 'add') {
            addCategory(
                { name: formValues.name, image: imageValue },
                {
                    onSuccess: (res) => {
                        toast.success(res.data.message, toastOptions);
                        setAction('');
                    }
                }
            );
        }

        if (action === 'edit') {
            editCategory(
                {
                    id: category?._id || '',
                    body: {
                        name: formValues.name,
                        image: imageValue
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

    return (
        <div className='container p-4'>
            <span className='text-main mb-2 flex text-lg'>
                {action === 'edit' ? 'Edit category' : 'Add new category'}
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
                                value={formValues.name}
                                onChange={handleNameChange}
                            ></TextBox>
                        </div>
                    </div>

                    {/* Image */}
                    <div className='mt-2 grid grid-cols-12'>
                        <div className='col-span-3 grid pr-4 '>
                            <span className='text-md mt-2 flex justify-end'>
                                Image
                            </span>
                        </div>
                        <div className='col-span-8'>{imageField}</div>
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
