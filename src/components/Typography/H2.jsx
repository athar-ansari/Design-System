import React from 'react';

const H2 = ({ children, className = '' }) => {
  return (
    <h2 className={`text-3xl font-semibold leading-snug text-gray-900 dark:text-white ${className}`}>
      {children}
    </h2>
  );
};

export default H2;
