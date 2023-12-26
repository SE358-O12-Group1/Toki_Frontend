import { FocusEventHandler } from 'react';

export interface ITextboxProps {
    value?: string;
    type?: string;
    className?: string;
    id?: string;
    placeholder?: string;
    readonly?: boolean;
    disable?: boolean;
    required?: boolean;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onChange?: FocusEventHandler<HTMLInputElement>;
}

export default function TextBox(props: ITextboxProps) {
    const {
        value,
        type,
        className,
        id,
        placeholder,
        readonly,
        disable,
        required,
        onBlur,
        onChange
    } = props;
    return (
        <>
            <div className={'form-control p-0 ' + className} style={{}}>
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
                    value={value}
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
                    onChange={onChange}
                ></input>
            </div>
        </>
    );
}
