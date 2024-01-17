import classNames from 'classnames';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import UserType from '@/types/UserType';
import { UserAuthType } from '@/types/AuthType';
import Popover from '../Popover';
// import { useMutation } from 'react-query/types/react/useMutation';
import authApi from '@/apis/auth.api';

export interface IUserDropdownProps {
    user: UserAuthType;
}

export default function UserDropdown({ user }: IUserDropdownProps) {
    // const logoutMutation = useMutation({
    // TODO
    // mutationFn: authApi.logout,
    // onSuccess: () => {
    //     setIsAuthenticated(false);
    //     setProfile(null);
    //     queryClient.removeQueries({ queryKey: ['purchases', { status: purchasesStatus.inCart }] });
    // }
    // });

    const handleLogout = () => {
        // logoutMutation.mutate();
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
                className='flex items-center overflow-hidden text-white'
            >
                <div className='mr-2 h-6 w-6 flex-shrink-0'>
                    <img
                        src={user?.avatar}
                        alt='avatar'
                        className='white h-full w-full rounded-full object-cover'
                    />
                </div>
                <div>{user?.name}</div>
            </a>
        </Popover>
    );
}
