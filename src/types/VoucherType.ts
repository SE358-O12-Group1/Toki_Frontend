type VoucherType = {
    _id: string;
    name: string;
    image: string;
    discount: number;
    minimumprice: number;
    used: number;
    status: string;
    startdate: string;
    enddate: string;
};

export const initialCategory: VoucherType = {
    _id: '',
    name: '',
    image: '',
    discount: 0,
    minimumprice: 0,
    used: 0,
    status: '',
    startdate: '',
    enddate: '',
};

export default VoucherType;
