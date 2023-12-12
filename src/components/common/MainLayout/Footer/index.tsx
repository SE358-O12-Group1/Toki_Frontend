export interface IFooterProps {
    title?: string;
}
import Twitter from '/public/assets/images/Twitter.png';
import Instagram from '/public/assets/images/Instagram.png';
import Github from '/public/assets/images/Github.png';
import Link from 'next/link';
const Footer = () => {
    return (
        <>
            <div className='main-colored flex p-1'>
                <div className='offset-1 mb-3 mt-2'>
                    <button
                        type='button'
                        className='btn main-colored text-white'
                    >
                        <img src={Twitter.src} />
                    </button>
                    <button
                        type='button'
                        className='btn main-colored text-white'
                    >
                        <img src={Github.src} />
                    </button>
                    <button
                        type='button'
                        className='btn main-colored text-white'
                    >
                        <img src={Instagram.src} />
                    </button>
                </div>

                <div className='main-colored  offset-1 d-flex mb-2 text-left'>
                    © 2023 TOKI. All Rights Reserved.
                    <div>
                        {' '}
                        <Link href='/' className='me-1 ms-2 text-white'>
                            {' '}
                            Terms of Service{' '}
                        </Link>
                    </div>
                    |
                    <div>
                        <Link href='/' className='ms-1 text-white'>
                            {' '}
                            Privacy Policy{' '}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
