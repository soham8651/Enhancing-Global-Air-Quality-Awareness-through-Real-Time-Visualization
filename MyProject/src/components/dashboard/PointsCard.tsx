import React from 'react';
import { Award } from 'lucide-react';

export default function PointsCard() {
  return (
    <div className="bg-emerald-50 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Total Points</h3>
        <Award className="w-5 h-5 text-emerald-600" />
      </div>
      <p className="text-3xl font-bold text-emerald-600 mt-2">10,245</p>
      <p className="text-sm text-gray-600 mt-1">+245 this week</p>
    </div>
  );
}