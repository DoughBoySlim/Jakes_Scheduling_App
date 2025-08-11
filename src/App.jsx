import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeHome from './components/EmployeeHome.jsx'
import MainPage from './components/MainPage.jsx'
import ManagerHome from './components/ManagerHome.jsx'
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path='/employee_home' element={<EmployeeHome/>}/>
        <Route path='/manager_home' element={<ManagerHome/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default App
