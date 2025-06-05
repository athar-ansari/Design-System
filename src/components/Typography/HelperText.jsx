import React from 'react';

const HelperText = ({ children, className = '' }) => {
  return (
    <p className={`text-sm text-gray-500 mt-1 dark:text-gray-400 ${className}`}>
      {children}
    </p>
  );
};

export default HelperText;
