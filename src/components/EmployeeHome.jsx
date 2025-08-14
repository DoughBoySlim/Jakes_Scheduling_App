import '../index.css';
import MyCalendar from './Calendar.jsx';
import EmployeeButtons from './EmployeeButtons.jsx';
import EmployeeRequestInfo from './EmployeeRequestInfo.jsx';
import EmpTaskBar from './EmployeeTaskbar.jsx';

function EmployeeHome() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-[#ececec]">
      <EmpTaskBar />
      <EmployeeButtons/>
      <main className="flex-grow max-w-screen-xl mx-auto w-full px-4">
        <MyCalendar />
        <EmployeeRequestInfo/>
      </main>

    </div>
  );
}

export default EmployeeHome;
