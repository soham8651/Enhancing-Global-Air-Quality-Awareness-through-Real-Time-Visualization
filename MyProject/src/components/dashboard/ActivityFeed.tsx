import React from 'react';
import { Bike, Lightbulb, Recycle } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: 'Used Public Transport',
    points: 50,
    time: '2 hours ago',
    icon: Bike,
  },
  {
    id: 2,
    title: 'Saved Energy',
    points: 30,
    time: '4 hours ago',
    icon: Lightbulb,
  },
  {
    id: 3,
    title: 'Recycled Waste',
    points: 40,
    time: '6 hours ago',
    icon: Recycle,
  },
];

export default function ActivityFeed() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
          <div className="bg-emerald-100 p-2 rounded-lg">
            <activity.icon className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-800">{activity.title}</h3>
            <p className="text-sm text-gray-500">{activity.time}</p>
          </div>
          <span className="text-emerald-600 font-medium">+{activity.points}</span>
        </div>
      ))}
    </div>
  );
}