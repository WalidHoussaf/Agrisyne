'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface MapViewProps {
  center: [number, number];
  zoom?: number;
  markers?: Array<{
    position: [number, number];
    title: string;
    description?: string;
  }>;
  polygons?: Array<{
    positions: [number, number][];
    title: string;
  }>;
}

export default function MapView({ center, zoom = 13, markers = [], polygons = [] }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView(center, zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    mapInstanceRef.current = map;

    // Add markers
    markers.forEach((marker) => {
      const leafletMarker = L.marker(marker.position).addTo(map);
      if (marker.description) {
        leafletMarker.bindPopup(`<b>${marker.title}</b><br/>${marker.description}`);
      } else {
        leafletMarker.bindPopup(`<b>${marker.title}</b>`);
      }
    });

    // Add polygons
    polygons.forEach((polygon) => {
      L.polygon(polygon.positions, {
        color: '#16a34a',
        fillColor: '#22c55e',
        fillOpacity: 0.3,
      })
        .addTo(map)
        .bindPopup(`<b>${polygon.title}</b>`);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [center, zoom, markers, polygons]);

  return <div ref={mapRef} className="w-full h-[400px] rounded-lg" />;
}
