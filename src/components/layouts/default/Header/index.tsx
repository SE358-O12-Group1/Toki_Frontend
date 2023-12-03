export interface IHeaderProps {
    title?: string;
}

const Header = (props: IHeaderProps) => {
    const { title } = props;
    return (
        <>
            <h1 className='text-danger text-center'>{title || 'Header'}</h1>
        </>
    );
};

export default Header;
