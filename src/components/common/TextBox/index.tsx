import { FocusEventHandler } from 'react';

export interface ITextboxProps {
    type?: string;
    className?: string;
    id?: string;
    placeholder?: string;
    readonly?: boolean;
    disable?: boolean;
    required?: boolean;
    onBlur?: FocusEventHandler<HTMLInputElement>;
}

export default async function TextBox(props: ITextboxProps) {
    const {
        type,
        className,
        id,
        placeholder,
        readonly,
        disable,
        required,
        onBlur
    } = props;
    return (
        <>
            <div className='form-control mb-3 p-0' style={{}}>
                <div
                    className='inputGroupPrepend'
                    style={{
                        position: 'relative',
                        top: 0,
                        bottom: 0,
                        borderLeft: '4px solid #00ADB5',
                        width: 0
                    }}
                ></div>
                <input
                    required={required}
                    readOnly={readonly}
                    disabled={disable}
                    id={id}
                    style={{
                        borderLeft: '4px solid #00ADB5',
                        borderTop: '0',
                        borderRight: '0',
                        borderBottom: '0',
                        outline: '0px',
                        borderRadius: 0,
                        padding: 12
                    }}
                    type={type || 'text'}
                    className={className + 'form-control full-width-div'}
                    placeholder={placeholder}
                    onBlur={onBlur}
                ></input>
            </div>
        </>
    );
}
