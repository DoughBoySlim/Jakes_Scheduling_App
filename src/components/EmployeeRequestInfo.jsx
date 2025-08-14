import { useEffect, useState } from 'react';
import { showAllRequestInfo } from "../api/request.js";
import { format, parseISO } from 'date-fns';

function EmployeeRequestInfo() {

    const [requestInfo, setRequestInfo] = useState(null);

    useEffect(() => {
        async function fetchRequestData() {
            try {
                const data = await showAllRequestInfo();
                setRequestInfo(data);
            } catch (err) {
                console.error("Error loading requests: ", err);
            }
        }

        fetchRequestData();
    }, []);

    if(!requestInfo) {
        return <h1 className='text-center text-2xl font-serif'>No Pending Requests!</h1>
    }
    
    function formatDateToMMDD(dateString) {
        const date = parseISO(dateString)
        return format(new Date(date), 'MM/dd');
    }

    return (
        <> 
            <div className='text-center'>
                <h1 className='text-center text-2xl font-serif'>Request Off Information</h1>
            </div>
            <div className='m-8 overflow-x-auto overflow-y-auto'>
                <table className='w-full border-collapse border border-gray-300'>
                    <thead>
                        <tr>
                            <th className='p-2 border'>Request Number</th>
                            <th className='p-2 border'>Start Day</th>
                            <th className='p-2 border'>End Day</th>
                            <th className='p-2 border'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requestInfo.map((req) => (
                            <tr key={req.id}>
                                <td className="p-2 border text-center">{req.request_id}</td>
                                <td className="p-2 border text-center">{formatDateToMMDD(req.start_date)}</td>
                                <td className="p-2 border text-center">{formatDateToMMDD(req.end_date)}</td>
                                <td className="p-2 border text-center">{req.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EmployeeRequestInfo;