import CategoryType from '@/types/CategoryType';
import ProductType from '@/types/ProductType';
import UserType from '@/types/UserType';

export interface IProductInCart {
    _id: string;
    product: ProductType;
    quantity: number;
    variantId?: number;
}

export const mockCategory: CategoryType = {
    _id: '1',
    name: 'Category 1',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jgho-PgO5rtMOErauKhhRLlb8vsl5cof3RBLf1o1jw&s'
};

export const mockCategory2: CategoryType = {
    _id: '2',
    name: 'Category 2',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jgho-PgO5rtMOErauKhhRLlb8vsl5cof3RBLf1o1jw&s'
};

export const mockCategory3: CategoryType = {
    _id: '3',
    name: 'Category 3',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jgho-PgO5rtMOErauKhhRLlb8vsl5cof3RBLf1o1jw&s'
};

export const mockUser: UserType = {
    name: 'Nhà sách Bán sách',
    email: 'com.example@ddsdsd.com',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jgho-PgO5rtMOErauKhhRLlb8vsl5cof3RBLf1o1jw&s',
    _id: '1',
    password: '',
    phone: '',
    address: '',
    status: '',
    verified: false,
    role: 'user'
};

export const mockUser2: UserType = {
    name: 'Nhà sách Bán sách 2',
    email: 'com.example@ddsdsd.com',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jgho-PgO5rtMOErauKhhRLlb8vsl5cof3RBLf1o1jw&s',
    _id: '2',
    password: '',
    phone: '',
    address: '',
    status: '',
    verified: false,
    role: ''
};

export const mockProduct2: ProductType = {
    _id: '2',
    name: 'P1 - Giáo Trình Kỹ Thuật Lập Trình C',
    images: [
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b2pl8f6',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljkr6fpy1n9e3e',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b445o55'
    ],
    seller: mockUser,
    category: mockCategory,
    price: 12000,
    quantity: 12,
    sold_quantity: 4,
    description:
        "Sách - Giáo Trình Kỹ Thuật Lập Trình C, \nTác giả: Nhiều tác giả \nNhà xuất bản: Nhà Xuất Bản Giáo Dục Việt Nam\nĐơn vị phát hành: Nhà Xuất Bản Giáo Dục Việt Nam\nNgày xuất bản:2010\nSố trang :216\nKích thước 16 x 24 cm\nLoại bìa: Mềm\nNội dung : \nNgôn ngữ lập trình C là một ngôn ngữ lập trình vạn năng, ngoài việc dùng để viết hệ điều hành UNIX, người ta nhanh chóng nhận ra sức mạnh của nó trong việc xử lý các vấn đề của Tin học. Ngôn ngữ lập trình C được gọi là 'Ngôn ngữ lập trình hệ thống' vì nó được dùng cho việc viết hệ điều hành; nó cũng tiện lợi cho việc viết các chương trình xử lý số, xử lý văn bản, cơ sở dữ liệu, các chương trình ứng dụng trong công nghiệp và dân dụng. Trong thực tế, người ta thường dùng trình dịch Turbo C hoặc Borland C của hãng Borland. Ngày nay, do xu hướng chuyển sang lập trình hướng đối tượng nên ngôn ngữ lập trình C còn được phát triển thành ngôn ngữ lập trình hướng đối tượng có tên là C++. Ngoài Borland, hãng Microsoft cũng cung cấp bộ phát triển tích hợp Visual C++ trong bộ Visual Studio. Giáo trình này tập trung đề cập vào trình dịch Turbo C (TC) của Borland.",
    normalPrice: 0,
    rating: 0,
    variants: {}
};

