import React from 'react';

const H1 = ({ children, className = '' }) => {
  return (
    <h1 className={`text-4xl font-bold leading-tight text-gray-900 dark:text-white ${className}`}>
      {children}
    </h1>
  );
};

export default H1;
