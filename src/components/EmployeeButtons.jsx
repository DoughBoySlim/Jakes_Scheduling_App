import React, { useState } from 'react'
import CreateRequestOffModal from './CreateRequestOffModal';

function EmployeeButtons() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
        <div className="flex py-3 justify-center gap-4">
            <button className="bg-[#ad5c5c] text-white rounded-sm p-2 w-1/4 border-2 border-black"
                    onClick={() =>setIsModalOpen(true)}>Request Off
            </button>
            <CreateRequestOffModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            <button className="bg-[#ad5c5c] text-white rounded-sm p-2 w-1/4 border-2 border-black">Settings</button>
        </div>

        </>
    )
}

export default EmployeeButtons;