export const mockProduct3: ProductType = {
    _id: '3',
    name: 'P2- Giáo Trình Kỹ Thuật Lập Trình C',
    images: [
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljkr6fpy1n9e3e',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b2pl8f6',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b445o55'
    ],
    seller: mockUser2,
    // ratings: 4.2,
    category: mockCategory2,
    price: 12000,
    quantity: 12,
    sold_quantity: 4,
    description:
        "Sách - Giáo Trình Kỹ Thuật Lập Trình C, \nTác giả: Nhiều tác giả \nNhà xuất bản: Nhà Xuất Bản Giáo Dục Việt Nam\nĐơn vị phát hành: Nhà Xuất Bản Giáo Dục Việt Nam\nNgày xuất bản:2010\nSố trang :216\nKích thước 16 x 24 cm\nLoại bìa: Mềm\nNội dung : \nNgôn ngữ lập trình C là một ngôn ngữ lập trình vạn năng, ngoài việc dùng để viết hệ điều hành UNIX, người ta nhanh chóng nhận ra sức mạnh của nó trong việc xử lý các vấn đề của Tin học. Ngôn ngữ lập trình C được gọi là 'Ngôn ngữ lập trình hệ thống' vì nó được dùng cho việc viết hệ điều hành; nó cũng tiện lợi cho việc viết các chương trình xử lý số, xử lý văn bản, cơ sở dữ liệu, các chương trình ứng dụng trong công nghiệp và dân dụng. Trong thực tế, người ta thường dùng trình dịch Turbo C hoặc Borland C của hãng Borland. Ngày nay, do xu hướng chuyển sang lập trình hướng đối tượng nên ngôn ngữ lập trình C còn được phát triển thành ngôn ngữ lập trình hướng đối tượng có tên là C++. Ngoài Borland, hãng Microsoft cũng cung cấp bộ phát triển tích hợp Visual C++ trong bộ Visual Studio. Giáo trình này tập trung đề cập vào trình dịch Turbo C (TC) của Borland.",
    normalPrice: 0,
    rating: 0,
    variants: {}
};

export const mockProduct4: ProductType = {
    _id: '4',
    name: 'P3- Giáo Trình Kỹ Thuật Lập Trình C',
    images: [
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljkr6fpy1n9e3e',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b2pl8f6',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b445o55'
    ],
    seller: mockUser,
    category: mockCategory3,
    price: 12000,
    normalPrice: 16000,
    quantity: 12,
    sold_quantity: 4,
    description:
        "Sách - Giáo Trình Kỹ Thuật Lập Trình C, \nTác giả: Nhiều tác giả \nNhà xuất bản: Nhà Xuất Bản Giáo Dục Việt Nam\nĐơn vị phát hành: Nhà Xuất Bản Giáo Dục Việt Nam\nNgày xuất bản:2010\nSố trang :216\nKích thước 16 x 24 cm\nLoại bìa: Mềm\nNội dung : \nNgôn ngữ lập trình C là một ngôn ngữ lập trình vạn năng, ngoài việc dùng để viết hệ điều hành UNIX, người ta nhanh chóng nhận ra sức mạnh của nó trong việc xử lý các vấn đề của Tin học. Ngôn ngữ lập trình C được gọi là 'Ngôn ngữ lập trình hệ thống' vì nó được dùng cho việc viết hệ điều hành; nó cũng tiện lợi cho việc viết các chương trình xử lý số, xử lý văn bản, cơ sở dữ liệu, các chương trình ứng dụng trong công nghiệp và dân dụng. Trong thực tế, người ta thường dùng trình dịch Turbo C hoặc Borland C của hãng Borland. Ngày nay, do xu hướng chuyển sang lập trình hướng đối tượng nên ngôn ngữ lập trình C còn được phát triển thành ngôn ngữ lập trình hướng đối tượng có tên là C++. Ngoài Borland, hãng Microsoft cũng cung cấp bộ phát triển tích hợp Visual C++ trong bộ Visual Studio. Giáo trình này tập trung đề cập vào trình dịch Turbo C (TC) của Borland.",
    rating: 0,
    variants: {}
};

