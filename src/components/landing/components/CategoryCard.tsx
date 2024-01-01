import CategoryType from '@/types/CategoryType';
import { MouseEvent, MouseEventHandler } from 'react';

export interface ICategoryCardProps {
    category: CategoryType;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function CategoryCard({
    category,
    onClick
}: ICategoryCardProps) {
    return (
        <button
            type='button'
            className='btn'
            style={{ width: '100%' }}
            onClick={onClick}
        >
            <div className='ms-1 flex items-center'>
                <div className='d-flex '>
                    <img
                        src={
                            category.image ||
                            'https://sieuthikhan.com/images/thumbs/default-image_450.png'
                        }
                        alt={category.name}
                        width={32}
                    />
                    <div className='ml-4' style={{ fontSize: 16 }}>
                        {category.name}
                    </div>
                </div>
            </div>
        </button>
    );
}
