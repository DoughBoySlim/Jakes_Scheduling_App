import React from 'react'
import { useState, useEffect } from 'react'
import supabase from '../config/supabaseClient'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay, startOfDay, differenceInCalendarDays } from 'date-fns'
import { enUS } from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'

// Supabase Connection To DB

// Getting shift data to put into events
async function getShiftData() {
    const { data, error } = await supabase
    .from('shifts')
    .select(
        'employee_id',
        'shift_date',
        'start_time',
        'end_time',
        'employee_type'
    ) 

    return { data, error };
}


// Getting A User's Name to print into the Calendar for others to see:

async function getUserFullName(id) {
    const { data, error } = await supabase
    .from('users')
    .select('full_name')
    .eq('employee_id', id)
    .single();

    return { data, error };
}

// Getting list of Managers to print onto Table

async function getManagers() {
    const { data, error } = await supabase
    .from('users')
    .select('full_name')
    .eq('position', 'Manager')

    if(error) {
        console.log(error.message);
        return [];
    }
    else {
        const managers = data.map(user => user.full_name);
        return managers;
    }
}

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
