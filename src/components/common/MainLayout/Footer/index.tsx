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
            <div className='main-colored p-4'>
                <div className='offset-1 mt-2'>
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
                    <span className='text-yellow'>
                        © 2023 TOKI. All Rights Reserved.
                    </span>
                    <Link href='/' className='text-yellow me-1 ms-2'>
                        {' '}
                        Terms of Service{' '}
                    </Link>
                    <span className='text-yellow'>|</span>
                    <Link href='/' className='text-yellow ms-1'>
                        {' '}
                        Privacy Policy{' '}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Footer;
