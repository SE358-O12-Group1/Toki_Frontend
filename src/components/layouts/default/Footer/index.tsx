export interface IFooterProps {
    title?: string;
}
import { IoLogoTwitter } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";
const Footer = () => {

    return (
        <>
        <div className="flex main-colored p-1">
            <div className='ms-5 mb-2 mt-2 size-1em'>
                {/* <MDBIcon fab icon="twitter" /> */}
                <IoLogoTwitter />
                <IoLogoGithub />
                <PiInstagramLogoFill />
            </div>
                
            <div className='text-left  main-colored ms-5 mb-2 d-flex' >
            © 2023 TOKI. All Rights Reserved. 
            <div> <Link href='/' className="ms-2 me-1 text-white"> Terms of Service </Link></div>
             | 
            <div><Link href='/' className="ms-1 text-white"> Privacy Policy </Link></div>

            </div>
        </div>   
        </>
    );
};

export default Footer;
