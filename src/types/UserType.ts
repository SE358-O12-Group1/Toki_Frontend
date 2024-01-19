type UserType = {
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    avatar: string;
    status: number;
    verified: boolean;
    role: number;
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
    status: 1,
    verified: false,
    role: 2
} as UserType;

export default UserType;
