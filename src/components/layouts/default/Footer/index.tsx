export interface IFooterProps {
    title?: string;
}

const Footer = (props: IFooterProps) => {
    const { title } = props;
    return (
        <>
            <h1 className='text-danger text-center'>{title || 'Footer'}</h1>
        </>
    );
};

export default Footer;
