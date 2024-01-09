import TextBox from '@/components/common/TextBox';
import Button from '@mui/material/Button';
import { User } from '@/components/adminPage/Manage Window/Users/component/user';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function ManageUsers() {
    return (
        <>
            <div
                className='col-5'
                style={{
                    marginLeft: 30,
                    marginTop: 30
                }}
            >
                <TextBox placeholder='Users' type='Search'></TextBox>
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
                className='col d-flex '
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
                <div className='col-3' style={{ paddingLeft: 10 }}>
                    UserName
                </div>
                <div className='col-3 text-center'>Phone number</div>
                <div className='col-1 text-center'>Bought</div>
                <div className='col-1 text-right'>Violation</div>
                <div className='col-3 text-center'>Comment</div>
                <div className='col-1 text-center'>Option</div>
            </div>

            <div className='col'>
                <User></User>
                <User></User>
                <User></User>
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
    );
}
