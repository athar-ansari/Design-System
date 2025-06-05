import React, { useState } from 'react';
import Toast from '../Toast/Toast';
import Modal from '../Modal/Modal';

export default {
    title: 'Feedback',
};

export const ToastExamples = () => {
    const [visible, setVisible] = useState(true);

    return (
        <div>
            <button
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={() => setVisible(true)}
            >
                Show Toast
            </button>
            {visible && (
                <Toast
                    type="success"
                    message="Action completed successfully!"
                    onClose={() => setVisible(false)}
                />
            )}
        </div>
    );
};

export const ModalExample = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                className="px-4 py-2 bg-purple-600 text-white rounded"
                onClick={() => setOpen(true)}
            >
                Open Modal
            </button>

            <Modal
                isOpen={open}
                title="Delete Confirmation"
                message="Are you sure you want to delete this item?"
                onConfirm={() => {
                    setOpen(false);
                    alert('Confirmed!');
                }}
                onCancel={() => setOpen(false)}
            />
        </div>
    );
};
