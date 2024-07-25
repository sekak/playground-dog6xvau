import React from 'react';
import Image from 'next/image';

interface ButtonProps {
    type: "button"| "submit";
    variant: string;
    icon?: string;
    content: string;
}

const Button: React.FC<ButtonProps> = ({ type, variant, icon, content}) => {
    return (
        <button type={type} className={`${variant} items-center justify-center`}>
            {icon && <Image src={icon} alt="icon" width={20} height={20} />}
            <label className='bold-16 whitespace-nowrap cursor-pointer'>{content}</label>
        </button>
    );
};

export default Button;