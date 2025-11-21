'use client';

import { AlertCircle, CheckCircle, Info } from 'lucide-react';

export default function AlertsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Alerts & Notifications</h1>
        <p className="text-gray-600 mt-2">Monitor critical events and warnings</p>
      </div>

      <div className="card text-center py-12">
        <Info className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Active Alerts</h3>
        <p className="text-gray-600">All systems are operating normally</p>

        <div className="mt-8 grid md:grid-cols-3 gap-4 text-left">
          <div className="p-4 bg-green-50 rounded-lg">
            <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
            <h4 className="font-semibold text-gray-900">Normal Conditions</h4>
            <p className="text-sm text-gray-600 mt-1">All sensors reporting within normal ranges</p>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg">
            <AlertCircle className="h-8 w-8 text-yellow-600 mb-2" />
            <h4 className="font-semibold text-gray-900">Warnings</h4>
            <p className="text-sm text-gray-600 mt-1">No warnings at this time</p>
          </div>

          <div className="p-4 bg-red-50 rounded-lg">
            <AlertCircle className="h-8 w-8 text-red-600 mb-2" />
            <h4 className="font-semibold text-gray-900">Critical Alerts</h4>
            <p className="text-sm text-gray-600 mt-1">No critical alerts</p>
          </div>
        </div>
      </div>
    </div>
  );
}