export const mockProduct5: ProductType = {
    _id: '5',
    name: 'P4- Giáo Trình Kỹ Thuật Lập Trình C',
    images: [
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljkr6fpy1n9e3e',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b2pl8f6',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b445o55'
    ],
    seller: mockUser2,
    rating: 4.2,
    category: mockCategory,
    price: 12000,
    quantity: 12,
    sold_quantity: 4,
    description:
        "Sách - Giáo Trình Kỹ Thuật Lập Trình C, \nTác giả: Nhiều tác giả \nNhà xuất bản: Nhà Xuất Bản Giáo Dục Việt Nam\nĐơn vị phát hành: Nhà Xuất Bản Giáo Dục Việt Nam\nNgày xuất bản:2010\nSố trang :216\nKích thước 16 x 24 cm\nLoại bìa: Mềm\nNội dung : \nNgôn ngữ lập trình C là một ngôn ngữ lập trình vạn năng, ngoài việc dùng để viết hệ điều hành UNIX, người ta nhanh chóng nhận ra sức mạnh của nó trong việc xử lý các vấn đề của Tin học. Ngôn ngữ lập trình C được gọi là 'Ngôn ngữ lập trình hệ thống' vì nó được dùng cho việc viết hệ điều hành; nó cũng tiện lợi cho việc viết các chương trình xử lý số, xử lý văn bản, cơ sở dữ liệu, các chương trình ứng dụng trong công nghiệp và dân dụng. Trong thực tế, người ta thường dùng trình dịch Turbo C hoặc Borland C của hãng Borland. Ngày nay, do xu hướng chuyển sang lập trình hướng đối tượng nên ngôn ngữ lập trình C còn được phát triển thành ngôn ngữ lập trình hướng đối tượng có tên là C++. Ngoài Borland, hãng Microsoft cũng cung cấp bộ phát triển tích hợp Visual C++ trong bộ Visual Studio. Giáo trình này tập trung đề cập vào trình dịch Turbo C (TC) của Borland.",
    normalPrice: 0,
    variants: {}
};

export const mockProduct6: ProductType = {
    _id: '6',
    name: 'P5- Giáo Trình Kỹ Thuật Lập Trình C',
    images: [
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljkr6fpy1n9e3e',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b2pl8f6',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b445o55'
    ],
    seller: mockUser,
    rating: 4.2,
    category: mockCategory,
    price: 12000,
    normalPrice: 20000,
    quantity: 12,
    sold_quantity: 4,
    description:
        "Sách - Giáo Trình Kỹ Thuật Lập Trình C, \nTác giả: Nhiều tác giả \nNhà xuất bản: Nhà Xuất Bản Giáo Dục Việt Nam\nĐơn vị phát hành: Nhà Xuất Bản Giáo Dục Việt Nam\nNgày xuất bản:2010\nSố trang :216\nKích thước 16 x 24 cm\nLoại bìa: Mềm\nNội dung : \nNgôn ngữ lập trình C là một ngôn ngữ lập trình vạn năng, ngoài việc dùng để viết hệ điều hành UNIX, người ta nhanh chóng nhận ra sức mạnh của nó trong việc xử lý các vấn đề của Tin học. Ngôn ngữ lập trình C được gọi là 'Ngôn ngữ lập trình hệ thống' vì nó được dùng cho việc viết hệ điều hành; nó cũng tiện lợi cho việc viết các chương trình xử lý số, xử lý văn bản, cơ sở dữ liệu, các chương trình ứng dụng trong công nghiệp và dân dụng. Trong thực tế, người ta thường dùng trình dịch Turbo C hoặc Borland C của hãng Borland. Ngày nay, do xu hướng chuyển sang lập trình hướng đối tượng nên ngôn ngữ lập trình C còn được phát triển thành ngôn ngữ lập trình hướng đối tượng có tên là C++. Ngoài Borland, hãng Microsoft cũng cung cấp bộ phát triển tích hợp Visual C++ trong bộ Visual Studio. Giáo trình này tập trung đề cập vào trình dịch Turbo C (TC) của Borland.",
    variants: {}
};

export const mockCategories: CategoryType[] = [
    mockCategory,
    mockCategory2,
    mockCategory3
];

