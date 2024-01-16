/* eslint-disable @next/next/no-img-element */
import CategoryType from '@/types/CategoryType';

import Button from '@/components/common/Button';
import { useMutation, useQueryClient } from 'react-query';
import categoryApi from '@/apis/category.api';
import { toast } from 'react-toastify';
import { toastOptions } from '@/constants/toast';

interface IProps {
    category: CategoryType;
    handleEdit: (category: CategoryType) => void;
}

export const Category = ({ category, handleEdit }: IProps) => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: (deleteId: string) => categoryApi.deleteCategory(deleteId),
        onSuccess: (res) => {
            toast.success(res.data.message, toastOptions);
            queryClient.invalidateQueries('categories');
        }
    });

    const handleDelete = (deleteId: string) => {
        mutate(deleteId);
    };

    return (
        <div
            className='grid grid-cols-12'
            style={{
                borderLeft: '2px solid #EEEEEE',
                marginLeft: 30,
                marginRight: 30,
                paddingLeft: 20,
                paddingTop: 10,
                paddingBottom: 10,
                paddingRight: 20,
                alignItems: 'center',
                borderBottom: '2px solid #EEEEEE',
                borderRight: '2px solid #EEEEEE'
            }}
        >
            <div
                className='col-span-6'
                style={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <img
                    src={category.image}
                    alt=''
                    style={{
                        width: 60,
                        height: 60,
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />
                <div style={{ paddingLeft: 10, fontWeight: 600 }}>
                    {category.name}
                </div>
            </div>
            <div className='col-span-6'>
                <div className='grid grid-cols-6 items-center'>
                    <div className='col-span-3 text-center'>
                        {category.numberOfProducts}
                    </div>
                    <div className='col-span-3 flex text-center'>
                        <Button
                            className=''
                            backgroundColor='#FFFFFF'
                            textColor='#00adb5'
                            onClick={() => {
                                handleEdit(category);
                            }}
                        >
                            Edit
                        </Button>
                        <Button
                            className='ml-2'
                            backgroundColor='#FFFFFF'
                            textColor='#FF0000'
                            onClick={() => {
                                handleDelete(category._id);
                            }}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
