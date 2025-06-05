import React from 'react';

const Checkbox = ({
    label,
    id,
    checked,
    onChange,
    disabled = false,
    className = '',
}) => {
    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                aria-checked={checked}
            />
            {label && (
                <label htmlFor={id} className={`text-sm ${disabled ? 'text-gray-400' : 'text-gray-800 dark:text-gray-200'}`}>
                    {label}
                </label>
            )}
        </div>
    );
};

export default Checkbox;
