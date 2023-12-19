export interface IProduct {
    _id: string;
    name: string;
    images: Array<string>;
    seller: IUSer;
    description: string;
    category: string;
    price: number;
    normalPrice?: number;
    quantity: number;
    ratings?: number;
    sold_quantity: number;
    variants?: Array<string>;
    relatedProducts?: Array<IProduct>;
}

export interface IProductInCart {
    _id: string;
    product: IProduct;
    quantity: number;
}

export const mockUser: IUSer = {
    name: 'Nhà sách Bán sách',
    email: 'com.example@ddsdsd.com',
    imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jgho-PgO5rtMOErauKhhRLlb8vsl5cof3RBLf1o1jw&s'
};

export const mockUser2: IUSer = {
    name: 'Nhà sách Bán sách 2',
    email: 'com.example@ddsdsd.com',
    imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jgho-PgO5rtMOErauKhhRLlb8vsl5cof3RBLf1o1jw&s'
};

export const mockProduct2: IProduct = {
    _id: '2',
    name: 'P1 - Giáo Trình Kỹ Thuật Lập Trình C',
    images: [
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b2pl8f6',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljkr6fpy1n9e3e',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b445o55'
    ],
    seller: mockUser,
    category: 'Sách',
    price: 12000,
    quantity: 12,
    sold_quantity: 4,
    description:
        "Sách - Giáo Trình Kỹ Thuật Lập Trình C, \nTác giả: Nhiều tác giả \nNhà xuất bản: Nhà Xuất Bản Giáo Dục Việt Nam\nĐơn vị phát hành: Nhà Xuất Bản Giáo Dục Việt Nam\nNgày xuất bản:2010\nSố trang :216\nKích thước 16 x 24 cm\nLoại bìa: Mềm\nNội dung : \nNgôn ngữ lập trình C là một ngôn ngữ lập trình vạn năng, ngoài việc dùng để viết hệ điều hành UNIX, người ta nhanh chóng nhận ra sức mạnh của nó trong việc xử lý các vấn đề của Tin học. Ngôn ngữ lập trình C được gọi là 'Ngôn ngữ lập trình hệ thống' vì nó được dùng cho việc viết hệ điều hành; nó cũng tiện lợi cho việc viết các chương trình xử lý số, xử lý văn bản, cơ sở dữ liệu, các chương trình ứng dụng trong công nghiệp và dân dụng. Trong thực tế, người ta thường dùng trình dịch Turbo C hoặc Borland C của hãng Borland. Ngày nay, do xu hướng chuyển sang lập trình hướng đối tượng nên ngôn ngữ lập trình C còn được phát triển thành ngôn ngữ lập trình hướng đối tượng có tên là C++. Ngoài Borland, hãng Microsoft cũng cung cấp bộ phát triển tích hợp Visual C++ trong bộ Visual Studio. Giáo trình này tập trung đề cập vào trình dịch Turbo C (TC) của Borland."
};

export const mockProduct3: IProduct = {
    _id: '3',
    name: 'P2- Giáo Trình Kỹ Thuật Lập Trình C',
    images: [
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljkr6fpy1n9e3e',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b2pl8f6',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b445o55'
    ],
    seller: mockUser2,
    ratings: 4.2,
    category: 'Sách',
    price: 12000,
    quantity: 12,
    sold_quantity: 4,
    description:
        "Sách - Giáo Trình Kỹ Thuật Lập Trình C, \nTác giả: Nhiều tác giả \nNhà xuất bản: Nhà Xuất Bản Giáo Dục Việt Nam\nĐơn vị phát hành: Nhà Xuất Bản Giáo Dục Việt Nam\nNgày xuất bản:2010\nSố trang :216\nKích thước 16 x 24 cm\nLoại bìa: Mềm\nNội dung : \nNgôn ngữ lập trình C là một ngôn ngữ lập trình vạn năng, ngoài việc dùng để viết hệ điều hành UNIX, người ta nhanh chóng nhận ra sức mạnh của nó trong việc xử lý các vấn đề của Tin học. Ngôn ngữ lập trình C được gọi là 'Ngôn ngữ lập trình hệ thống' vì nó được dùng cho việc viết hệ điều hành; nó cũng tiện lợi cho việc viết các chương trình xử lý số, xử lý văn bản, cơ sở dữ liệu, các chương trình ứng dụng trong công nghiệp và dân dụng. Trong thực tế, người ta thường dùng trình dịch Turbo C hoặc Borland C của hãng Borland. Ngày nay, do xu hướng chuyển sang lập trình hướng đối tượng nên ngôn ngữ lập trình C còn được phát triển thành ngôn ngữ lập trình hướng đối tượng có tên là C++. Ngoài Borland, hãng Microsoft cũng cung cấp bộ phát triển tích hợp Visual C++ trong bộ Visual Studio. Giáo trình này tập trung đề cập vào trình dịch Turbo C (TC) của Borland."
};

