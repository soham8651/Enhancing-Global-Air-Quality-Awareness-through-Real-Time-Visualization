import React, { useState } from 'react';
import { Bike, Lightbulb, Recycle, Droplet } from 'lucide-react';
import type { Activity } from '../types';

const categories = [
  { id: 'transport', icon: Bike, label: 'Transport' },
  { id: 'energy', icon: Lightbulb, label: 'Energy' },
  { id: 'waste', icon: Recycle, label: 'Waste' },
  { id: 'water', icon: Droplet, label: 'Water' },
];

const mockActivities: Activity[] = [
  {
    id: '1',
    title: 'Bike to Work',
    description: 'Use a bicycle for your daily commute instead of driving',
    points: 100,
    difficulty: 'medium',
    category: 'transport',
    proofRequired: true,
  },
  {
    id: '2',
    title: 'LED Bulb Switch',
    description: 'Replace traditional bulbs with LED alternatives',
    points: 50,
    difficulty: 'easy',
    category: 'energy',
    proofRequired: true,
  },
  {
    id: '3',
    title: 'Recycle Electronics',
    description: 'Properly dispose of old electronics at recycling centers',
    points: 150,
    difficulty: 'hard',
    category: 'waste',
    proofRequired: true,
  },
  {
    id: '4',
    title: 'Fix Leaky Faucets',
    description: 'Identify and repair any leaking taps in your home',
    points: 75,
    difficulty: 'medium',
    category: 'water',
    proofRequired: true,
  },
  {
    id: '5',
    title: 'Public Transport Day',
    description: 'Use public transportation for all your travel needs today',
    points: 80,
    difficulty: 'easy',
    category: 'transport',
    proofRequired: true,
  },
  {
    id: '6',
    title: 'Smart Thermostat',
    description: 'Install a programmable thermostat for better energy management',
    points: 120,
    difficulty: 'medium',
    category: 'energy',
    proofRequired: true,
  },
];

export default function Activities() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentActivity, setCurrentActivity] = useState<Activity | null>(null);

  const filteredActivities = selectedCategory === 'all'
    ? mockActivities
    : mockActivities.filter(activity => activity.category === selectedCategory);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Activities</h1>
        <div className="flex space-x-2">
          <select
            className="bg-white border border-gray-300 rounded-lg px-4 py-2"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setSelectedCategory(id)}
            className={`p-4 rounded-xl flex flex-col items-center justify-center space-y-2 transition-all
              ${selectedCategory === id ? 'bg-emerald-100 text-emerald-700' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
          >
            <Icon className="w-6 h-6" />
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActivities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} onStart={() => setCurrentActivity(activity)} />
        ))}
      </div>

      {currentActivity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold text-gray-800">{currentActivity.title}</h2>
            <p className="mt-2 text-gray-600">{currentActivity.description}</p>
            {currentActivity.proofRequired && (
              <div className="mt-4">
                <label className="block text-gray-700">Upload proof of completion:</label>
                <input type="file" className="mt-2 p-2 border border-gray-300 rounded-lg w-full" />
              </div>
            )}
            <div className="mt-4 flex justify-end space-x-2">
              <button onClick={() => setCurrentActivity(null)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg">Cancel</button>
              <button onClick={() => alert('Activity started!')} className="px-4 py-2 bg-emerald-600 text-white rounded-lg">Start Activity</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ActivityCard({ activity, onStart }: { activity: Activity, onStart: () => void }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-800">{activity.title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium
          ${activity.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
          activity.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
          'bg-red-100 text-red-700'}`}>
          {activity.difficulty}
        </span>
      </div>
      <p className="mt-2 text-gray-600">{activity.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-emerald-600 font-semibold">{activity.points} points</span>
        <button onClick={onStart} className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
          Start Activity
        </button>
      </div>
    </div>
  );
}
