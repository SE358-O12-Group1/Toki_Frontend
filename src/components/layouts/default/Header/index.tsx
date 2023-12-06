export interface IHeaderProps {
    title?: string;
}
import Link from "next/link";
import { IoIosNotifications } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";


const Header = (props: IHeaderProps) => {
    const { title } = props;
    return (
        <>
            
                <div className='d-flex main-colored p-1 text-black'>

                <button type="button" className='btn ms-5 text-white ' >Seller Center</button>
                <button type="button" className='btn ms-auto me-5 text-white'><IoIosNotifications/> Notification</button>
                <button type="button" className='btn me-5 text-white'><IoIosHelpCircleOutline/> Help</button>
                <button type="button" className='btn me-1 text-white'> Login </button>
                
                <button type="button" className='btn me-5 text-white' > Sign Up </button>
            </div>

            <div className="d-flex " >
                <img src="src/app/assets/images/Logo.png" alt="abc" />
                <div className="text-danger main-colored position-absolute start-50 translate-middle mt-3">
                    AAAAAAAAAAAAAAAAAAAAAAAAAAAA
                </div>
                <div className="ms-auto me-5 p-3">
                    <button type="button" className="btn  me-5  "> <IoIosSearch /> </button>
                    <button type="button" className="btn me-5 position-relative"> <AiOutlineShoppingCart />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+99 
                        <span className="visually-hidden">unread messages
                        </span></span> 
                    </button>
                </div>
                
            </div>
                                
        </>
    );
};

export default Header;
