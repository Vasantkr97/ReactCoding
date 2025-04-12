
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode
}


const Modal = ({isOpen, onClose, title, children}: ModalProps) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
                <button 
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                ✕
                </button>
                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                <div>{children}</div>
            </div>
        </div>
    )
    
}

export default Modal;