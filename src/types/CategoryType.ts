type CategoryType = {
    _id: string;
    name: string;
    image: string;
    numberOfProducts: number;
};

export const initialCategory: CategoryType = {
    _id: '',
    name: '',
    image: '',
    numberOfProducts: 0
};

export default CategoryType;
