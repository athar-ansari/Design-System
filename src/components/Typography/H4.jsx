import React from 'react';

const H4 = ({ children, className = '' }) => {
  return (
    <h4 className={`text-xl font-medium text-gray-800 dark:text-white ${className}`}>
      {children}
    </h4>
  );
};

export default H4;
