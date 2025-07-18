import supabase from "../config/supabaseClient";
import { useEffect, useState } from 'react';

// Supabase Connection To DB

// Getting shift data to put into events
export async function getShiftData() {
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


export  function useCurrentUser() {

    const[currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const { data: { user }, error } = await supabase.auth.getUser();
            if(!error) {
                const { data: nameData, error: nameError } = await supabase
                .from('users')
                .select('full_name')
                .eq('email', user.email)
                .single()

                if(nameError) {
                    console.error('Error Fetching Name: ', nameError);
                    setCurrentUser(null);
                } else {
                    setCurrentUser(nameData.full_name);
                }
            }
            else console.error(error)
        };
    
        fetchUser();
    }, []);
    return currentUser;
}

// Getting list of Managers to print onto Table

export async function getManagers() {
    const { data, error } = await supabase
    .from('users')
    .select('full_name, phone_number')
    .eq('position', 'Manager')

    if(error) {
        console.log(error.message);
        return {
            manager: [],
            numbers: []
        };
    }
    else {
        const managers = data.map(user => user.full_name);
        const numbers = data.map(user => user.phone_number);
        return {
            managers,
            numbers
        };
    }
}

// Getting list of Shift Leads to print onto Table

export async function getShiftLeads() {
    const { data, error } = await supabase
    .from('users')
    .select('full_name, phone_number')
    .eq('position', 'Shift Lead')

    if(error) {
        console.log(error.message);
        return {
            shiftLeads: [],
            numbers: []
        };
    }
    else {
        const shiftLeads = data.map(user => user.full_name);
        const numbers = data.map(user => user.phone_number);
        return {
            shiftLeads,
            numbers
        };
    }
}

// Getting list of Cooks to print onto Table

export async function getCooks() {
    const { data, error } = await supabase
    .from('users')
    .select('full_name, phone_number')
    .eq('position', 'Cook')

    if(error) {
        console.log(error.message);
        return {
            cooks: [],
            numbers: []
        };
    }
    else {
        const cooks = data.map(user => user.full_name);
        const numbers = data.map(user => user.phone_number);
        return {
            cooks,
            numbers
        };
    }
}

// Getting list of Drivers to print onto Table

export async function getDrivers() {
    const { data, error } = await supabase
    .from('users')
    .select('full_name, phone_number')
    .eq('position', 'Driver')

    if(error) {
        console.log(error.message);
        return {
            drivers: [],
            numbers: []
        };
    }
    else {
        const drivers = data.map(user => user.full_name);
        const numbers = data.map(user => user.phone_number);
        return {
            drivers,
            numbers
        };
    }
}

// Getting list of Cashiers to print onto Table

export async function getCashiers() {
    const { data, error } = await supabase
    .from('users')
    .select('full_name, phone_number')
    .eq('position', 'Cashier')

    if(error) {
        console.log(error.message);
        return {
            cashiers: [],
            numbers: []
        };
    }
    else {
        const cashiers = data.map(user => user.full_name);
        const numbers = data.map(user => user.phone_number);
        return {
            cashiers,
            numbers
        };
    }
}
