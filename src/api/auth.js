import supabase from "../config/supabaseClient";


// Checking if the Username and Password are in the DB
export async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    return { data, error };
}

export async function signUp(email, password) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });

    return { data, error };
}


// Writing a function to check if the user is a manager from the DB column 'isManager'
export async function isManager(username) {
    const { data, error } = await supabase
    .from("users")
    .select('position')
    .eq('email', username)
    .single();
    return { data, error };
}

export async function getEmployeeId() {
    
}