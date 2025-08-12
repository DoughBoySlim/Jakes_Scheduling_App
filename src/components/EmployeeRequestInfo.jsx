import { useEffect, useState } from 'react';
import { showAllRequestInfo } from "../api/request.js";

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
    
    function changeDateLayout() {
        console.log(requestInfo);
    }

    return (
        <>
            {requestInfo.map((req => (
                <div key={req.id}>
                    <p>{req.start_date}</p>
                    <p>{req.end_date}</p>
                    <p>{req.status}</p>
                </div>
            )))}
        </>
    )
}

export default EmployeeRequestInfo;