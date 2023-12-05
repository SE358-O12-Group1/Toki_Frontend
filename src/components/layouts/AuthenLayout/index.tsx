import Head from 'next/head';
import { ReactNode } from 'react';
import DecorCircle from './components/DecorCircle';
import logo from 'src/assets/images/web_logo.jpg';

interface IAuthenticationLayoutProps {
    title?: string;
    children?: ReactNode;
}

const AuthenticationLayout = (props: IAuthenticationLayoutProps) => {
    const { children } = props;
    const decorSpacing = 60;
    return (
        <>
            <div className='p-5'>
                <div className='row'>
                    <div className='col'>
                        <div
                            className='row px-5'
                            style={{
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
                        <div
                            className='mt-4'
                            style={{
                                position: 'absolute',
                                left: 0
                            }}
                        >
                            <div
                                style={{
                                    width: 600,
                                    height: '20px',
                                    left: 0,
                                    top: 0,
                                    position: 'absolute',
                                    backgroundColor: '#00ADB5',
                                    borderRadius: '0 999px 999px 0'
                                }}
                            ></div>
                            <div
                                style={{
                                    width: 640,
                                    height: '20px',
                                    left: 0,
                                    top: decorSpacing,
                                    position: 'absolute',
                                    backgroundColor: '#00ADB5',
                                    borderRadius: '0 999px 999px 0'
                                }}
                            ></div>
                            <div
                                style={{
                                    width: 680,
                                    height: '20px',
                                    left: 0,
                                    top: decorSpacing * 2,
                                    position: 'absolute',
                                    backgroundColor: '#00ADB5',
                                    borderRadius: '0 999px 999px 0'
                                }}
                            ></div>
                            <div
                                style={{
                                    width: 720,
                                    height: '20px',
                                    left: 0,
                                    top: decorSpacing * 3,
                                    position: 'absolute',
                                    backgroundColor: '#00ADB5',
                                    borderRadius: '0 999px 999px 0'
                                }}
                            ></div>
                            <div
                                style={{
                                    width: 760,
                                    height: '20px',
                                    left: 0,
                                    top: decorSpacing * 4,
                                    position: 'absolute',
                                    backgroundColor: '#00ADB5',
                                    borderRadius: '0 999px 999px 0'
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className='col main-colored'>
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthenticationLayout;
