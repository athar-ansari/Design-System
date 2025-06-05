import React, { useEffect } from 'react';

const toastStyles = {
    success: 'bg-green-100 text-green-800 border-green-400',
    error: 'bg-red-100 text-red-800 border-red-400',
    info: 'bg-blue-100 text-blue-800 border-blue-400',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-400',
};

const Toast = ({ type = 'info', message = '', duration = 3000, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose?.();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div
            role="alert"
            className={`fixed bottom-4 right-4 z-50 px-4 py-3 border rounded shadow-lg w-auto max-w-xs ${toastStyles[type]}`}
        >
            <p>{message}</p>
        </div>
    );
};

export default Toast;
