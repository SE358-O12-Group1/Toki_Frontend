export interface IHeaderProps {
    title?: string;
}
import Notification from '/public/assets/images/Notification.png';
import Question from '/public/assets/images/QuestionCircle.png';
import Logo from '/public/assets/images/Logo.png';
import Search from '/public/assets/images/btnSearch.png';
import Cart from '/public/assets/images/btnCart.png';
import TextBox from '@/components/common/TextBox';

const Header = (props: IHeaderProps) => {
    const { title } = props;
    return (
        <>
            <div className='d-flex main-colored p-1'>
                <button type='button' className='btn offset-1 text-white'>
                    {' '}
                    Seller Center{' '}
                </button>
                <button type='button' className='btn me-5 ms-auto text-white'>
                    {' '}
                    <img src={Notification.src} /> Notification
                </button>
                <button type='button' className='btn me-5 text-white'>
                    {' '}
                    <img src={Question.src} /> Help
                </button>
                <button type='button' className='btn me-1 text-white'>
                    {' '}
                    Login{' '}
                </button>

                <button type='button' className='btn me-5 text-white'>
                    {' '}
                    Sign Up{' '}
                </button>
            </div>

            <div className='d-flex p-3'>
                <div className='offset-1'>
                    <img className='ms-5 ' src={Logo.src} />
                </div>
                <div
                    className='position-absolute start-50 translate-middle ms-4 mt-5'
                    style={{ width: 600 }}
                >
                    <TextBox placeholder='Search'></TextBox>
                </div>
                <div className='me-5 ms-auto'>
                    <button type='button' className='btn btn-sm me-4 mt-3'>
                        {' '}
                        <img src={Search.src} />{' '}
                    </button>
                    <button
                        type='button'
                        className='btn position-relative me-5 ms-5 mt-4'
                    >
                        {' '}
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
