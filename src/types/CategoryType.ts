type CategoryType = {
    _id: string;
    name: string;
    image: string;
    shopsales: number;
};

export const initialCategory: CategoryType = {
    _id: '',
    name: '',
    image: '',
    shopsales: 0,
};

export default CategoryType;
