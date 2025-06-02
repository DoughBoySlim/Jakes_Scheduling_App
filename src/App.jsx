import { useState } from 'react'
import reactLogo from './assets/JakesLogo_Revamped.png'
import './App.css'

function App() {

  return (
    <>
      <div className="sign-up-header">
        <h1>The Ultimate Scheduling Application</h1>
      </div>
      
      <div className='SignUpArea'>
        <div className="logo">
          <img src={reactLogo} alt='JakesLogo'></img>
        </div>
        <div className='SignUp'>
          <h1 class="text-5x1 font-bold center"> Sign In </h1>
          <h3> Username </h3>
          <h3> Password </h3>
          <button className='Submit'>Submit</button>
        </div>
      </div>

      <div className='footer'>
        <h1>@CausticCreations</h1>
      </div>

    </>
  )
}

export default App
