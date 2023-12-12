import React from 'react';

interface IDecorCircleProps {
    width?: number | string;
    marginTop?: number;
}

const DecorCircle = (props: IDecorCircleProps) => {
    const { width, marginTop } = props;
    return (
        <div
            style={{
                width: width,
                height: '20px',
                marginTop: marginTop ? `${marginTop}px ` : 0,
                backgroundColor: '#00ADB5',
                borderRadius: '0 999px 999px 0'
            }}
        ></div>
    );
};

export default DecorCircle;
