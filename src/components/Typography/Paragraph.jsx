import React from 'react';

const Paragraph = ({ children, className = '' }) => {
  return (
    <p className={`text-base text-gray-700 dark:text-gray-300 leading-relaxed ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
