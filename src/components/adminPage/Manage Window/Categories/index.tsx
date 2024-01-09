import TextBox from '@/components/common/TextBox';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Category } from '@/components/adminPage/Manage Window/Categories/component/category'
import { mockCategory } from './mockCategory';

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
                    <TextBox placeholder='Category Name' type='Search'></TextBox>
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
                        Add New Category
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
            >{mockCategory.length} Categories</div>
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
                <div className='col-span-6' style={{ paddingLeft: 10 }}>
                    Categories
                </div>
                <div className='col-span-6' style={{ paddingLeft: 10 }}>
                    <div className='grid grid-cols-6 items-center'>
                        <div className='col-span-3 text-center'>Shop Sales</div>
                        <div className='col-span-3 text-center'>Options</div>
                    </div>
                </div>
            </div>

            <div className='col'>
                <Category></Category>
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