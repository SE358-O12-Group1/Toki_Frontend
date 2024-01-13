import UserType from './UserType';

export type UserAuthType = Pick<
    UserType,
    '_id' | 'name' | 'email' | 'avatar' | 'role'
>;

type AuthType = {
    user: UserAuthType;
    accessToken: string;
    refreshToken: string;
};

export const initialAuth: AuthType = {
    user: {
        _id: '',
        name: '',
        email: '',
        avatar: '',
        role: ''
    },
    accessToken: '',
    refreshToken: ''
};

export default AuthType;
