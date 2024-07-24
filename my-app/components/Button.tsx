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
            <Image src={icon ? icon : ""} alt="icon" width={20} height={20} />
            <span>{content}</span>
        </button>
    );
};

export default Button;