import React from 'react';
import { LineChart, Leaf, Award, Activity as ActivityIcon, Users } from 'lucide-react';
import AQICard from './dashboard/AQICard';
import PointsCard from './dashboard/PointsCard';
import ActivityFeed from './dashboard/ActivityFeed';
import ProgressChart from './dashboard/ProgressChart';

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AQICard />
        <PointsCard />
        <div className="bg-emerald-50 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Daily Streak</h3>
            <ActivityIcon className="w-5 h-5 text-emerald-600" />
          </div>
          <p className="text-3xl font-bold text-emerald-600 mt-2">7 Days</p>
          <p className="text-sm text-gray-600 mt-1">Keep it up!</p>
        </div>
        <div className="bg-emerald-50 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Level</h3>
            <Users className="w-5 h-5 text-emerald-600" />
          </div>
          <p className="text-3xl font-bold text-emerald-600 mt-2">Level 5</p>
          <p className="text-sm text-gray-600 mt-1">Earth Guardian</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Progress Overview</h2>
          <ProgressChart />
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}