import { useState, useEffect } from 'react'
import { getManagers, getCooks, getCashiers, getShiftLeads, getDrivers, useCurrentUser } from '../api/calendar.js'
import { format, startOfWeek, addDays, setWeek } from 'date-fns'

// Days of the week for table headers
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function MyCalendar() {
    const [managers, setManagers] = useState([]);
    const [managerNumbers, setManagerPhoneNumbers] = useState([]);
    const [cooks, setCooks] = useState([]);
    const [cookNumbers, setCookPhoneNumbers] = useState([]);
    const [shiftLeads, setShiftLeads] = useState([]);
    const [shiftLeadNumbers, setShiftLeadPhoneNumbers] = useState([]);
    const [drivers, setDrivers] = useState([]);
    const [driverNumbers, setDriverPhoneNumbers] = useState([]);
    const [cashiers, setCashiers] = useState([]);
    const [cashierNumbers, setCashierPhoneNumbers] = useState([]);
    const currentUser = useCurrentUser();
    const [weekStart, setWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 0}));

    useEffect(() => {
        async function fetchManagers() {
            const { managers, numbers } = await getManagers();
            setManagers(managers || []);
            setManagerPhoneNumbers(numbers || []);
        }
        async function fetchCooks() {
            const { cooks, numbers } = await getCooks();
            setCooks(cooks || []);
            setCookPhoneNumbers(numbers|| []);
        }
        async function fetchShiftLeads() {
            const { shiftLeads, numbers } = await getShiftLeads();
            setShiftLeads(shiftLeads || []);
            setShiftLeadPhoneNumbers(numbers || []);
        }
        async function fetchDrivers() {
            const { drivers, numbers } = await getDrivers();
            setDrivers(drivers || []);
            setDriverPhoneNumbers(numbers || []);
        }
        async function fetchCashiers() {
            const { cashiers, numbers } = await getCashiers();
            setCashiers(cashiers || []);
            setCashierPhoneNumbers(numbers || []);
        }

        fetchManagers();
        fetchCooks();
        fetchShiftLeads();
        fetchDrivers();
        fetchCashiers();
    }, []);


    function printRoles(array, numbers, days, currentUser) {
        return (
            <>
                {array.map((aIndex, idx) => (
                    <tr key={`placeholder-${idx}`} className={aIndex === currentUser ? 'bg-yellow-100 font-semibold text-center' : 'text-center'}>
                        <td className='p-2 border'>{aIndex}</td>
                        <td className='p-2 border'>{numbers[idx]}</td>
                        {days.map(day => (
                            <td key={day} className='p-2 border'>—</td>
                        ))}
                    </tr>
                ))}
            </>
        )
    }

    function nextWeek() {
        setWeekStart(prev => addDays(prev, 7));
    }

    function prevWeek() {
        setWeekStart(prev => addDays(prev, -7));
    }

    return (
        <div className='m-8 overflow-x-auto'>
            <table className='w-full border-collapse border border-gray-300'>
                <thead>
                    <tr>
                        <th className='p-2 border'>Managers</th>
                        <th className='p-2 border'>Phone #</th>
                        {days.map((day,index) => {
                            const date = addDays(weekStart, index);
                            return (
                                <th key={day} className='p-2 border text-center'>
                                    {day} {format(date, 'd')}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>

                    {managers.length > 0 && (
                        <>
                            {printRoles(managers, managerNumbers, days, currentUser)}
                        </>
                    )}

                    {shiftLeads.length > 0 && (
                        <>
                            <tr>
                                <th className='p-2 border'>Shift Leads</th>
                            </tr>
                            {printRoles(shiftLeads, shiftLeadNumbers, days, currentUser)}
                        </>
                    )}

                    {cooks.length > 0 && (
                        <>
                            <tr>
                                <th className='p-2 border'>Cooks</th>
                            </tr>
                            {printRoles(cooks, cookNumbers, days, currentUser)}
                        </>
                    )}


                    {drivers.length > 0 && (
                        <>
                            <tr>
                                <th className='p-2 border'>Drivers</th>
                            </tr>
                            {printRoles(drivers, driverNumbers, days, currentUser)}
                        </>
                    )}

                    {cashiers.length > 0 && (
                        <>
                            <tr>
                                <th className='p-2 border'>Cashiers</th>
                            </tr>
                            {printRoles(cashiers, cashierNumbers, days, currentUser)}
                        </>
                    )}
                </tbody>
            </table>
        </div>
    );
}

