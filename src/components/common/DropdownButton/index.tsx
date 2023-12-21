'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa'; // Import the arrow-down icon
export interface IDropdownButtonProps {
    items: string[];
    value?: string;
}

const DropdownButton = (props: IDropdownButtonProps) => {
    const { items, value } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const onChanged = (index: number) => {
        setSelectedValue(items[index]);
        toggleDropdown();
    };

    const closeDropdown = (event: MouseEvent) => {
        if (
            // cái này hoạt động bình thường nên kệ nó đi
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', closeDropdown);
        return () => {
            document.removeEventListener('mousedown', closeDropdown);
        };
    }, []);

    return (
        <div className='dropdown-container' ref={dropdownRef}>
            <button className='dropdown-button ' onClick={toggleDropdown}>
                {selectedValue || 'Variants'}
                <FaAngleDown />
            </button>
            {isOpen && (
                <div className='dropdown-content'>
                    {items.map((e, index) => (
                        <p onClick={() => onChanged(index)}>{e}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropdownButton;
