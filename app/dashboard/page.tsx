import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { MapPin, Activity, Sprout, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {session?.user?.name}!</h1>
        <p className="text-gray-600 mt-2">Here's an overview of your agricultural operations</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Farms"
          value="0"
          icon={<MapPin className="h-8 w-8 text-blue-600" />}
          color="blue"
          href="/dashboard/farms"
        />
        <StatCard
          title="Active Fields"
          value="0"
          icon={<Sprout className="h-8 w-8 text-green-600" />}
          color="green"
          href="/dashboard/farms"
        />
        <StatCard
          title="Active Sensors"
          value="0"
          icon={<Activity className="h-8 w-8 text-purple-600" />}
          color="purple"
          href="/dashboard/sensors"
        />
        <StatCard
          title="Active Alerts"
          value="0"
          icon={<AlertCircle className="h-8 w-8 text-red-600" />}
          color="red"
          href="/dashboard/alerts"
        />
      </div>

      {/* Quick Actions */}
      <div className="card mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/dashboard/farms/new"
            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all text-center"
          >
            <MapPin className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <p className="font-medium text-gray-900">Add New Farm</p>
          </Link>
          <Link
            href="/dashboard/sensors"
            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all text-center"
          >
            <Activity className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <p className="font-medium text-gray-900">Register Sensor</p>
          </Link>
          <Link
            href="/dashboard/analytics"
            className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all text-center"
          >
            <Sprout className="h-8 w-8 text-primary-600 mx-auto mb-2" />
            <p className="font-medium text-gray-900">View Analytics</p>
          </Link>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Getting Started with AgriSenseAI</h2>
        <p className="mb-6">
          Start monitoring your farm in just a few steps. Add your farm, define your fields, and
          register your sensors to begin tracking real-time data.
        </p>
        <Link href="/dashboard/farms/new" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block">
          Create Your First Farm
        </Link>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
  color,
  href,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  href: string;
}) {
  return (
    <Link href={href} className="card hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`bg-${color}-100 p-3 rounded-lg`}>{icon}</div>
      </div>
    </Link>
  );
}
