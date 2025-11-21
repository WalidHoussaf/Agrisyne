'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SensorData {
  timestamp: string;
  value: number;
}

interface SensorChartProps {
  data: SensorData[];
  unit: string;
  title: string;
  color?: string;
}

export default function SensorChart({ data, unit, title, color = '#16a34a' }: SensorChartProps) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            tickFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            }}
          />
          <YAxis unit={unit} />
          <Tooltip
            labelFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });
            }}
            formatter={(value: number) => [`${value}${unit}`, 'Value']}
          />
          <Legend />
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} name={title} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
