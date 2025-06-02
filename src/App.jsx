import { useState } from 'react'
import reactLogo from './assets/JakesLogo_Revamped.png'
import './App.css'

function App() {

  return (
    <>
    <div className='min-h-screen flex flex-col'>
      <main className='flex-grow'>
      <div className="w-full bg-[#ad4c4c] text-[white] py-1 font-display">
        <h1 className="text-3xl/25 text-center ">Welcome To The Jake's Scheduling Application</h1>
      </div>
      
      <div className='static'>
        <div class="inline-block top-0">
          <img src={reactLogo} alt='JakesLogo'></img>
        </div>
        <div className='absolute inline-block'>
          <h1 class="text-5x1 font-bold center"> Sign In </h1>
          <h3> Username </h3>
          <h3> Password </h3>
          <button className='Submit'>Submit</button>
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

export default App
