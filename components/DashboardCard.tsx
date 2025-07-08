import Link from 'next/link';
import React from 'react';

interface DashboardCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  count: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, description, href, icon, count }) => {
  return (
    <Link href={href} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
      <div className="text-teal-600 text-2xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      <span className="text-xl font-bold text-teal-600 animate-pulse mt-2">{count}</span>
    </Link>
  );
};

export default DashboardCard;
