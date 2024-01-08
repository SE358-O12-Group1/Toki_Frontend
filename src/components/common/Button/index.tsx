import { MouseEventHandler, ReactNode } from 'react';

export interface ITextboxProps {
    type?: string;
    className?: string;
    id?: string;
    placeholder?: string;
    disable?: boolean;
    children?: ReactNode;
    backgroundColor?: string;
    textColor?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
    type,
    className,
    id,
    placeholder,
    disable,
    children,
    backgroundColor,
    textColor,
    onClick
}: ITextboxProps) {
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
                    borderRadius: 12,
                    padding: 12,
                    color: textColor || '#FFFFFF'
                }}
                className={
                    className + ' form-control flex items-center justify-center'
                }
                placeholder={placeholder}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    );
}
