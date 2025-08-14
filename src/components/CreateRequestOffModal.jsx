import React from 'react';
import ReactDOM from 'react-dom';

function CreateRequestOffModal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4c4c4c]/50 ">
            <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
                <button
                    className="absolute top-2 right-2 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700"
                    onClick={onClose}>X
                </button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}

export default CreateRequestOffModal;
