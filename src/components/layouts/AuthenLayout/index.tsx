import Head from 'next/head';
import { ReactNode } from 'react';
import DecorCircle from './components/DecorCircle';
import logo from 'src/assets/images/Logo.png';

interface IAuthenticationLayoutProps {
    title?: string;
    children?: ReactNode;
}

const AuthenticationLayout = (props: IAuthenticationLayoutProps) => {
    const { title, children } = props;
    const decorSpacing = 40;
    return (
        <>
            <Head>
                <title>{title || 'HomeRoom'}</title>
                <link rel='icon' href='/favicon_black.png' />
            </Head>
            <div className='bg-light full-width-div pt-5'>
                <div className='row'>
                    <div className='col'>
                        <div
                            className='row'
                            style={{
                                marginRight: 280,
                                marginLeft: 40,
                                marginBottom: 200
                            }}
                        >
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
                        <div
                            style={{
                                margin: 120
                            }}
                        >
                            <img
                                src={logo.src}
                                style={{
                                    width: 480
                                }}
                            />
                        </div>
                        <div>
                            <div
                                style={{
                                    width: 600,
                                    height: '20px',
                                    marginTop: `${decorSpacing}px `,
                                    backgroundColor: '#00ADB5',
                                    borderRadius: '0 999px 999px 0'
                                }}
                            ></div>
                            <div
                                style={{
                                    width: 640,
                                    height: '20px',
                                    marginTop: `${decorSpacing}px `,
                                    backgroundColor: '#00ADB5',
                                    borderRadius: '0 999px 999px 0'
                                }}
                            ></div>
                            <div
                                style={{
                                    width: 680,
                                    height: '20px',
                                    marginTop: `${decorSpacing}px `,
                                    backgroundColor: '#00ADB5',
                                    borderRadius: '0 999px 999px 0'
                                }}
                            ></div>
                            <div
                                style={{
                                    width: 720,
                                    height: '20px',
                                    marginTop: `${decorSpacing}px `,
                                    backgroundColor: '#00ADB5',
                                    borderRadius: '0 999px 999px 0'
                                }}
                            ></div>
                            <div
                                style={{
                                    width: 760,
                                    height: '20px',
                                    marginTop: `${decorSpacing}px `,
                                    backgroundColor: '#00ADB5',
                                    borderRadius: '0 999px 999px 0'
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className='col'>
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthenticationLayout;
