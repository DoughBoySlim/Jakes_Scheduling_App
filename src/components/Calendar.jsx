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


const locales = {
    'en-US': enUS,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

// Hardcoded Events
const events = [
    {
        title: 'Manager',
        start: new Date(2025, 6, 15, 10, 0),
        end: new Date(2025, 6, 15, 14, 0),
    },
    {
        title: 'Cook',
        start: new Date(2025, 6, 16, 10, 0),
        end: new Date(2025, 6, 16, 14, 0),
    },
];

const minTime = new Date();
minTime.setHours(10,0,0,0);
const maxTime = new Date();
maxTime.setHours(21,0,0,0);

export default function MyCalendar() {

    const[calendarView, setCalendarView] = useState(() =>
        window.innerWidth < 768 ? 'day' : 'week'
    );

    useEffect(() => {
        function handleResize() {
            window.innerWidth < 768 ? setCalendarView('day') : setCalendarView('week');
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className="p-4 m-10">
            <h2 className="text-xl font-semibold mb-4">My Calendar</h2>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
                defaultView={calendarView}
                views={[calendarView]}
                min={minTime}
                max={maxTime}
            />
        </div>
    );
}
