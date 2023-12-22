import {
    getAccessTokenFromLS,
    getRefreshTokenFromLS,
    getUserFromLS
} from '@/utils/auth';
import UserType from './UserType';

export type UserAuthType = Pick<
    UserType,
    '_id' | 'name' | 'email' | 'avatar' | 'role'
> | null;

type AuthType = {
    user: UserAuthType;
    accessToken: string;
    refreshToken: string;
};

export const initialAuth: AuthType = {
    user: null,
    accessToken: '',
    refreshToken: ''
};

export default AuthType;
