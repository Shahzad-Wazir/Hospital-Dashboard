import Link from 'next/link';

interface DashboardCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, description, href, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center">
      <div className="mr-4 text-teal-500">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <Link href={href} className="text-teal-600 hover:underline mt-2 block text-sm">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default DashboardCard;