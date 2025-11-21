'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Activity, Plus, Battery, Signal } from 'lucide-react';
import { getSensorTypeLabel, getStatusColor } from '@/lib/utils';

interface Sensor {
  _id: string;
  sensorId: string;
  name: string;
  type: string;
  status: string;
  field: {
    _id: string;
    name: string;
  };
  batteryLevel?: number;
  lastReading?: string;
}

export default function SensorsPage() {
  const [sensors, setSensors] = useState<Sensor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSensors();
  }, []);

  const fetchSensors = async () => {
    try {
      const response = await fetch('/api/sensors');
      const data = await response.json();
      setSensors(data.sensors || []);
    } catch (error) {
      console.error('Failed to fetch sensors:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sensors</h1>
          <p className="text-gray-600 mt-2">Monitor and manage your IoT sensors</p>
        </div>
        <Link href="/dashboard/sensors/new" className="btn-primary flex items-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>Add Sensor</span>
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-600">Loading sensors...</p>
        </div>
      ) : sensors.length === 0 ? (
        <div className="card text-center py-12">
          <Activity className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Sensors Yet</h3>
          <p className="text-gray-600 mb-6">Register your first IoT sensor to start monitoring</p>
          <Link href="/dashboard/sensors/new" className="btn-primary inline-flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Add Your First Sensor</span>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sensors.map((sensor) => (
            <div key={sensor._id} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Activity className="h-6 w-6 text-purple-600" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(sensor.status)}`}>
                  {sensor.status}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{sensor.name}</h3>
              <p className="text-sm text-gray-600 mb-1">ID: {sensor.sensorId}</p>
              <p className="text-sm text-gray-600 mb-4">Field: {sensor.field.name}</p>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium text-gray-900">{getSensorTypeLabel(sensor.type)}</span>
                </div>

                {sensor.batteryLevel !== undefined && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 flex items-center space-x-1">
                      <Battery className="h-4 w-4" />
                      <span>Battery:</span>
                    </span>
                    <span className="font-medium text-gray-900">{sensor.batteryLevel}%</span>
                  </div>
                )}

                {sensor.lastReading && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 flex items-center space-x-1">
                      <Signal className="h-4 w-4" />
                      <span>Last Reading:</span>
                    </span>
                    <span className="text-xs text-gray-900">
                      {new Date(sensor.lastReading).toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              <Link
                href={`/dashboard/sensors/${sensor._id}`}
                className="mt-4 block text-center text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
