import { ReactNode } from 'react';
import DecorCircle from '../DecorCircle';
import logo from '/public/assets/images/Logo.png';
import Image from 'next/image';
import DecorLine from '../DecorLine';

interface IAuthenticationLayoutProps {
    title?: string;
    children?: ReactNode;
}

const AuthenticationLayout = (props: IAuthenticationLayoutProps) => {
    const { title, children } = props;
    const decorSpacing = 40;
    return (
        <>
            <div className='bg-light container-fluid h-full pl-0 pt-5'>
                <div className='row '>
                    <div className='col px-0'>
                        <div className='row justify-content-start mb-auto pl-5 pr-10'>
                            <div className='col'>
                                <DecorCircle></DecorCircle>
                            </div>
                            <div className='col mt-5 pt-2'>
                                <DecorCircle></DecorCircle>
                            </div>
                            <div className='col'>
                                <DecorCircle></DecorCircle>
                            </div>
                            <div className='col mt-5 pt-2'>
                                <DecorCircle></DecorCircle>
                            </div>
                            <div className='col'>
                                <DecorCircle></DecorCircle>
                            </div>
                        </div>
                        {/* <div className='py-4'></div> */}
                        <div className='m-10 py-9'>
                            <img
                                className='img-fluid'
                                src={logo.src}
                                width={'40%'}
                            />
                        </div>
                        {/* <div className='py-4'></div> */}
                        <div className='mt-auto'>
                            <DecorLine width={'60%'} marginTop={decorSpacing} />
                            <DecorLine width={'66%'} marginTop={decorSpacing} />
                            <DecorLine width={'72%'} marginTop={decorSpacing} />
                            <DecorLine width={'78%'} marginTop={decorSpacing} />
                            <DecorLine width={'84%'} marginTop={decorSpacing} />
                        </div>
                    </div>
                    <div className='col-sm py-auto px-0'>
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthenticationLayout;
