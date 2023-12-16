export interface ICategory {
    _id?: string;
    name: string;
    imageURL: string;
}

export const mockCategories: ICategory[] = [
    {
        name: 'Men Clothes',
        imageURL:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZQ3eENsHG9JgXsYZeJja3KypBNSLTtRPygQrle7hrZZjrxlgP7zcb5cjGRgjzNzFNEIA&usqp=CAU'
    },
    {
        name: 'Women Clothes',
        imageURL:
            'https://sites.create-cdn.net/siteimages/28/4/9/284928/15/7/9/15798435/761x1000.jpg?1505296014'
    }
];
