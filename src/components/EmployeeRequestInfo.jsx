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
        return <h1>Loading...</h1>
    }
    
    function formatDateToMMDD(dateString) {
        const date = parseISO(dateString)
        return format(new Date(date), 'MM/dd');
    }

    return (
        <>
            {requestInfo.map((req => (
                <div key={req.id}>
                    <p>{formatDateToMMDD(req.start_date)}</p>
                    <p>{formatDateToMMDD(req.end_date)}</p>
                    <p>{req.status}</p>
                </div>
            )))}
        </>
    )
}

export default EmployeeRequestInfo;