import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaUser, FaCalendarAlt, FaUserMd, FaFileInvoice, FaShieldAlt, FaFolderOpen, FaFileAlt, FaChartLine, FaSearch, FaBook, FaBed, FaStethoscope, FaHeartbeat, FaHospital, FaAngleDown } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';

const Home: NextPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showRequestServices, setShowRequestServices] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata',
        hour12: true,
      };
      setCurrentTime(now.toLocaleString('en-IN', options));
    };
    updateTime(); // Initial call
    const intervalId = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const dashboardSections = [
    { title: 'Patient', icon: <FaStethoscope />, href: '/patient', count: 150 },
    { title: 'Appointment', icon: <FaCalendarAlt />, href: '/appointment', count: 25 },
    { title: 'Doctor', icon: <FaUserMd />, href: '/doctor', count: 12 },
    { title: 'Billing', icon: <FaFileInvoice />, href: '/billing', count: 50 },
    { title: 'Insurance', icon: <FaShieldAlt />, href: '/insurance', count: 30 },
    { title: 'Master Data', icon: <FaFolderOpen />, href: '/master-data', count: 200 },
    { title: 'Facility Management', icon: <FaHospital />, href: '/facility-management', count: 10 },
    { title: 'Human Resources', icon: <FaUser />, href: '/human-resources', count: 15 },
    { title: 'Facility Policy', icon: <FaFileAlt />, href: '/facility-policy', count: 5 },
    { title: 'Finance', icon: <FaChartLine />, href: '/finance', count: 20 },
    { title: 'Inspection Checklist', icon: <FaSearch />, href: '/inspection-checklist', count: 8 },
    { title: 'Forms and Daily Checklist', icon: <FaFileAlt />, href: '/forms-daily-checklist', count: 10 },
    { title: 'Key Performance Indicator', icon: <FaChartLine />, href: '/key-performance-indicator', count: 15 },
    { title: 'Audit Reports', icon: <FaBook />, href: '/audit-reports', count: 5 },
    { title: 'Roles and Management', icon: <FaUser />, href: '/roles-management', count: 7 },
    { title: 'Newsletters', icon: <FaBook />, href: '/newsletters', count: 3 },
  ];

  const requestServices = [
    { title: 'Request Appointment', href: '/request-appointment' },
    { title: 'Request Bed', href: '/request-bed' },
    { title: 'Request Consultation', href: '/request-consultation' },
    { title: 'Request Medication', href: '/request-medication' },
  ];

  const services = [
    { title: 'Insurance', href: '/insurance' },
    { title: 'Finance', href: '/finance' },
    { title: 'Billing', href: '/billing' },
    { title: 'Master Data', href: '/master-data' },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <Head>
        <title>Hospital Management Dashboard</title>
        <meta name="description" content="A modern hospital management dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="bg-teal-500 text-white p-4 shadow-md ml-80"> {/* Adjusted ml to 20% of viewport */}
        <ul className="flex items-center justify-between">
          <li className="relative">
            <button
              onMouseEnter={() => setShowRequestServices(true)}
              onMouseLeave={() => setShowRequestServices(false)}
              className="flex items-center space-x-1 hover:text-teal-200"
            >
              <span>Request Services</span>
              <FaAngleDown />
            </button>
            {showRequestServices && (
              <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-20 animate-slide-down">
                {requestServices.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="block px-4 py-2 hover:bg-gray-200">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="relative">
            <button
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
              className="flex items-center space-x-1 hover:text-teal-200"
            >
              <span>Services</span>
              <FaAngleDown />
            </button>
            {showServices && (
              <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-20 animate-slide-down">
                {services.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="block px-4 py-2 hover:bg-gray-200">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link href="/tickets" className="hover:text-teal-200">
              Tickets
            </Link>
          </li>
          <li>
            <Link href="/calendar" className="hover:text-teal-200">
              Calendar
            </Link>
          </li>
          <li>
            <span className="text-sm">{currentTime}</span>
          </li>
        </ul>
      </nav>
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-1 p-6 ml-80 mt-16"> {/* Adjusted ml and added mt for navbar height */}
          <h1 className="text-3xl font-bold mb-6 text-teal-600">Hospital Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardSections.map((section) => (
              <DashboardCard
                key={section.title}
                title={section.title}
                description={`${section.count} ${section.title.toLowerCase()} active`}
                href={section.href}
                icon={section.icon}
              />
            ))}
          </div>
          {/* Dark/Light Mode Toggle */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-teal-600 text-white rounded-lg flex items-center hover:bg-teal-700 transition-colors duration-200"
            >
              {isDarkMode ? <FaHeartbeat /> : <FaHeartbeat />}
              <span className="ml-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
