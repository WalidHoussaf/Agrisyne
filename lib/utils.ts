import { type ClassValue, clsx } from 'clsx';

/**
 * Merge class names (useful for Tailwind CSS)
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format date to readable string
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format date and time to readable string
 */
export function formatDateTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number = 50): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Calculate percentage
 */
export function percentage(value: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
}

/**
 * Get sensor type label
 */
export function getSensorTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    'soil-moisture': 'Soil Moisture',
    temperature: 'Temperature',
    humidity: 'Humidity',
    ph: 'pH Level',
    light: 'Light Intensity',
    rainfall: 'Rainfall',
  };
  return labels[type] || type;
}

/**
 * Get sensor unit
 */
export function getSensorUnit(type: string): string {
  const units: Record<string, string> = {
    'soil-moisture': '%',
    temperature: '°C',
    humidity: '%',
    ph: 'pH',
    light: 'lux',
    rainfall: 'mm',
  };
  return units[type] || '';
}

/**
 * Get status color class
 */
export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    active: 'text-green-600 bg-green-100',
    inactive: 'text-gray-600 bg-gray-100',
    maintenance: 'text-yellow-600 bg-yellow-100',
    error: 'text-red-600 bg-red-100',
    fallow: 'text-gray-600 bg-gray-100',
    preparation: 'text-blue-600 bg-blue-100',
  };
  return colors[status] || 'text-gray-600 bg-gray-100';
}
