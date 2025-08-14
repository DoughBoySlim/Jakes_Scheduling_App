// request.js
import supabase from '../config/supabaseClient.js'

export async function getCurrentUserId() {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
        throw error || new Error("User not found");
    }

    const { data: idData, error: idError } = await supabase
        .from('users')
        .select('employee_id')
        .eq('email', user.email)
        .single();

    if (idError) {
        throw idError;
    }

    return idData.employee_id;
}

export async function showAllRequestInfo() {
    const userId = await getCurrentUserId();

    const { data, error } = await supabase
        .from('requests')
        .select('*')
        .eq('employee_id', userId);

    if (error) {
        throw error;
    }

    return data;
}

export async function addRequest(startDate, endDate) {
    const userId = await getCurrentUserId();

    await supabase
    .from('requests')
    .insert([
        {
            employee_id: userId,
            start_date: startDate,
            end_date: endDate,
        }
    ]);

}
