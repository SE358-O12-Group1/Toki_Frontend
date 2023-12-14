export interface IHeaderProps {
    title?: string;
}
import Notification from '/public/assets/images/Notification.png';
import Question from '/public/assets/images/QuestionCircle.png';
import Logo from '/public/assets/images/Logo.png';
import Search from '/public/assets/images/btnSearch.png';
import Cart from '/public/assets/images/btnCart.png';
import TextBox from '@/components/common/TextBox';
import Link from 'next/link';

const Header = (props: IHeaderProps) => {
    const { title } = props;
    return (
        <>
            <div className='d-flex main-colored p-1'>
                <Link className='offset-1 my-auto text-white' href={''}>
                    Seller Center
                </Link>
                <Link
                    className='me-1 me-5 ms-auto  flex items-center text-white'
                    href={''}
                >
                    <img src={Notification.src} /> Notification
                </Link>
                <Link className='me-2 flex items-center text-white' href={'/'}>
                    <img src={Question.src} className='me-1' />
                    <span>Help</span>
                </Link>
                <Link className='btn me-1 text-white' href={'/login'}>
                    Login
                </Link>
                <div className='my-auto h-4 w-[1px] bg-white'></div>
                <Link className='btn me-5 text-white' href={'/signup'}>
                    Sign Up
                </Link>
            </div>

            <div className='flex items-center justify-between p-3'>
                <div className='offset-1'>
                    <Link href={'/'}>
                        <img className='ms-5 ' src={Logo.src} />
                    </Link>
                </div>
                <div className='flex items-center' style={{ width: 600 }}>
                    <TextBox placeholder='Search' className='mb-0'></TextBox>
                    <button type='button' className='btn btn-xxl ml-5'>
                        <img src={Search.src} />
                    </button>
                </div>
                <div className='mr-5'>
                    <button
                        type='button'
                        className='btn position-relative me-5 ms-5 mt-4'
                    >
                        <img src={Cart.src} />
                        <span className='position-absolute start-100 translate-middle badge rounded-pill bg-danger top-0'>
                            +99
                            <span className='visually-hidden'>
                                unread messages
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
