import Button from '@/components/common/Button';
import TextBox from '@/components/common/TextBox';
import { FormEventHandler, useState } from 'react';

export default async function SignupForm() {
    const [username, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    let handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    phone: phone,
                    email: email,
                    password: password
                })
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setUserName('');
                setPhone('');
                setEmail('');
                setPassword('');
                setMessage('User created successfully');
            } else {
                setMessage('Some error occured');
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <div className='mx-5 pe-5'>
                <div className='me-5 pe-5'>
                    <form
                        className='needs-validation me-5 pe-5'
                        needs-validation='true'
                    >
                        <h2
                            className='my-5 text-center'
                            style={{
                                color: '#00ADB5',
                                fontWeight: 700
                            }}
                        >
                            SIGN UP
                        </h2>
                        <div>
                            <TextBox required placeholder='User name'></TextBox>
                            <div className='valid-feedback'>Looks good!</div>
                        </div>
                        <TextBox
                            required
                            placeholder='Email'
                            type='email'
                        ></TextBox>
                        <TextBox
                            required
                            placeholder='Phone number'
                            type='number'
                        ></TextBox>
                        <TextBox
                            required
                            placeholder='Password'
                            type='password'
                        ></TextBox>
                        <TextBox
                            required
                            placeholder='Confirm password'
                            type='password'
                        ></TextBox>

                        <div className='col-12 mt-5 text-center'>
                            <Button className='btn btn-primary' type='submit'>
                                Sign up
                            </Button>
                        </div>
                        <div className='row align-items-md-center mt-5'>
                            <div
                                className='col'
                                style={{
                                    width: 200,
                                    height: 0,
                                    border: '1px #D2D1D1 solid'
                                }}
                            ></div>
                            <div
                                className='col-md-auto text-center'
                                style={{
                                    color: '#D2D1D1',
                                    wordWrap: 'break-word'
                                }}
                            >
                                OR
                            </div>
                            <div
                                className='col'
                                style={{
                                    width: 200,
                                    height: 0,
                                    border: '1px #D2D1D1 solid'
                                }}
                            ></div>
                        </div>
                        <div
                            className='row col-md-auto align-items-md-center mx-auto my-5 p-2 text-center'
                            style={{
                                width: 180,
                                border: '1px #D2D1D1 solid',
                                borderRadius: 4
                            }}
                        >
                            <img
                                className='col'
                                style={{
                                    width: 40
                                }}
                                src='https://www.deliverlogic.com/wp-content/uploads/2021/04/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'
                            />
                            <div
                                className='col'
                                style={{
                                    color: 'black'
                                }}
                            >
                                Google
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