export const mockProduct: ProductType = {
    _id: '1',
    name: 'Giáo Trình Kỹ Thuật Lập Trình C',
    images: [
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljkr6fpy1n9e3e',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b2pl8f6',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b445o55'
    ],
    seller: mockUser,
    category: mockCategory3,
    rating: 4.2,
    price: 10000,
    normalPrice: 18000,
    quantity: 12,
    sold_quantity: 4,
    description:
        "Sách - Giáo Trình Kỹ Thuật Lập Trình C, \nTác giả: Nhiều tác giả \nNhà xuất bản: Nhà Xuất Bản Giáo Dục Việt Nam\nĐơn vị phát hành: Nhà Xuất Bản Giáo Dục Việt Nam\nNgày xuất bản:2010\nSố trang :216\nKích thước 16 x 24 cm\nLoại bìa: Mềm\nNội dung : \nNgôn ngữ lập trình C là một ngôn ngữ lập trình vạn năng, ngoài việc dùng để viết hệ điều hành UNIX, người ta nhanh chóng nhận ra sức mạnh của nó trong việc xử lý các vấn đề của Tin học. Ngôn ngữ lập trình C được gọi là 'Ngôn ngữ lập trình hệ thống' vì nó được dùng cho việc viết hệ điều hành; nó cũng tiện lợi cho việc viết các chương trình xử lý số, xử lý văn bản, cơ sở dữ liệu, các chương trình ứng dụng trong công nghiệp và dân dụng. Trong thực tế, người ta thường dùng trình dịch Turbo C hoặc Borland C của hãng Borland. Ngày nay, do xu hướng chuyển sang lập trình hướng đối tượng nên ngôn ngữ lập trình C còn được phát triển thành ngôn ngữ lập trình hướng đối tượng có tên là C++. Ngoài Borland, hãng Microsoft cũng cung cấp bộ phát triển tích hợp Visual C++ trong bộ Visual Studio. Giáo trình này tập trung đề cập vào trình dịch Turbo C (TC) của Borland.",
    variants: {}
};

export const mockProducts = [
    mockProduct,
    mockProduct2,
    mockProduct3,
    mockProduct4,
    mockProduct5,
    mockProduct6
];

export interface IUSer {
    _id: string;
    name: string;
    email: string;
    password?: string;
    imageUrl?: string;
}

export const mockCartProducts: IProductInCart[] = [
    {
        _id: '1',
        product: mockProduct,
        quantity: 3,
        variantId: 0
    },
    {
        _id: '2',
        product: mockProduct2,
        quantity: 1,
        variantId: 0
    },
    {
        _id: '3',
        product: mockProduct3,
        quantity: 2,
        variantId: 1
    },
    {
        _id: '4',
        product: mockProduct4,
        variantId: 0,
        quantity: 3
    }
];

export const ORDER_STATUS = {
    BEING_PREPARED: 'being prepared',
    TO_SHIP: 'to ship',
    TO_RECEIVE: 'to receive',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled'
};

export interface IOrder {
    user: UserType;
    status: string;
    address: string;
    total: number;
    orders: IProductInCart[];
}

export const mockOrder1: IOrder = {
    user: mockUser,
    status: ORDER_STATUS.BEING_PREPARED,
    address: '7664 Talbot St.Kingsport, TN 37660',
    total: mockCartProducts.reduce(
        (accumulator, currentValue) =>
            accumulator + currentValue.quantity * currentValue.product.price,
        0
    ),
    orders: mockCartProducts
};

export const mockOrder2: IOrder = {
    user: mockUser2,
    status: ORDER_STATUS.COMPLETED,
    address: '9177 Studebaker Court East Brunswick, NJ 08816',
    total: mockCartProducts.reduce(
        (accumulator, currentValue) =>
            accumulator + currentValue.quantity * currentValue.product.price,
        0
    ),
    orders: mockCartProducts
};

export const mockOrder3: IOrder = {
    user: mockUser,
    status: ORDER_STATUS.TO_RECEIVE,
    address: '2 Sulphur Springs St.Port Chester, NY 10573',
    total: mockCartProducts.reduce(
        (accumulator, currentValue) =>
            accumulator + currentValue.quantity * currentValue.product.price,
        0
    ),
    orders: mockCartProducts
};

export const mockOrders = [mockOrder1, mockOrder2, mockOrder3];
