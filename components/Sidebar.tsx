import Link from 'next/link';
import { useState } from 'react';
import { FaUser, FaCalendarAlt, FaUserMd, FaFileInvoice, FaShieldAlt, FaFolderOpen, FaFileAlt, FaChartLine, FaSearch, FaBook } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [showAllIcons, setShowAllIcons] = useState(false);

  const dashboardIcons = [
    { title: 'Patient', icon: <FaUser />, href: '/patient' },
    { title: 'Appointment', icon: <FaCalendarAlt />, href: '/appointment' },
    { title: 'Doctor', icon: <FaUserMd />, href: '/doctor' },
    { title: 'Billing', icon: <FaFileInvoice />, href: '/billing' },
    { title: 'Insurance', icon: <FaShieldAlt />, href: '/insurance' },
    { title: 'Master Data', icon: <FaFolderOpen />, href: '/master-data' },
  ];

  const allOtherIcons = [
    { title: 'Facility Management', icon: <FaFolderOpen />, href: '/facility-management' },
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

  return (
    <aside
      className={`bg-teal-500 text-white p-4 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 transition-transform duration-300 ease-in-out fixed md:static z-10 w-64 min-h-screen`}
    >
      {/* Main Header Content */}
      <div className="mt-0 flex flex-col items-center">
        <div className="w-full mb-4">
          <h1 className="text-xl font-bold text-center">Menu</h1>
        </div>
        {/* Navbar Icons */}
        <nav className="flex flex-col gap-4 flex-grow">
          {dashboardIcons.map((item, index) => (
            <Link key={index} href={item.href} className="flex items-center space-x-2 hover:text-gray-200">
              {item.icon}
              <span className="text-sm">{item.title}</span>
            </Link>
          ))}
          {showAllIcons &&
            allOtherIcons.map((item, index) => (
              <Link key={index + dashboardIcons.length} href={item.href} className="flex items-center space-x-2 hover:text-gray-200">
                {item.icon}
                <span className="text-sm">{item.title}</span>
              </Link>
            ))}
          <button
            onClick={toggleAllIcons}
            className="text-yellow-300 hover:text-yellow-100 text-sm ml-2 focus:outline-none"
          >
            {showAllIcons ? 'Hide Other Icons' : 'Bring All Other Icons'}
          </button>
        </nav>
        {/* User Account Section - Always Visible at Bottom */}
        <div className="mt-auto w-full">
          <div className="flex items-center space-x-2 p-2 bg-teal-600 rounded">
            <span className="text-white">Logo</span> {/* Placeholder for logo */}
            <span className="text-sm text-white">User Account</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;