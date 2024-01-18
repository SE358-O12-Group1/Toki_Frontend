import { useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import TextBox from '@/components/common/TextBox';
import { Seller } from '@/components/adminPage/Manage Window/Sellers/component/seller';
import UserType from '@/types/UserType';
import { useQuery } from 'react-query';
import userApi from '@/apis/user.api';
import { removeVietnamesePhonetics } from '@/utils/utils';

export default function ManageSellers() {
    const [sellers, setSellers] = useState<UserType[]>([]);

    const {} = useQuery({
        queryKey: 'sellers',
        queryFn: () => userApi.getUsers(1),
        onSuccess: (res) => {
            setSellers(res.data.data);
        }
    });

    const [searchInput, setSearchInput] = useState('');

    const filteredSellers = useMemo(() => {
        const filterString = removeVietnamesePhonetics(
            searchInput.trim().toLowerCase()
        );

        return sellers.filter((seller) =>
            removeVietnamesePhonetics(seller.name.toLowerCase()).includes(
                filterString
            )
        );
    }, [searchInput, sellers]);

    return (
        <>
            <div
                className='col-5'
                style={{
                    marginLeft: 30,
                    marginTop: 30
                }}
            >
                <TextBox
                    placeholder='Seller'
                    type='Search'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                ></TextBox>
            </div>
            {/* <div style={{ paddingTop: 20, paddingBottom: 20 }}>
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
            </div> */}
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
                {filteredSellers.length}{' '}
                {filteredSellers.length > 1 ? 'Sellers' : 'Seller'}
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
                <div className='col-4' style={{ paddingLeft: 10 }}>
                    Seller Name
                </div>
                <div className='col-3 text-center'>Phone number</div>
                <div className='col-3 text-center'>Verified</div>
                {/* <div className='col-3 text-center'>Comment</div> */}
                <div className='col-2 text-center'>Status</div>
            </div>

            <div className='col pb-5'>
                {filteredSellers.map((seller) => (
                    <Seller key={seller._id} seller={seller}></Seller>
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
