type VoucherType = {
    _id: string;
    code: string;
    type: number;
    value: number;
    min_order_value: number;
    max_uses: number;
    uses_count: number;
    // start_date: string;
    // end_date: string;
    is_active: boolean;
};

export const initialCategory: VoucherType = {
    _id: '',
    code: '',
    type: 0,
    value: 0,
    min_order_value: 0,
    max_uses: 0,
    uses_count: 0,
    // start_date: '',
    // end_date: '',
    is_active: false
};

export const convertNumberToType = (type: number) => {
    switch (type) {
        case 0:
            return 'Percentage';
        case 1:
            return 'Fixed';
    }
};

export default VoucherType;
