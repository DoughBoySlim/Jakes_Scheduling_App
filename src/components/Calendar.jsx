import { useState, useEffect } from 'react'
import { getManagers, getCooks, getCashiers, getShiftLeads, getDrivers } from '../api/calendar.js'

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

    return (
        <div className='m-8'>
            <table className='w-full border-collapse border border-gray-300'>
                <thead>
                    <tr>
                        <th className='p-2 border'>Managers</th>
                        <th className='p-2 border'>Phone #</th>
                        {days.map(day => (
                            <th key={day} className='p-2 border text-center'>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>

                    {managers.length > 0 && (
                        <>
                            {managers.map((manager, idx) => (
                                <tr key={`manager-${idx}`} className='text-center'>
                                    <td className='p-2 border'>{manager}</td>
                                    <td className='p-2 border'>{managerNumbers[idx]}</td>
                                    {days.map(day => (
                                        <td key={day} className='p-2 border'>—</td>
                                    ))}
                                </tr>
                            ))}
                        </>
                    )}

                    {shiftLeads.length > 0 && (
                        <>
                            <tr>
                                <th className='p-2 border'>Shift Leads</th>
                            </tr>
                            {shiftLeads.map((shiftLead, idx) => (
                                <tr key={`shiftLead-${idx}`} className='text-center'>
                                    <td className='p-2 border'>{shiftLead}</td>
                                    <td className='p-2 border'>{shiftLeadNumbers[idx]}</td>
                                    {days.map(day => (
                                        <td key={day} className='p-2 border'></td>
                                    ))}
                                </tr>
                            ))}
                        </>
                    )}

                    {cooks.length > 0 && (
                        <>
                            <tr>
                                <th className='p-2 border'>Cooks</th>
                            </tr>
                            {cooks.map((cook, idx) => (
                                <tr key={`cook-${idx}`} className='text-center'>
                                    <td className='p-2 border'>{cook}</td>
                                    <td className='p-2 border'>{cookNumbers[idx]}</td>
                                    {days.map(day => (
                                        <td key={day} className='p-2 border'></td>
                                    ))}
                                </tr>
                            ))}
                        </>
                    )}


                    {drivers.length > 0 && (
                        <>
                            <tr>
                                <th className='p-2 border'>Drivers</th>
                            </tr>
                            {drivers.map((driver, idx) => (
                                <tr key={`driver-${idx}`} className='text-center'>
                                    <td className='p-2 border text-left'>{driver}</td>
                                    <td className='p-2 border'>{driverNumbers[idx]}</td>
                                    {days.map(day => (
                                        <td key={day} className='p-2 border'></td>
                                    ))}
                                </tr>
                            ))}
                        </>
                    )}

                    {cashiers.length > 0 && (
                        <>
                            <tr>
                                <th className='p-2 border'>Cashiers</th>
                            </tr>
                            {cashiers.map((cashier, idx) => (
                                <tr key={`cashier-${idx}`} className='text-center'>
                                    <td className='p-2 border'>{cashier}</td>
                                    <td className='p-2 border'>{cashierNumbers[idx]}</td>
                                    {days.map(day => (
                                        <td key={day} className='p-2 border'></td>
                                    ))}
                                </tr>
                            ))}
                        </>
                    )}
                </tbody>
            </table>
        </div>
    );
}

