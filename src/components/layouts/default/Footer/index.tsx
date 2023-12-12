export interface IFooterProps {
    title?: string;
}
import Twitter from "src/app/assets/images/Twitter.png"
import Instagram from "src/app/assets/images/Instagram.png"
import Github from "src/app/assets/images/Github.png"
import Link from "next/link";
const Footer = () => {

    return (
        <>
        
        <div className="flex main-colored p-1">
            <div className='offset-1 mb-3 mt-2'>
                <button type="button" className='btn main-colored text-white' >
                    <img src={Twitter.src}/>
                    </button>
                <button type="button" className='btn main-colored text-white' >
                    <img src={Github.src}/>
                    </button>
                <button type="button" className='btn main-colored text-white' >
                    <img src={Instagram.src}/>
                    </button>
            </div>
                
            <div className='text-left  main-colored offset-1 mb-2 d-flex' >
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
