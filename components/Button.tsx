import React from "react";

interface ButtonProps {
    title:string;
    styles?: string;
}

const Button: React.FC<ButtonProps> = ({ title, styles}) => {
    return (
        <button className={`text-white bg-yellow-500 px-4 py-2 ${styles}`}>
            {title}
        </button>
    )
}
export default Button;