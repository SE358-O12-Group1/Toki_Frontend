import Notification from '/public/assets/images/Notification.png';
import Question from '/public/assets/images/QuestionCircle.png';
import Logo from '/public/assets/images/Logo.png';
import Search from '/public/assets/images/btnSearch.png';
import TextBox from '@/components/common/TextBox';
import Link from 'next/link';
import { mockUser } from '@/components/productPage/mockData';
import CircleAvatar from '@/components/landing/components/CircleAvatar';
import { avatarPlaceholder } from '@/constants/common';

const CartHeader = () => {
    const user = mockUser;
    const isSeller = true;
    return (
        <>
            <div className='d-flex main-colored p-1'>
                {isSeller && (
                    <Link className='offset-1 my-auto text-white' href={''}>
                        Seller Center
                    </Link>
                )}
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
                <Link className='me-5 flex items-center text-white' href={'/'}>
                    <CircleAvatar
                        className='ml-5 mr-3'
                        src={user.imageUrl ?? avatarPlaceholder}
                        alt={user.name}
                        size={8}
                    ></CircleAvatar>
                    <span>{user.name}</span>
                </Link>
            </div>

            <div className='flex items-center justify-between px-5 py-3'>
                <div className='offset-1 mr-10'>
                    <Link href={'/'} className='flex items-end'>
                        <img className='ms-5 ' src={Logo.src} />
                        <span className='text-main text-3xl font-semibold'>
                            CART
                        </span>
                    </Link>
                </div>
                <div className='mx-10 flex w-[40%] items-center'>
                    <TextBox placeholder='Search' className='mb-0'></TextBox>
                    <button type='button' className='btn btn-xxl ml-5'>
                        <img src={Search.src} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartHeader;
