import { MouseEventHandler, ReactNode } from 'react';

export interface ITextboxProps {
    type?: string;
    className?: string;
    id?: string;
    placeholder?: string;
    disable?: boolean;
    required?: boolean;
    children?: ReactNode;
    backgroundColor?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: ITextboxProps) {
    const {
        className,
        id,
        placeholder,
        disable,
        children,
        backgroundColor,
        onClick
    } = props;
    return (
        <>
            <button
                disabled={disable}
                id={id}
                style={{
                    backgroundColor: !disable
                        ? backgroundColor || '#00ADB5'
                        : '#BDBDBD',
                    outline: '0px',
                    borderRadius: 60,
                    padding: 12,
                    color: '#FFFFFF'
                }}
                className={
                    className + 'form-control flex items-center justify-center'
                }
                placeholder={placeholder}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    );
}