export const mockProduct4: IProduct = {
    _id: '4',
    name: 'P3- Giáo Trình Kỹ Thuật Lập Trình C',
    images: [
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljkr6fpy1n9e3e',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b2pl8f6',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b445o55'
    ],
    seller: mockUser,
    // ratings: 4.2,
    category: 'Sách',
    price: 12000,
    normalPrice: 16000,
    quantity: 12,
    sold_quantity: 4,
    description:
        "Sách - Giáo Trình Kỹ Thuật Lập Trình C, \nTác giả: Nhiều tác giả \nNhà xuất bản: Nhà Xuất Bản Giáo Dục Việt Nam\nĐơn vị phát hành: Nhà Xuất Bản Giáo Dục Việt Nam\nNgày xuất bản:2010\nSố trang :216\nKích thước 16 x 24 cm\nLoại bìa: Mềm\nNội dung : \nNgôn ngữ lập trình C là một ngôn ngữ lập trình vạn năng, ngoài việc dùng để viết hệ điều hành UNIX, người ta nhanh chóng nhận ra sức mạnh của nó trong việc xử lý các vấn đề của Tin học. Ngôn ngữ lập trình C được gọi là 'Ngôn ngữ lập trình hệ thống' vì nó được dùng cho việc viết hệ điều hành; nó cũng tiện lợi cho việc viết các chương trình xử lý số, xử lý văn bản, cơ sở dữ liệu, các chương trình ứng dụng trong công nghiệp và dân dụng. Trong thực tế, người ta thường dùng trình dịch Turbo C hoặc Borland C của hãng Borland. Ngày nay, do xu hướng chuyển sang lập trình hướng đối tượng nên ngôn ngữ lập trình C còn được phát triển thành ngôn ngữ lập trình hướng đối tượng có tên là C++. Ngoài Borland, hãng Microsoft cũng cung cấp bộ phát triển tích hợp Visual C++ trong bộ Visual Studio. Giáo trình này tập trung đề cập vào trình dịch Turbo C (TC) của Borland."
};

export const mockProduct5: IProduct = {
    _id: '5',
    name: 'P4- Giáo Trình Kỹ Thuật Lập Trình C',
    images: [
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljkr6fpy1n9e3e',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b2pl8f6',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b445o55'
    ],
    seller: mockUser2,
    ratings: 4.2,
    category: 'Sách',
    price: 12000,
    quantity: 12,
    sold_quantity: 4,
    description:
        "Sách - Giáo Trình Kỹ Thuật Lập Trình C, \nTác giả: Nhiều tác giả \nNhà xuất bản: Nhà Xuất Bản Giáo Dục Việt Nam\nĐơn vị phát hành: Nhà Xuất Bản Giáo Dục Việt Nam\nNgày xuất bản:2010\nSố trang :216\nKích thước 16 x 24 cm\nLoại bìa: Mềm\nNội dung : \nNgôn ngữ lập trình C là một ngôn ngữ lập trình vạn năng, ngoài việc dùng để viết hệ điều hành UNIX, người ta nhanh chóng nhận ra sức mạnh của nó trong việc xử lý các vấn đề của Tin học. Ngôn ngữ lập trình C được gọi là 'Ngôn ngữ lập trình hệ thống' vì nó được dùng cho việc viết hệ điều hành; nó cũng tiện lợi cho việc viết các chương trình xử lý số, xử lý văn bản, cơ sở dữ liệu, các chương trình ứng dụng trong công nghiệp và dân dụng. Trong thực tế, người ta thường dùng trình dịch Turbo C hoặc Borland C của hãng Borland. Ngày nay, do xu hướng chuyển sang lập trình hướng đối tượng nên ngôn ngữ lập trình C còn được phát triển thành ngôn ngữ lập trình hướng đối tượng có tên là C++. Ngoài Borland, hãng Microsoft cũng cung cấp bộ phát triển tích hợp Visual C++ trong bộ Visual Studio. Giáo trình này tập trung đề cập vào trình dịch Turbo C (TC) của Borland."
};

