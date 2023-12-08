import React from 'react';

const DecorCircle = () => {
    return (
        <div
            style={{
                width: 90,
                height: 90,
                position: 'absolute'
            }}
        >
            <div
                style={{
                    width: 60,
                    height: 60,
                    left: 15,
                    top: 15,
                    position: 'absolute',
                    background: '#00ADB5',
                    borderRadius: 9999
                }}
            />
            <div
                style={{
                    width: 90,
                    height: 90,
                    left: 0,
                    top: 0,
                    position: 'absolute',
                    borderRadius: 9999,
                    border: '5px #00ADB5 solid'
                }}
            />
        </div>
    );
};

export default DecorCircle;
