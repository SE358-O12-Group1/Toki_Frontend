'use client';

import Footer from '../common/MainLayout/Footer';
import ManageWindow from './ManageWindow';
import SellerHeader from './SellerHeader';

export default function sellerScreen() {
    return (
        <>
            <SellerHeader></SellerHeader>

            <div style={{ background: '#EEEEEE' }} className='min-h-[78vh]'>
                {' '}
                <ManageWindow></ManageWindow>
            </div>

            <Footer></Footer>
        </>
    );
}
