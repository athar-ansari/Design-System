import React from 'react';

const TextInput = ({
  label,
  id,
  placeholder = '',
  value,
  onChange,
  error = '',
  disabled = false,
  className = '',
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
          {label}
        </label>
      )}
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`
          w-full px-3 py-2 border rounded-md 
          text-gray-900 dark:text-white 
          bg-white dark:bg-gray-800 
          focus:outline-none focus:ring-2 focus:ring-blue-500 
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextInput;
