import React from 'react';

const Button = ({
label = 'Click Me',
variant='error', // primary | outlined | error
className,
getClicked,
...props
}) => {

    function getClasses(variant) {
        switch (variant) {
            case 'primary':
                return 'bg-blue-600 text-white hover:bg-blue-600';
                break;
            case 'outlined':
                return 'border border-gray-300 text-black hover:bg-gray-50'
                break;
            case 'error':
                return 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white';
                break;
            default:
                return;

        }
    }

    function handleClick() {
        getClicked('getting the click from the parent');
    }

    return (
        <button onClick={handleClick} className={`${className} ${getClasses(variant)} px-4 py-3 rounded-md text-[1rem] font-medium cursor-pointer transition-all duration-200`}>{label}</button>
    );
};

export default Button;

