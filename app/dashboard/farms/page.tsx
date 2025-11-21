'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MapPin, Plus } from 'lucide-react';

interface Farm {
  _id: string;
  name: string;
  location: {
    city: string;
    state: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  totalArea: number;
  createdAt: string;
}

export default function FarmsPage() {
  const [farms, setFarms] = useState<Farm[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFarms();
  }, []);

  const fetchFarms = async () => {
    try {
      const response = await fetch('/api/farms');
      const data = await response.json();
      setFarms(data.farms || []);
    } catch (error) {
      console.error('Failed to fetch farms:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Farms</h1>
          <p className="text-gray-600 mt-2">Manage your farms and their fields</p>
        </div>
        <Link href="/dashboard/farms/new" className="btn-primary flex items-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>Add Farm</span>
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-600">Loading farms...</p>
        </div>
      ) : farms.length === 0 ? (
        <div className="card text-center py-12">
          <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Farms Yet</h3>
          <p className="text-gray-600 mb-6">Get started by adding your first farm</p>
          <Link href="/dashboard/farms/new" className="btn-primary inline-flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Add Your First Farm</span>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {farms.map((farm) => (
            <Link
              key={farm._id}
              href={`/dashboard/farms/${farm._id}`}
              className="card hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{farm.name}</h3>
              <p className="text-gray-600 mb-4">
                {farm.location.city}, {farm.location.state}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Area: {farm.totalArea} hectares</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
