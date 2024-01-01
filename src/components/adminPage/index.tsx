'use client';

// components
import ManageWindow from './Manage Window';
import AdminHeader from './Header';
// types

// apis

export default function adminPage() {
    return (
        <>
            <AdminHeader></AdminHeader>

            <div style={{ background: '#EEEEEE' }}>
                {' '}
                <ManageWindow></ManageWindow>
            </div>
        </>
    );
}
