import VoucherType from '@/types/VoucherType';

export const mockVoucher1: VoucherType = {
    _id: '1',
    name: 'VCH-356',
    image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljkr6fpy1n9e3e',
    discount: 20000,
    minimumprice: 165000,
    used: 92,
    status: 'ongoing',
    startdate: '2/10/2023',
    enddate: '2/12/2023'
}

export const mockVoucher2: VoucherType = {
    _id: '2',
    name: 'VCH-357',
    image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljkr6fpy1n9e3e',
    discount: 20000,
    minimumprice: 165000,
    used: 92,
    status: 'upcoming',
    startdate: '2/10/2023',
    enddate: '2/12/2023'
}

export const mockVoucher3: VoucherType = {
    _id: '3',
    name: 'VCH-358',
    image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljkr6fpy1n9e3e',
    discount: 20000,
    minimumprice: 165000,
    used: 92,
    status: 'expired',
    startdate: '2/10/2023',
    enddate: '2/12/2023'
}

export const mockVoucher4: VoucherType = {
    _id: '4',
    name: 'VCH-359',
    image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljkr6fpy1n9e3e',
    discount: 20000,
    minimumprice: 165000,
    used: 92,
    status: 'ongoing',
    startdate: '2/10/2023',
    enddate: '2/12/2023'
}

export const mockVoucher = [
    mockVoucher1,
    mockVoucher2,
    mockVoucher3,
    mockVoucher4,
]