import { useState, useEffect } from 'react'
import { getShiftData, getUserFullName, getManagers, getCooks, getCashiers, getShiftLeads} from '../api/calendar.js'

// creating a day list to put in table header
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


export default function MyCalendar() {

    const[managers, setManagers] = useState([]);
    const[cooks, setCooks] = useState([]);
    const[shiftLeads, setShiftLeads] = useState([]);
    const[drivers, setDrivers] = useState([]);
    const[cashiers, setCashiers] = useState([]);

    useEffect(() => {
        async function fetchManagers() {
            const managerNames = await getManagers();
            setManagers(managerNames);
        }

        async function fetchCooks() {
            const cookNames = await getCooks();
            setCooks(cookNames);
        }

        async function fetchShiftLeads() {
            const shiftLeadNames = await getShiftLeads();
            setShiftLeads(shiftLeadNames);
        }

        async function fetchDrivers() {
            const driverNames = await getDrivers();
            setDrivers(driverNames);
        }

        async function fetchCashiers() {
            const cashierNames = await getCashiers();
            setCashiers(cashierNames);
        }

        fetchManagers();
        fetchCooks();
        fetchShiftLeads();
        fetchDrivers();
        fetchCashiers();
    }, []);

    return (
        <>
            <div className='m-8'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='p-2 border'>Managers</th>
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
                        <tr>
                            <th className='p-2 border'>Shift Leads</th>
                            {days.map(day => (
                                <td key={day} className='p-2 border'></td>
                            ))}
                            <td className='p-2 border'></td>
                            {shiftLeads.map((shiftlead, idx) => {
                                return (
                                    <tr key={idx} className='text-center'>
                                        <td className='p-2 border'>{shiftlead}</td>
                                        <td className='p-2 border'>-</td>
                                        {days.map(day => (
                                            <td key={day} className='p-2 border'></td>
                                        ))}
                                    </tr>
                                )
                            })}
                        </tr>

                        <th className='p-2 border'>Cooks</th>
                        {days.map(day => (
                            <td key={day} className='p-2 border'></td>
                        ))}
                        <td className='p-2 border'></td>
                        {cooks.map((cook, idx) => {
                            return (
                                <tr key={idx} className='text-center'>
                                    <td className='p-2 border'>{cook}</td>
                                    <td className='p-2 border'>-</td>
                                    {days.map(day => (
                                        <td key={day} className='p-2 border'></td>
                                    ))}
                                </tr>
                            )
                        })}

                        <th className='p-2 border'>Drivers</th>
                        {days.map(day => (
                            <td key={day} className='p-2 border'></td>
                        ))}
                        <td className='p-2 border'></td>
                        {drivers.map((driver, idx) => {
                            return (
                                <tr key={idx} className='text-center'>
                                    <td className='p-2 border'>{driver}</td>
                                    <td className='p-2 border'></td>
                                    {days.map(day => (
                                        <td key={day} className='p-2 border'></td>
                                    ))}
                                </tr>
                            )
                        })}

                        <tr>
                            <th className='p-2 border'>Cashiers</th>
                            {days.map(day => (
                                <td key={day} className='p-2 border'></td>
                            ))}
                            <td className='p-2 border'></td>
                            {cashiers.map((cashier, idx) => {
                                return (
                                    <tr key={idx} className='text-center'>
                                        <td className='p-2 border'>{cashier}</td>
                                        <td className='p-2 border'>-</td>
                                        {days.map(day => (
                                            <td key={day} className='p-2 border'></td>
                                        ))}
                                    </tr>
                                )
                            })}                            
                        </tr>

                    </tbody>
                </table>
            </div>

        </>
    )
}
