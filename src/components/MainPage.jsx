import supabase from '../config/supabaseClient'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import reactLogo from '../assets/JakesLogo_Revamped.png'
import EmployeeHome from './EmployeeHome.jsx'
import ManagerHome from './ManagerHome.jsx'
import { signIn, signUp, isManager } from '../api/auth.js'
import '../index.css'

function MainPage() {

    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    
    async function onSubmitPress() {

        // Quality of Life Test to see if fields are empty
        if(email == '' && password == '') {
            setErrorMessage('please fill in your username and password');
            return;
        }
        else if(email == '') {
            setErrorMessage('please fill in a username');
            return;
        } 
        else if(password == '') {
            setErrorMessage('please fill in a password');
            return;
        }

        const { data, error } = await signIn(email, password);

        if(error) {
            setErrorMessage(error.message);
        }
        else {
            const { data: managerData, error: managerError} = await isManager(email);
            if(managerError) {
                setErrorMessage(managerError.message);
            }
            else {
                if(managerData && managerData.isManager) {
                    navigate('/manager-home');

                }
                else {
                    navigate('/employee-home');
                }
            }
        }
    }

    async function onSignUp() {
        const { data, error } = await signUp(email, password);

        if(!error) {
            await supabase
            .from('users')
            .insert({
                employee_id: id,
                full_name: email,
                isManager: false,
                auth_id: data.user.id 
            });
        }
        else {
            setErrorMessage(error.message);
            alert(error);
        }

    }

    return (
      <>
      <div className='min-h-screen flex flex-col'>
        <main className='flex-grow'>
        <div className="w-full bg-[#ad4c4c] text-[white] py-1 font-display">
          <h1 className="text-3xl/25 text-center ">Welcome To The Jake's Scheduling Application</h1>
        </div>
        
        <div className='flex flex-row p-[2rem]'>
          <div className="basis-1/2 h-3/4">
            <img src={reactLogo} alt='JakesLogo'></img>
          </div>
          <div className='basis-1/2 flex flex-col p-10 my-[6rem] '>
            <h1 className="text-4xl text-center text-[#fc0301] font-display"> Sign In </h1>
            <div className='flex flex-col items-start'>
              <h3 className='text-md pt-5 font-display'> Employee Id </h3>
              <input className="bg-[#ad4c4c] rounded-sm w-full" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='flex flex-col items-start'>
              <h3 className="text-md pt-2 font-display"> Password </h3>
              <input className="bg-[#ad4c4c] rounded-sm w-full" type="password" onChange={e => setPassword(e.target.value)}/>
              {errorMessage && <div className="text-red-500 text-center font-display">{errorMessage}</div>}
            </div>
            <button className='p-3 bg-[#ad4c4c] rounded-sm border mx-auto my-6 border-black text-white font-display hover:bg-[#ad4c5c] cursor-pointer' onClick={onSubmitPress}>Submit</button>
          </div>
        </div>
        </main>

        <footer className="bg-[#fc0301] w-full shadow-sm m-0">
          <div className='w-full max-w-screen-xl mx-auto py-8 flex justify-center'>
            <span className="text-center text-white text-xl font-display">@CausticCreations</span>
          </div>
        </footer>
      </div>

      
      </>
    )

}

export default MainPage;