import React from 'react';
import Circle from '/public/assets/images/Ellipse.png';
import Link from 'next/link';
import Bin from '/public/assets/images/Bin.png';

export const Seller = () => {
    return (
        <div
            className='col d-flex'
            style={{
                borderLeft: '2px solid #EEEEEE',
                marginLeft: 30,
                marginRight: 30,
                paddingLeft: 30,
                paddingTop: 10,
                paddingBottom: 10,
                alignItems: 'center',
                borderBottom: '2px solid #EEEEEE',
                borderRight: '2px solid #EEEEEE'
            }}
        >
            <div>
                <img src={Circle.src} />
            </div>
            <div className='col-3' style={{ paddingLeft: 20, fontWeight: 600 }}>
                USERNAME
            </div>
            <div className='col-2' style={{ paddingLeft: 20 }}>
                0999999999
            </div>
            <div className='col-1 text-center' style={{ paddingLeft: 40 }}>
                199
            </div>
            <div className='col-2 text-center' style={{ paddingRight: 30 }}>
                0
            </div>
            <div className='col-2'>
                <Link href='' style={{ textDecoration: 'underline' }}>
                    View activity history
                </Link>
            </div>
            <div className='col-1 ms-auto' style={{ paddingLeft: 20 }}>
                {' '}
                <img src={Bin.src} />
            </div>
        </div>
    );
};
