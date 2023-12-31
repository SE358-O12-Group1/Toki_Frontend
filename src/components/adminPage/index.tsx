'use client';

// components
import ManageWindow from './Manage Window';
import AdminHeader from './Header';
import Footer from '../common/MainLayout/Footer';

export default function adminPage() {
    return (
        <>
            <AdminHeader></AdminHeader>

            <div style={{ background: '#EEEEEE' }} className='min-h-[78vh]'>
                {' '}
                <ManageWindow></ManageWindow>
            </div>

            <Footer></Footer>
        </>
    );
}
