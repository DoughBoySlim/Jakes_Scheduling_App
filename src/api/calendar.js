import supabase from "../config/supabaseClient";

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


// Getting A User's Name to print into the Calendar for others to see:

export async function getUserFullName(id) {
    const { data, error } = await supabase
    .from('users')
    .select('full_name')
    .eq('employee_id', id)
    .single();

    return { data, error };
}

// Getting list of Managers to print onto Table

export async function getManagers() {
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

// Getting list of Cooks to print onto Table

export async function getCooks() {
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