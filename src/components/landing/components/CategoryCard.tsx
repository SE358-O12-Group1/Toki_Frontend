import { ICategory } from '../mockData';

export interface ICategoryCardProps {
    category: ICategory;
}

export default function CategoryCard(props: ICategoryCardProps) {
    const { category } = props;
    return (
        <button type='button' className='btn' style={{ width: '100%' }}>
            <div className='ms-1 flex items-center'>
                <div className='d-flex '>
                    <img
                        src={category.imageURL}
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
