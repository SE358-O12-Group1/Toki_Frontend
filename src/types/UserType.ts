type UserType = {
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    avatar: string;
    status: string;
    verified: boolean;
    role: string;
};

export type ProfileType = Pick<
    UserType,
    'name' | 'email' | 'phone' | 'address' | 'avatar'
>;

export const initialUser = {
    _id: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    avatar: '',
    status: '',
    verified: false,
    role: ''
} as UserType;

export default UserType;
