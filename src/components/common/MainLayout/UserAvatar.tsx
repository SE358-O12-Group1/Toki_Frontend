/* eslint-disable @next/next/no-img-element */
import { UserAuthType } from '@/types/AuthType';
import Popover from '../Popover';
import authApi from '@/apis/auth.api';
import { useMutation } from 'react-query';
import { useAppDispatch } from '@/redux/hook';
import { resetCart } from '@/redux/slices/cart.slice';
import { logout } from '@/redux/slices/auth.slice';
import { clearProfile } from '@/redux/slices/user.slice';
import { usePathname, useRouter } from 'next/navigation';

export interface IUserDropdownProps {
    user: UserAuthType;
}

export default function UserDropdown({ user }: IUserDropdownProps) {
    const pathname = usePathname();

    const dispatch = useAppDispatch();

    const router = useRouter();

    const { mutate: logoutMutation } = useMutation({
        mutationFn: authApi.logout,
        onSuccess: () => {
            dispatch(resetCart());
            dispatch(clearProfile());
            dispatch(logout());
            localStorage.clear();
            router.push('/');
        }
    });

    const handleLogout = () => {
        logoutMutation();
    };

    return (
        <Popover
            className='ml-6 flex cursor-pointer items-center py-1 hover:text-white/70'
            renderPopover={
                <div className='border-grey-200 relative rounded-md border bg-white shadow-md'>
                    <div className='flex flex-col px-3 py-2'>
                        <a
                            href={'/user/profile'}
                            className='text-no-decor block bg-white px-3 py-2 text-left hover:bg-slate-100 hover:text-cyan-500'
                        >
                            {'Profile'}
                        </a>
                        <a
                            href={'/user/history'}
                            className='text-no-decor block bg-white px-3 py-2 text-left hover:bg-slate-100 hover:text-cyan-500'
                        >
                            {'Purchase history'}
                        </a>
                        <button
                            onClick={handleLogout}
                            className='block bg-white px-3 py-2 text-left hover:bg-slate-100 hover:text-cyan-500'
                        >
                            {'Log out'}
                        </button>
                    </div>
                </div>
            }
        >
            <a
                href={'/user/profile'}
                className='overflow flex items-center text-white'
            >
                <div className='mr-2 h-6 w-6 flex-shrink-0'>
                    <img
                        src={
                            user?.avatar ||
                            'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg'
                        }
                        alt='avatar'
                        className='white h-full w-full rounded-full object-cover'
                    />
                </div>
                <div
                    className={
                        pathname.includes('/seller') ? 'text-cyan-500' : ''
                    }
                >
                    {user.name}
                </div>
            </a>
        </Popover>
    );
}
