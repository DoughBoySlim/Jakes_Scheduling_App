import { useState, useEffect } from 'react'
import { getShiftData, getUserFullName, getManagers, getCooks} from '../api/calendar.js'

// creating a day list to put in table header
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


export default function MyCalendar() {

    const[managers, setManagers] = useState([]);

    useEffect(() => {
        async function fetchManagers() {
            const names = await getManagers();
            setManagers(names);
        }

        fetchManagers();
    }, []);

    return (
        <>
            <div className='m-8'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='p-2 border'>Manager</th>
                            <th className='p-2 border'>Phone #'s</th>
                            {days.map(day => (
                                <th key={day} className='p-2 border text-center'>{day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {managers.map((manager,idx) => {
                            return (
                                <tr key={idx} className='text-center'>
                                    <td className='p-2 border'>{manager}</td>
                                    <td className='p-2 border'>—</td>
                                    {days.map(day => (
                                        <td key={day} className='p-2 border'>—</td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </>
    )
}
