import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

// components
import TextBox from '@/components/common/TextBox';
import { Voucher } from '@/components/adminPage/Manage Window/Vouchers/component/voucher';

// apis
import discountApi from '@/apis/discount.api';

// types
import VoucherType from '@/types/VoucherType';

// utils
import { removeVietnamesePhonetics } from '@/utils/utils';

export default function ManageCategories() {
    const [discounts, setDiscounts] = useState<VoucherType[]>([]);
    const [searchInput, setSearchInput] = useState('');
    const [isAddvoucher, setIsAddVoucher] = useState(false)
    const [voucherEdit, setVoucherEdit] = useState<VoucherType>()
    const [isEditVoucher, setIsEditVoucher] = useState(false)

    const { isSuccess } = useQuery({
        queryKey: 'discounts',
        queryFn: () => discountApi.getAllDiscounts(),
        onSuccess: (data) => {
            setDiscounts(data.data.data);
        }
    });

    const filteredDiscounts = useMemo(() => {
        const filterString = removeVietnamesePhonetics(
            searchInput.trim().toLowerCase()
        );

        return discounts.filter((discount) =>
            removeVietnamesePhonetics(discount.code.toLowerCase()).includes(
                filterString
            )
        );
    }, [searchInput, discounts]);

    function handleAddVoucher() {
        setIsAddVoucher(!isAddvoucher)
        setIsEditVoucher(false);
    }

    function getVoucherEdit(data: VoucherType) {
        setVoucherEdit(data)
    }

    function getIsEditVoucher(data: boolean) {
        setIsEditVoucher(data)
    }
    
    return (
            <>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <div
                        className='col-5'
                        style={{
                            display: 'flex',
                            marginLeft: 30,
                            marginTop: 30
                        }}
                    >
                        <TextBox
                            placeholder='Voucher'
                            type='Search'
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        ></TextBox>
                    </div>
                    <div>
                        <Button
                            onClick={handleAddVoucher}
                            size='small'
                            variant='outlined'
                            style={{
                                background: '#00ADB5',
                                color: 'white',
                                minWidth: 150,
                                textTransform: 'none',
                                fontSize: 18,
                                marginTop: 30,
                                marginLeft: 90,
                                paddingTop: 8,
                                paddingBottom: 8,
                                paddingLeft: 20,
                                paddingRight: 20
                            }}
                        >
                            Add New Voucher
                        </Button>
                    </div>
                </div>
                <div
                    style={{
                        paddingTop: 15,
                        marginLeft: 30,
                        paddingBottom: 25,
                        fontSize: 24,
                        color: '#00ADB5',
                        fontWeight: 500
                    }}
                >
                    {filteredDiscounts.length}{' '}
                    {filteredDiscounts.length <= 1 ? 'Voucher' : 'Vouchers'}
                </div>
                <div
                    className='grid grid-cols-12'
                    style={{
                        backgroundColor: '#EEEEEE',
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginLeft: 30,
                        marginRight: 30,
                        borderTopLeftRadius: 5,
                        fontSize: 18,
                        fontWeight: 500,
                        paddingTop: 10,
                        paddingBottom: 10,
                        borderTopRightRadius: 5
                    }}
                >
                    <div className='col-span-1' style={{ paddingLeft: 10 }}>
                        Code
                    </div>
                    <div className='col-span-2 text-center'>Value</div>
                    <div className='col-span-2 text-center'>
                        Min Order Value
                    </div>
                    <div className='col-span-1 text-center'>Uses</div>
                    <div className='col-span-2 text-center'>Max Uses</div>
                    <div className='col-span-3 text-center'>Date</div>
                    <div className='col-span-1 text-center'>Options</div>
                </div>

                <div className='col pb-5'>
                    {filteredDiscounts.map((discount) => (
                        <Voucher key={discount._id} voucher={discount} onVoucherEdit={getVoucherEdit} onIsEdit={getIsEditVoucher}/>
                    ))}
                </div>

                {/* <Stack
                    spacing={2}
                    style={{
                        alignItems: 'center',
                        paddingTop: 20,
                        paddingBottom: 20
                    }}
                >
                    <Pagination count={11} defaultPage={2} siblingCount={0} />
                </Stack> */}
            </>
        );
}