export const mockProduct6: IProduct = {
    _id: '6',
    name: 'P5- Giáo Trình Kỹ Thuật Lập Trình C',
    images: [
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljkr6fpy1n9e3e',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b2pl8f6',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b445o55'
    ],
    seller: mockUser,
    ratings: 4.2,
    category: 'Sách',
    price: 12000,
    normalPrice: 20000,
    quantity: 12,
    sold_quantity: 4,
    description:
        "Sách - Giáo Trình Kỹ Thuật Lập Trình C, \nTác giả: Nhiều tác giả \nNhà xuất bản: Nhà Xuất Bản Giáo Dục Việt Nam\nĐơn vị phát hành: Nhà Xuất Bản Giáo Dục Việt Nam\nNgày xuất bản:2010\nSố trang :216\nKích thước 16 x 24 cm\nLoại bìa: Mềm\nNội dung : \nNgôn ngữ lập trình C là một ngôn ngữ lập trình vạn năng, ngoài việc dùng để viết hệ điều hành UNIX, người ta nhanh chóng nhận ra sức mạnh của nó trong việc xử lý các vấn đề của Tin học. Ngôn ngữ lập trình C được gọi là 'Ngôn ngữ lập trình hệ thống' vì nó được dùng cho việc viết hệ điều hành; nó cũng tiện lợi cho việc viết các chương trình xử lý số, xử lý văn bản, cơ sở dữ liệu, các chương trình ứng dụng trong công nghiệp và dân dụng. Trong thực tế, người ta thường dùng trình dịch Turbo C hoặc Borland C của hãng Borland. Ngày nay, do xu hướng chuyển sang lập trình hướng đối tượng nên ngôn ngữ lập trình C còn được phát triển thành ngôn ngữ lập trình hướng đối tượng có tên là C++. Ngoài Borland, hãng Microsoft cũng cung cấp bộ phát triển tích hợp Visual C++ trong bộ Visual Studio. Giáo trình này tập trung đề cập vào trình dịch Turbo C (TC) của Borland."
};

export const mockProduct: IProduct = {
    _id: '1',
    name: 'Giáo Trình Kỹ Thuật Lập Trình C',
    images: [
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljkr6fpy1n9e3e',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b2pl8f6',
        'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liyb396b445o55'
    ],
    seller: mockUser,
    category: 'Sách',
    ratings: 4.2,
    price: 10000,
    normalPrice: 18000,
    quantity: 12,
    sold_quantity: 4,
    description:
        "Sách - Giáo Trình Kỹ Thuật Lập Trình C, \nTác giả: Nhiều tác giả \nNhà xuất bản: Nhà Xuất Bản Giáo Dục Việt Nam\nĐơn vị phát hành: Nhà Xuất Bản Giáo Dục Việt Nam\nNgày xuất bản:2010\nSố trang :216\nKích thước 16 x 24 cm\nLoại bìa: Mềm\nNội dung : \nNgôn ngữ lập trình C là một ngôn ngữ lập trình vạn năng, ngoài việc dùng để viết hệ điều hành UNIX, người ta nhanh chóng nhận ra sức mạnh của nó trong việc xử lý các vấn đề của Tin học. Ngôn ngữ lập trình C được gọi là 'Ngôn ngữ lập trình hệ thống' vì nó được dùng cho việc viết hệ điều hành; nó cũng tiện lợi cho việc viết các chương trình xử lý số, xử lý văn bản, cơ sở dữ liệu, các chương trình ứng dụng trong công nghiệp và dân dụng. Trong thực tế, người ta thường dùng trình dịch Turbo C hoặc Borland C của hãng Borland. Ngày nay, do xu hướng chuyển sang lập trình hướng đối tượng nên ngôn ngữ lập trình C còn được phát triển thành ngôn ngữ lập trình hướng đối tượng có tên là C++. Ngoài Borland, hãng Microsoft cũng cung cấp bộ phát triển tích hợp Visual C++ trong bộ Visual Studio. Giáo trình này tập trung đề cập vào trình dịch Turbo C (TC) của Borland.",
    relatedProducts: [mockProduct2, mockProduct3],
    variants: ['Bìa cứng', 'Bìa mềm', 'Bản đặc biệt']
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
    name: string;
    email: string;
    password?: string;
    imageUrl?: string;
}

export const mockCartProducts: IProductInCart[] = [
    {
        _id: '1',
        product: mockProduct,
        quantity: 3
    },
    {
        _id: '2',
        product: mockProduct2,
        quantity: 1
    },
    {
        _id: '3',
        product: mockProduct3,
        quantity: 2
    },
    {
        _id: '4',
        product: mockProduct4,
        quantity: 3
    }
];
