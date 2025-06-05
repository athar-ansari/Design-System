import React from 'react';

const H5 = ({ children, className = '' }) => {
  return (
    <h5 className={`text-lg font-medium text-gray-700 dark:text-white ${className}`}>
      {children}
    </h5>
  );
};

export default H5;
