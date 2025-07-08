import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaUser, FaCalendarAlt, FaUserMd, FaFileInvoice, FaShieldAlt, FaFolderOpen, FaFileAlt, FaChartLine, FaSearch, FaBook, FaMoon, FaSun } from 'react-icons/fa';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';

const Home: NextPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

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
    { title: 'Patient', icon: <FaUser />, href: '/patient' },
    { title: 'Appointment', icon: <FaCalendarAlt />, href: '/appointment' },
    { title: 'Doctor', icon: <FaUserMd />, href: '/doctor' },
    { title: 'Billing', icon: <FaFileInvoice />, href: '/billing' },
    { title: 'Insurance', icon: <FaShieldAlt />, href: '/insurance' },
    { title: 'Master Data', icon: <FaFolderOpen />, href: '/master-data' },
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

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      <Head>
        <title>Hospital Management Dashboard</title>
        <meta name="description" content="A modern hospital management dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header currentTime={currentTime} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardSections.map((section) => (
              <DashboardCard
                key={section.title}
                title={section.title}
                description={`Manage your ${section.title.toLowerCase()} here.`}
                href={section.href}
                icon={section.icon}
              />
            ))}
          </div>
          {/* Dark/Light Mode Toggle */}
          <div className="mt-4 flex justify-end">
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-teal-600 text-white rounded flex items-center"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
              <span className="ml-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;