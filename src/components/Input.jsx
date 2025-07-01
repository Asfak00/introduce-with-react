import React from 'react';

const Input = ({
    variant='primary', // primary | secondary | error
    className,
    type = 'text',
    placeholder = 'Enter your name',
    onChange,
               }) => {

    function getClasses(variant) {
        switch (variant) {
            case 'primary':
                return 'border border-blue-500 focus:outline-blue-500';
                break;
            case 'secondary':
                return 'border border-gray-300 focus:outline-gray-300';
                break;
            case 'error':
                return 'border border-red-600 text-red-600 focus:outline-red-600';
                break;
            default:
                return;

        }
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className={`${className} ${getClasses(variant)} px-4 py-3 transition-all rounded-xl duration-200`}
        />
    );
};

export default Input;