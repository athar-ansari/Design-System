import React from 'react';

const Caption = ({ children, className = '' }) => {
  return (
    <span className={`text-xs text-gray-500 dark:text-gray-400 ${className}`}>
      {children}
    </span>
  );
};

export default Caption;
