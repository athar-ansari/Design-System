import React from 'react';

const H6 = ({ children, className = '' }) => {
  return (
    <h6 className={`text-base font-medium text-gray-700 dark:text-white ${className}`}>
      {children}
    </h6>
  );
};

export default H6;
