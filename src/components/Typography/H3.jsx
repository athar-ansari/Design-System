import React from 'react';

const H3 = ({ children, className = '' }) => {
  return (
    <h3 className={`text-2xl font-semibold text-gray-800 dark:text-white ${className}`}>
      {children}
    </h3>
  );
};

export default H3;
