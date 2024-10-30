import React from 'react';
import { Wind } from 'lucide-react';

export default function AQICard() {
  return (
    <div className="bg-emerald-50 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Air Quality</h3>
        <Wind className="w-5 h-5 text-emerald-600" />
      </div>
      <p className="text-3xl font-bold text-emerald-600 mt-2">42</p>
      <p className="text-sm text-gray-600 mt-1">Good</p>
      <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '42%' }}></div>
      </div>
    </div>
  );
}