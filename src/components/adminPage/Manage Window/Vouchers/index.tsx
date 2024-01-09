import TextBox from '@/components/common/TextBox';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Voucher } from '@/components/adminPage/Manage Window/Vouchers/component/voucher'
import { mockVoucher } from './mockVoucher';

export default function ManageCategories() {
    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <div
                    className='col-5'
                    style={{
                        display: 'flex',
                        marginLeft: 30,
                        marginTop: 30
                    }}
                >
                    <TextBox placeholder='Voucher' type='Search'></TextBox>
                </div>
                <div>
                    <Button
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
                            paddingRight: 20,
                        }}
                    >
                        Add New Voucher
                    </Button>
                </div>
            </div>
            <div style={{ paddingTop: 20, paddingBottom: 20 }}>
                <Button
                    size='small'
                    variant='outlined'
                    style={{
                        background: '#00ADB5',
                        color: 'white',
                        minWidth: 150,
                        textTransform: 'none',
                        fontSize: 18,
                        marginLeft: 30
                    }}
                >
                    Search
                </Button>
            </div>
            <div
                style={{
                    paddingTop: 15,
                    marginLeft: 30,
                    paddingBottom: 25,
                    fontSize: 24,
                    color: '#00ADB5',
                    fontWeight: 500,
                }}
            >{mockVoucher.length} Vouchers</div>
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
                <div className='col-span-3' style={{ paddingLeft: 10 }}>
                    Vouchers Name
                </div>
                <div className='col-span-2 text-center'>Discount</div>
                <div className='col-span-2 text-center'>Minimum Order Price</div>
                <div className='col-span-2 text-center'>Used</div>
                <div className='col-span-2 text-center'>Status/Date</div>
                <div className='col-span-1 text-center'>Options</div>
            </div>

            <div className='col'>
                <Voucher></Voucher>
            </div>

            <Stack
                spacing={2}
                style={{
                    alignItems: 'center',
                    paddingTop: 20,
                    paddingBottom: 20
                }}
            >
                <Pagination count={11} defaultPage={2} siblingCount={0} />
            </Stack>
        </>
    )
}