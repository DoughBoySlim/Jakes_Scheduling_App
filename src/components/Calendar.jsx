import React from 'react'
import supabase from '../config/supabaseClient'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay, startOfDay } from 'date-fns'
import { enUS } from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'

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

const events = [
    {
        title: 'Manager',
        start: new Date(2025, 6, 15, 10, 0),
        end: new Date(2025, 6, 15, 14, 0),
    },
];

const minTime = new Date();
minTime.setHours(10,0,0,0);
const maxTime = new Date();
maxTime.setHours(21,0,0,0);

export default function MyCalendar() {
    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">My Calendar</h2>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600 }}
                defaultView="week"
                views={['week']}
                min={minTime}
                max={maxTime}
            />
        </div>
    );
}
