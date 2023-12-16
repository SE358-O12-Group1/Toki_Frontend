import React from 'react';
import classNames from 'classnames';

interface CircleAvatarProps {
    src: string;
    alt: string;
    size?: number;
    className?: string;
}

const CircleAvatar: React.FC<CircleAvatarProps> = ({
    src,
    alt,
    size,
    className
}) => {
    const avatarClasses = classNames(
        'rounded-full',
        'overflow-hidden',
        'inline-block',
        'object-cover', // Make the image fit cover
        'border-2',
        'border-gray', // Add white outline
        size && `w-${size} h-${size}`, // Customize size dynamically
        className
    );

    return <img src={src} alt={alt} className={avatarClasses} />;
};

export default CircleAvatar;
