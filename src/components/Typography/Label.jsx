import React from 'react';

const Label = ({ children, htmlFor, className = '' }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-800 dark:text-gray-200 ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
