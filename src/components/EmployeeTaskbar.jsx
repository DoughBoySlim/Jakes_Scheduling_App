import { useCurrentUser } from '../api/calendar.js';
import reactLogo from '../assets/JakesLogo_Revamped.png';

function EmployeeTaskBar() {
  const currentUser = useCurrentUser();

  return (
    <div className="w-screen bg-[#ad5c5c] flex items-center px-4 py-2">
      {/* Image on the left */}
      <img src={reactLogo} alt="JakesLogo" className="w-24 h-auto flex-shrink-0" />

      {/* Text container fills remaining space and centers text */}
      <div className="flex-grow flex justify-center">
        <h1 className="text-white whitespace-nowrap">
          Hello, {currentUser}!
        </h1>
      </div>
    </div>

  );
}

export default EmployeeTaskBar;
