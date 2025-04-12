import { useState } from "react";
import Modal from "./components/Modal";


export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <button
            onClick={()=>setIsModalOpen(true)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg"
            >
                Open Modal
            </button>

            <Modal 
              isOpen = {isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Confirm Action"
            >
              <p>Are you sure you want to proceed?</p>
              <div className="mt-4 flex justify-end gap-2">
                <button
                  className="px-4 py-2 rounded-lg bg-gray-300"
                  onClick={() => setIsModalOpen(false)}
                >Cancel</button>
                <button
                  className="px-4 py-2 rounded bg-red-600 text-white"
                  onClick={() => {
                    setIsModalOpen(false);
                  }}
                >Confirm</button>
              </div>
            </Modal>
        </div>
    )
}