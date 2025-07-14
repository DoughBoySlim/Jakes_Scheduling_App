import supabase from "../config/supabaseClient";
import { useState } from 'react'

const [errorMessage, setErrorMessage] = useState('');
const [loggedIn, setLoggedIn] = useState(false);

export async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
    if(error) {
        setErrorMessage(error);
    }
    else {
        setLoggedIn(true);
    }
}