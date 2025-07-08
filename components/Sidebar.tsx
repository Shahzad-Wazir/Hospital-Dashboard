import Link from 'next/link';
import { useState } from 'react';
import { FaUser, FaCalendarAlt, FaUserMd, FaFileInvoice, FaShieldAlt, FaFolderOpen, FaFileAlt, FaChartLine, FaSearch, FaBook, FaUserCircle, FaStethoscope, FaHeartbeat, FaHospital } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [showAllIcons, setShowAllIcons] = useState(false);
  const [showAccountForm, setShowAccountForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign In and Sign Up

  const dashboardIcons = [
    { title: 'Patients', icon: <FaStethoscope />, href: '/patients' },
    { title: 'Appointments', icon: <FaCalendarAlt />, href: '/appointments' },
    { title: 'Doctors', icon: <FaUserMd />, href: '/doctors' },
    { title: 'Billing', icon: <FaFileInvoice />, href: '/billing' },
    { title: 'Insurance', icon: <FaShieldAlt />, href: '/insurance' },
    { title: 'Master Data', icon: <FaFolderOpen />, href: '/master-data' },
  ];

  const allOtherIcons = [
    { title: 'Facility Management', icon: <FaHospital />, href: '/facility-management' },
    { title: 'Human Resources', icon: <FaUser />, href: '/human-resources' },
    { title: 'Facility Policy', icon: <FaFileAlt />, href: '/facility-policy' },
    { title: 'Finance', icon: <FaChartLine />, href: '/finance' },
    { title: 'Inspection Checklist', icon: <FaSearch />, href: '/inspection-checklist' },
    { title: 'Forms and Daily Checklist', icon: <FaFileAlt />, href: '/forms-daily-checklist' },
    { title: 'Key Performance Indicator', icon: <FaChartLine />, href: '/key-performance-indicator' },
    { title: 'Audit Reports', icon: <FaBook />, href: '/audit-reports' },
    { title: 'Roles and Management', icon: <FaUser />, href: '/roles-management' },
    { title: 'Newsletters', icon: <FaBook />, href: '/newsletters' },
  ];

  const toggleAllIcons = () => {
    setShowAllIcons(!showAllIcons);
  };

  const handleAccountClick = () => {
    setShowAccountForm(true);
  };

  const handleSignInOrUp = async () => {
    // Dummy OAuth flow simulation (replace with real API call)
    const response = await fetch('/api/link-account', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, action: isSignUp ? 'signup' : 'signin' }),
    });
    if (response.ok) {
      alert(`${isSignUp ? 'Sign Up' : 'Sign In'} successful! Redirecting to external site...`);
      window.location.href = 'https://accounts.google.com'; // Replace with actual OAuth URL
    } else {
      alert(`${isSignUp ? 'Sign Up' : 'Sign In'} failed. Please try again.`);
    }
  };

  return (
    <>
      <aside
        className={`bg-teal-600 text-white p-4 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out fixed top-0 bottom-0 z-10 w-[20%]`}
      >
        {/* Main Header Content */}
        <div className="mt-0 flex flex-col items-center h-full">
          <div className="w-full mb-6">
            <h1 className="text-2xl font-bold text-center text-white">Hospital Menu</h1>
          </div>
          {/* Navbar Icons */}
          <nav className="flex flex-col gap-4 flex-grow overflow-y-auto">
            {dashboardIcons.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center space-x-3 p-2 hover:bg-teal-700 rounded-lg transition-colors duration-200"
              >
                {item.icon}
                <span className="text-base">{item.title}</span>
              </Link>
            ))}
            {showAllIcons &&
              allOtherIcons.map((item, index) => (
                <Link
                  key={index + dashboardIcons.length}
                  href={item.href}
                  className="flex items-center space-x-3 p-2 hover:bg-teal-700 rounded-lg transition-colors duration-200"
                >
                  {item.icon}
                  <span className="text-base">{item.title}</span>
                </Link>
              ))}
            <button
              onClick={toggleAllIcons}
              className="text-yellow-300 hover:text-yellow-100 text-sm ml-3 focus:outline-none mt-2"
            >
              {showAllIcons ? 'Hide Other Icons' : 'Show All Options'}
            </button>
          </nav>
          {/* User Account Section - Always Visible at Bottom */}
          <div className="mt-auto w-full">
            <div
              className="flex items-center space-x-3 p-3 bg-teal-700 rounded-lg cursor-pointer hover:bg-teal-800 transition-colors duration-200"
              onClick={handleAccountClick}
            >
              <FaUserCircle className="text-white" size={28} />
              <span className="text-base font-medium text-white">User Account</span>
            </div>
          </div>
        </div>
      </aside>
      {/* Modal Popup for Account Form */}
      {showAccountForm && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setShowAccountForm(false)}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-2xl transform transition-all duration-300 ease-in-out scale-100 w-96"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2 className="text-2xl font-semibold mb-5 text-gray-900">{isSignUp ? 'Create Account' : 'Sign In'}</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
            />
            <button
              onClick={handleSignInOrUp}
              className="w-full p-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200 font-semibold"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
            <button
              onClick={() => setShowAccountForm(false)}
              className="w-full mt-3 p-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
            >
              Cancel
            </button>
            <p className="mt-4 text-center text-sm text-gray-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-teal-600 hover:text-teal-800 font-medium underline"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
