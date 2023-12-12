export interface IHeaderProps {
    title?: string;
}
import Notification from "src/app/assets/images/Notification.png"
import Question from "src/app/assets/images/QuestionCircle.png"
import Logo from "src/app/assets/images/Logo.png"
import Search from "src/app/assets/images/btnSearch.png"
import Cart from "src/app/assets/images/btnCart.png"
import TextBox from '@/components/common/TextBox';

const Header = (props: IHeaderProps) => {
    const { title } = props;
    return (
        <>
            
            <div className='d-flex main-colored p-1' >

                <button type="button" className='btn offset-1 text-white' > Seller Center </button>
                <button type="button" className='btn ms-auto me-5 text-white'> <img src={Notification.src} /> Notification</button>
                <button type="button" className='btn me-5 text-white'> <img src={Question.src} /> Help</button>
                <button type="button" className='btn me-1 text-white'> Login </button>
                
                <button type="button" className='btn me-5 text-white' > Sign Up </button>
            </div>

            <div className="d-flex p-3" >
                <div className="offset-1">
                    <img className="ms-5 " src={Logo.src} />
                </div>
                <div className="position-absolute start-50 translate-middle mt-5 ms-4" style={{width:600}}>
                        <TextBox
                            placeholder='Search'
                        ></TextBox>
                </div>
                <div className="ms-auto me-5">
                    <button type="button" className="btn me-4 mt-3 btn-sm" > <img src={Search.src} /> </button>
                    <button type="button" className="btn ms-5 me-5 mt-4 position-relative"> <img src={Cart.src} />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">+99 
                        <span className="visually-hidden">unread messages
                        </span></span> 
                    </button>
                </div>
                
            </div>
                                
        </>
    );
};

export default Header;
