import supabase from './config/supabaseClient'
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
      
      <div className='flex flex-row p-[2rem]'>
        <div className="basis-1/2 h-3/4">
          <img src={reactLogo} alt='JakesLogo'></img>
        </div>
        <div className='basis-1/2 flex flex-col p-10 my-[6rem] '>
          <h1 class="text-4xl text-center text-[#fc0301] font-display"> Sign In </h1>
          <div className='flex flex-col items-start'>
            <h3 className='text-md pt-5 font-display'> Username </h3>
            <input className="bg-[#ad4c4c] rounded-sm w-full"></input>
          </div>
          <div className='flex flex-col items-start'>
            <h3 className="text-md pt-2 font-display"> Password </h3>
            <input className="bg-[#ad4c4c] rounded-sm w-full "></input>
          </div>
          <button className='p-3 bg-[#ad4c4c] rounded-sm border mx-auto my-6 border-black text-white font-display'>Submit</button>
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
