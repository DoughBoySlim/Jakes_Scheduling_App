import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { addRequest } from '../api/request.js'

function CreateRequestOffModal({ isOpen, onClose }) {

    if (!isOpen) return null;

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [formError, setFormError] = useState('');

    async function validateRequest() {
        setFormError('');
        if(!startDate || !endDate) {
            setFormError("Both Start And End Dates Are Required")
            return;
        }
        if(endDate < startDate) {
            setFormError("End Date Cannot Be Before Start Date")
            return;
        }

        try {
            await addRequest(startDate, endDate);
            onClose();
        } catch (err) {
            console.error(err);
            setFormError('Failed To Submit Request. Please Try Again');
        }

    }

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4c4c4c]/50 ">
            <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
                <h1 className='text-2xl text-center p-5'>Request Off Form</h1>
                <h1 className='text-xl'>Start Date</h1>
                <input type='date' className='p-2 border' value={startDate} onChange={e => setStartDate(e.target.value)}/>
                <h1 className='text-xl'>End Date</h1>
                <input type='date' className='p-2 border' value={endDate} onChange={e => setEndDate(e.target.value)}/>
                {formError && <div className='text-red-500 text-center font-display'> {formError}</div>}
                <div className='flex justify-center'>
                    <button className="w-1/2 bg-[#ad5c5c] border-2 border-black mt-5 text-white"
                            onClick={validateRequest}>Submit
                    </button>
                </div>
                <button
                    className="absolute top-2 right-2 text-white bg-[#ad5c5c] rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-700"
                    onClick={onClose}>X
                </button>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}

export default CreateRequestOffModal;
