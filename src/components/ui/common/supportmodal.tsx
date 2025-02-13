import React from "react";

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
    return (
        // Fondo semitransparente
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">

            <div
                className="relative bg-red-50 rounded-lg p-6 w-full max-w-4xl max-h-[90vh] mx-4 overflow-y-auto"
            >
                {/* Botón de cierre */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-gray-200 rounded-full px-2 py-1"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;